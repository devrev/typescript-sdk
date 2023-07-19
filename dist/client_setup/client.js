"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const index_1 = require("../index");
class client {
    static setup(setup_options) {
        const axiosConfig = {
            baseURL: setup_options.endpoint,
            headers: {
                Authorization: setup_options.token,
            },
        };
        const devrevSDK = new index_1.publicSDK.Api(Object.assign({}, axiosConfig));
        devrevSDK.instance.interceptors.request.use((config) => {
            for (const key in config.params) {
                // Check if the property is an array
                if (Array.isArray(config.params[key])) {
                    // Join the array with a comma
                    config.params[key] = config.params[key]
                        .map((value) => {
                        return `"${value}"`;
                    })
                        .join(',');
                }
            }
            return config;
        });
        return devrevSDK;
    }
    static setupBeta(setup_options) {
        const axiosConfig = {
            baseURL: setup_options.endpoint,
            headers: {
                Authorization: setup_options.token,
                'X-Devrev-Scope': 'beta',
            },
        };
        const devrevSDK = new index_1.betaSDK.Api(Object.assign({}, axiosConfig));
        devrevSDK.instance.interceptors.request.use((config) => {
            for (const key in config.params) {
                // Check if the property is an array
                if (Array.isArray(config.params[key])) {
                    // Join the array with a comma
                    config.params[key] = config.params[key]
                        .map((value) => {
                        return `"${value}"`;
                    })
                        .join(',');
                }
            }
            return config;
        });
        return devrevSDK;
    }
}
exports.client = client;