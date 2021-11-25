require("dotenv-flow").config();
const { toWei } = require("web3-utils");
const Web3 = require("web3");
const web3 = new Web3(process.env.PROVIDER);

const privKey = "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

const log4js = require('log4js');

log4js.configure(
    {
        appenders: {
            out: {
                type: 'stdout'
            }
        },
        categories: {
            default: { appenders: ['out'], level: 'debug' }
        }
    }
);

const logger = log4js.getLogger('test sign');
logger.info(`PROVIDER: ${process.env.PROVIDER}`);
(async () => {
    for (let i = 0; i < 100000; i++) {
        await testSend("0x41d4f4449cdd61fd88a8597d8ef9a2f4e74fcd074035bdf9eafe2820353f5036" + i);
        if (i % 100==0) {
            logger.info(`Signed: ${i}`);
        }
    }
})();


async function testSend(
    message,
) {
   var signature = await web3.eth.accounts.sign(message, privKey);
//    logger.info(`Signed: ${signature.signature}`);
}