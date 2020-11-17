require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note stereo umbrella hover enter equal gentle'; 
let testAccounts = [
"0x1744cc061a8f1cbb1fc4ee4bf3e963738a91c8c517a792539b76f1eb1be9ce60",
"0x44be12f0fc71b926c1cc760b412e64eaba2ac0506050580ca93e2fe9f8c53544",
"0x4fc98fb5351ffa5f311a3d624a83ab07e80d03c745f188811267237b62aa655a",
"0x5143ac98cdaebec91ea64027da4b90494e9d9e0feb9f5f71f51f3e331c860e3b",
"0xfa4b94fd15647095716db545961848669b7dac617b33a5aec38f497ff06be420",
"0xab9db303ffbeed963a8dd6ac218767e3566a228398249a0c4e096fc5289d4e78",
"0x30b1f2205b6f45a745b7bc62e68c47107a67f7aba89c2294bb22f58103611692",
"0x2ed5145533daf41774f79b39654e98a7f75d0fd8cf4aee4f55b9ef1ce1adb6f3",
"0x3dfdabc4d35d5a9ccc0adb07b6e09fa0b677ab8fe52842c5de3780940b671059",
"0xedc68b1ef58de5a281b05c27c111326787a2d7c9bb90e094b29993830bd3aa6d"
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
