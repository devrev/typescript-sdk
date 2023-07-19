import {client, betaSDK} from "@devrev/typescript-sdk";
import { RevUser } from '../dist/auto-generated/beta/beta-devrev-sdk';

const devrevBetaSDK = client.setupBeta({ endpoint: "https://api.devrev.ai", token: process.env.DEVREV_TOKEN });

async function test(){
    // List the first 10 rev users
    const response = await devrevBetaSDK.revUsersList({limit: 10})   
    console.log(response.data.rev_users[0])
}

test()
