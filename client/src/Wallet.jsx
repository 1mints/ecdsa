import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";
import "ethereum-cryptography/utils";
import { toHex }  from "ethereum-cryptography/utils";
import { keccak256 } from "ethereum-cryptography/keccak";

function Wallet({ address, setAddress, balance, setBalance, signature, setSignature }) {
  async function onChange(evt) {
    

    
    const signature = evt.target.value;
    setSignature(signature);
    
    //public key to address function
    function signatureToPublicKey(param) {
      const get = secp.secp256k1.getPublicKey(param)
      const keccak = keccak256(get);
      const pre = keccak.slice(-20);
      return `0x${toHex(pre)}`;
    }

  const address = signatureToPublicKey(signature);


    setAddress(address)
  if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }





  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Signature
        <input placeholder="Input your signature" value={signature} onChange={onChange}></input>
      </label>
    <div>Address: {address} </div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
