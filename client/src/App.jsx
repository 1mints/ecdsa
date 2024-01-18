import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState("");
  const [address, setAddress] = useState("");
  const [signature, setSignature] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        signature={signature}
        setSignature = {setSignature}
        setAddress={setAddress}
        address={address}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
