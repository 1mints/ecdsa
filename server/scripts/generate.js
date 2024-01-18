const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toUtf8Bytes } = require("ethers/lib/utils");

for (let i = 0; i <= 2; i++) {
const privateKey = secp.secp256k1.utils.randomPrivateKey();

console.log('private key: ', i + 1, toHex(privateKey));

const publicKey = keccak256(secp.secp256k1.getPublicKey(privateKey)).slice(-20);
const keccak = keccak256(publicKey);
const address = keccak.slice(-20);

console.log('address: ', i + 1,' 0x' +  toHex(publicKey));
}