import { AxiosRequestConfig } from 'axios';
import { betaSDK, publicSDK } from '../index';


export declare namespace client {
    export interface SetupOptions {
        endpoint: string;
        token?: string;
    }
}
export class client {
    public static setup(setup_options: client.SetupOptions) {
        const axiosConfig: AxiosRequestConfig = {
            baseURL: setup_options.endpoint,
            headers: {
                Authorization: setup_options.token,
            },
        };
        const devrevSDK = new publicSDK.Api({
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

    public static setupBeta(setup_options: client.SetupOptions) {
        const axiosConfig: AxiosRequestConfig = {
            baseURL: setup_options.endpoint,
            headers: {
                Authorization: setup_options.token,
                'X-Devrev-Scope': 'beta',
            },
        };
        const devrevSDK = new betaSDK.Api({
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
}