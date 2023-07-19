"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupBeta = exports.setup = void 0;
const Beta = __importStar(require("./auto-generated/beta/beta-devrev-sdk"));
const Sdk = __importStar(require("./auto-generated/public-devrev-sdk"));
function setup(url = 'https://api.devrev.ai', token = process.env.DEVREV_TOKEN) {
    const axiosConfig = {
        baseURL: url,
        headers: {
            Authorization: token,
        },
    };
    export class DevRevClient extends Sdk.Api {
        constructor(options) {
            this.options = options;
        }
    }
    const devrevSDK = new Sdk.Api(Object.assign({}, axiosConfig));
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
    //add this in
    return devrevSDK;
}
exports.setup = setup;
function setupBeta(url = 'http://api.devrev.ai', token = process.env.SDK_TOKEN) {
    const axiosConfig = {
        baseURL: url,
        headers: {
            Authorization: token,
            'X-Devrev-Scope': 'beta',
        },
    };
    const devrevSDK = new Beta.Api(Object.assign({}, axiosConfig));
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
exports.setupBeta = setupBeta;
