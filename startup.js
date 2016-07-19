abi_stor = require("./abi_stor");
Web3 = require("web3");

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

var eth = web3.eth;

module.exports = {
	web3: web3,
	eth: eth,
	abi: abi_stor,
}
