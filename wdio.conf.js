const fs = require('fs');
const path = require('path');
const { removeSync, emptyDirSync } = require('fs-extra');
const allure = require('allure-commandline');
exports.config = {
    runner: 'local',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: [
        //'./features/**/*.feature',
        './features/login.feature',
        './features/offers.feature',
        './features/accountsettings.feature',
        './features/digitalservice.feature',
        './features/freembs.feature',
        './features/rechargescratchcard.feature',
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        deviceName: 'Infinix X690B',
        appPackage: 'com.telenor.pakistan.mytelenor',
        appActivity: '.SplashScreen.Splash',
        automationName: 'UiAutomator2',
        noReset: true,
        // fullReset: false,
        // newCommandTimeout: 60000,
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 300000, // increase global wait timeout
    connectionRetryTimeout: 180000, // increase connection retry timeout
    cucumberOpts: {
        timeout: 120000, // increase step timeout
    },
    connectionRetryCount: 3,
    services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
                port: 4723,
                basePath: '/wd/hub'
            },
            command: 'appium'
        }]
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 120000,
        ignoreUndefinedDefinitions: false,
    },
    reporters: ['spec', ['junit', {
        outputDir: './junit-results',
        outputFileFormat: function (options) {
            return `results-${options.cid}.xml`;
        }
    }],
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    before: function (capabilities, specs) {
        browser.setTimeout({ implicit: 10000}); 
        emptyDirSync('allure-results');

    },
    // before: async function (capabilities, specs) {
    //     const LoginPage = require('./pageobjects/login.page');
    //     await LoginPage.open();
    //     await LoginPage.login('03405045207', 'telenor123');
    // },
    afterScenario: async function (world) {
        if (world.result.status === 'failed') {
            console.error(`Scenario failed: ${world.result.message}`);
        }
    },
    afterStep: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            try {
                const screenshot = await browser.takeScreenshot();
                const screenshotDir = path.join(__dirname, 'screenshots');
                if (!fs.existsSync(screenshotDir)) {
                    fs.mkdirSync(screenshotDir, { recursive: true });
                }
                const testName = test && test.title ? test.title.replace(/\s+/g, '_') : 'undefined_test';
                const screenshotPath = path.join(screenshotDir, `${testName}_${new Date().getTime()}.png`);
                fs.writeFileSync(screenshotPath, screenshot, 'base64');
            } catch (e) {
                console.error('Failed to save screenshot:', e);
            }
        }
    },
    onComplete: function (exitCode, config, capabilities, results) {
        const reportError = new Error('Could not generate Allure report');
        const generation = allure(['generate', 'allure-results', '--clean']);
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 5000);

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout);

                if (exitCode !== 0) {
                    return reject(reportError);
                }

                console.log('Allure report successfully generated');
                resolve();
            });
        });
    }
};
