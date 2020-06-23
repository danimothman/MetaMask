import Wab3 from "web3";

const web3 = new Wab3();

const privateKey = "0xb7ce0F519cc9d46B9C477A6d2120a00bfb282C5C"
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

