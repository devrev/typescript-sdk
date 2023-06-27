"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const public_devrev_sdk_1 = require("./auto-generated/public/public-devrev-sdk");
const qs_1 = __importDefault(require("qs"));
//import {PartType} from "auto-generated/data-contracts";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const axiosConfig = {
        baseURL: 'http://api.devrev.ai',
        headers: {
            Authorization: process.env.API_WORKSHOP_PAT,
        },
    };
    const devrevSDK = new public_devrev_sdk_1.Api(Object.assign({}, axiosConfig));
    //const response = await devrevSDK.worksGet.worksGet({
    // id: 'don:core:dvrv-us-1:devo/1DYPnPy0f:issue/8',
    //});
    //console.info(response.data.work);
    const owner = yield devrevSDK.devUsersSelf.devUsersSelf();
    console.info(owner.data);
    const partidresp = yield devrevSDK.partsList.partsList({
        //name: ['new part typescript'],
        type: qs_1.default.stringify({ type: [public_devrev_sdk_1.PartType.Product] }, { arrayFormat: `comma` }),
    });
    console.info(partidresp.data);
    //const partresponse = await devrevSDK.worksCreate.worksCreate({applies_to_part: "", })
    //const listresponse = await devrevSDK.worksList.worksList({applies_to_part:[]})
}))();
