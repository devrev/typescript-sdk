import { client } from "./src/index";

const devrev = client.setup({ endpoint: 'https://api.devrev.ai', token: process.env.DEVREV_TOKEN });