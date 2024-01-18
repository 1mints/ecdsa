const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

//private keys =>
var balances = {
   "67e72dbae56291a5f10510f8f365962b1e90f0a5aa4683f6197eeff4d2a0c1c7": 100,
  "231350c6ec3c89479f87b6966eb2510ae8c8b521d9522691a819f7c4f3746f2c": 50,
  "ccd1a470ea4ee6829d03d347daf00a2cad037026d80e5b53188c60b6971bfe87": 75,
};

// Check for valid key
for (let i = 0; i < balances.length; i++) {
if (balances[i].length !== 64) {
  return balances[i] = 0
} else {
  
}
}

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
