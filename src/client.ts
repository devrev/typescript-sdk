import { AxiosRequestConfig } from 'axios';
import * as Beta from './auto-generated/beta/beta-devrev-sdk';
import * as Sdk from './auto-generated/public-devrev-sdk';

export function setup(url = 'https://api.devrev.ai', token = process.env.DEVREV_TOKEN) {

    const axiosConfig: AxiosRequestConfig = {
        baseURL: url,
        headers: {
            Authorization: token,
        },
    };

    export declare namespace DevRevClient {
        interface Options {
            environment?: environments.DevRevEnvironment | string;
            apiKey: core.Supplier<string>;
        }
    }
    export class DevRevClient extends Sdk.Api {
        constructor(protected readonly options: DevRevClient.Options) {}
    }
    const devrevSDK = new Sdk.Api({
        ...axiosConfig,
    });

    devrevSDK.instance.interceptors.request.use((config) => {
        for (const key in config.params) {
            // Check if the property is an array
            if (Array.isArray(config.params[key])) {
                // Join the array with a comma
                config.params[key] = config.params[key]
                    .map((value: any) => {
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

export function setupBeta(url = 'http://api.devrev.ai', token = process.env.SDK_TOKEN) {

    const axiosConfig: AxiosRequestConfig = {
        baseURL: url,
        headers: {
            Authorization: token,
            'X-Devrev-Scope': 'beta',
        },
    };
    const devrevSDK = new Beta.Api({
        ...axiosConfig,
    });

    devrevSDK.instance.interceptors.request.use((config) => {
        for (const key in config.params) {
            // Check if the property is an array
            if (Array.isArray(config.params[key])) {
                // Join the array with a comma
                config.params[key] = config.params[key]
                    .map((value: any) => {
                        return `"${value}"`;
                    })
                    .join(',');
            }
        }
        return config;
    });
    return devrevSDK;
}
