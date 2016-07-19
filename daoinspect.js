var eth = require("./startup.js").eth;

address = '' + process.argv[2];

var ddao = eth.contract(abi_stor.Core).at(address);

console.log("var DAO = {");

console.log("\taddress: '" + address + "',");
console.log("\tname: '" + ddao.name() + "',");
console.log("\tdescription: '" + ddao.description() + "',");
console.log("\tfounderAddress: '" + ddao.founder() + "',");

console.log("\tmodules: [");
for ( var m = ddao.firstModule(); m != 0; m = ddao.nextModule(m) ){
	console.log("\t\t{\n\t\t\tname: '" + ddao.getModuleName(m) + "',\n\
\t\t\taddress: '" + m + "'\n\
\t\t\tinterface: '" + ddao.interfaceOf(m) + "'\n\t\t},");
}
console.log("\t]");
console.log("}");
