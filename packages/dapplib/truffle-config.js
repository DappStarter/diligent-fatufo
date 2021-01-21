require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain slow inner private orange gauge'; 
let testAccounts = [
"0xf12c380fcdf89831a08275e404e3db960e12018a6af76921270eeb4ad82e239c",
"0x7b285ba385e7219cf17e9f688015fc11e573366bc6b85b01be42247a0b674d4e",
"0xaf525c0d0be02c2899135d1291bccce7bc19fc25f51d8c68cc5af099b828fd68",
"0x0c0a30ee00dc69b91d745c5326802533753f1ec2c293254d2b29d3066b581a40",
"0x85a5c94b1371c62ce77a6b7ddcfcb30dbcc0820ebdce1e4631bde5a53f42e6e1",
"0x741d8a2048943e3f6ccb2a5da6309aa29a2d900bf13ac57c109c47dca1c7698e",
"0xfda1aed7e9e385bf31d764b8d2045697fa1dfdd54bb44641ff91a73946cba259",
"0x61f8b50177d09e9808f56b0a564c752b17e98cef2d7b0e68c6bf494367b2d869",
"0x119463f102255b9008a3ad40af68efb537a271274c61ec07a289920b334d63cf",
"0x269a5a7a715f70c3e53f17224cd26c5ed02b277315d1830de45cc85298a28bf6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
