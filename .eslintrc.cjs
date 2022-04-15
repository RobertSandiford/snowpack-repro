
const aliases = require('./tools/allAliases.cjs')

//console.log('aliases:', aliases)

module.exports = {
    ignorePatterns: [
        "node_modules/**/*",
        "_build/**/*",
        "**/*.min.js",
        "**/*.min.cjs",
        "sxyCache",
        "ReactApp/**/*.mocha.js" // legacy, leave this
    ],
    globals: {
        "__rev_location__": "readonly", // frontend global
        "sxy": "readonly", // dep
        "chalk": "readonly", // dep
        "css": "readonly", // custom babel plugin magic function
        "Sass": "readonly", // custom babel plugin magic function
        //"packageName": "readonly", // project global
        "mode": "readonly", // project global
        "isDev": "readonly", // project global
        "isProd": "readonly", // project global
        "isDebug": "readonly", // project global
        "isTesting": "readonly", // project global
        "isServer": "readonly", // project global
        "isClient": "readonly", // project global
        "out": "readonly", // project global func
        "log": "readonly", // project global func
        "warn": "readonly", // project global func
        "errorOut": "readonly", // project global func
        "combine": "readonly", // project global func
        "valueById": "readonly", // project global func
        "valueByName": "readonly", // project global func
        "radioValue": "readonly", // project global func
        "applyStyles": "readonly", // project global func
        "usingStyles": "readonly", // project global func
        "withStyles": "readonly", // project global func
        "styledComponent": "readonly", // project global func
        "isSxyLoaded": "readonly", // sxy-loader internal
        "__sxy_import__": "readonly", // sxy-loader internal
        "__sxy_export__": "readonly", // sxy-loader internal
        "__webpack_modules__": "readonly", // webpack internal
        "__webpack_require__": "readonly", // webpack internal
    },
    extends: [
        "eslint:recommended",
        "sandi-react",
        //"sxy-standard/all"
    ],
    plugins: ["testing-library"],
    settings: {
        "import/extensions": "",
        "import/resolver": {
            "babel-module": {
                "alias": aliases
            }
        }
    },
    rules: {
        "import/extensions": ["error", "always"],
        "consistent-return": "off",
        "no-restricted-globals": [
            "warn",
            {
                "name": "history",
                "message": "Are you sure you want to use the 'history' global, not a local variable?"
            },
            {
                "name": "location",
                "message": "Are you sure you want to use the 'location' global, not a local variable?"
            }
        ] // is this safe? // move this to sandi?
    },
    overrides: [
        {
            "files": ["**/*.cjs"],
            "rules": {
                "import/extensions": "off"
            }
        },
        // {
        //     "files": ["tools/**/*"],
        //     "rules": {
        //         "no-console": "off"
        //     }
        // },
        {
            "files": ["local_modules/sxy-jsx-runtime/**"],
            "rules": {
                "no-restricted-globals": "off"
            }
        },
        {
            "files": ["**/*.test.js", "**/*.mocha.js", "**/*.sxyt.js"],
            "extends": [
                "plugin:testing-library/react"
            ],
            "rules": {
                "testing-library/no-container": "warn",
                "testing-library/no-node-access": "warn"
            }
        },
        {
            "files": ["**/*.mocha.js"],
            "env": {
                "mocha": true
            },
            "globals": {
                "expect": "readonly"
            }
        },
        {
            "files": ["**/*.sxyt.js", "**/*.sxyt.jsx"],
            "globals": {
                "describe": "readonly",
                "expect": "readonly",
                "render": "readonly",
                "screen": "readonly",
                "within": "readonly"
            }
        },
    ]
}
