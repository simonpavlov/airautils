# This repo contains some utils for [airaCore](https://github.com/airalab/core)

## abistorgen.py

This util create abi storage from json files.
Script recursively passed him the directory and display the data in the
module JS format.

#### Usage

```bash
$ python3 abistorgen.py path/to/json/files > path/to/abi_stor.js
```

```bash
$ node -e "abi = require('path/to/abi_stor.js'); console.log(abi.SatFix)"
[ { constant: true,
    inputs: [],
    name: 'latitude',
    outputs: [ [Object] ],
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'longitude',
    outputs: [ [Object] ],
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'altitude',
    outputs: [ [Object] ],
    type: 'function' },
  { inputs: [ [Object], [Object], [Object] ],
    type: 'constructor' } ]
```

## daoinspect.js

This util display main data of [Core](https://github.com/airalab/core/blob/master/sol/dao/Core.sol):
+ address
+ name
+ description
+ founderAddress
+ modules info (name, address, interface)

#### Usage
First of all generate `abi_stor.js` using `abistorgen.py`.

```bash
$ node ./daoinspect.js '0x2b33ec37bce256a82893435d74c3c97685fccc0c'
0x2b33ec37bce256a82893435d74c3c97685fccc0c
var DAO = {
        address: '0x2b33ec37bce256a82893435d74c3c97685fccc0c',
        name: 'Martian colony',
        description: 'DAO for first human colony on Mars',
        founderAddress: '0x05bc6aef81428d6f6476d9b6005071c267528d3b',
        modules: [
                {
                        name: 'Mars colony shares',
                        address: '0x509f5c9e18518722b05fe28a8f536a2ce7810a35'
                        interface: 'github://airalab/core/token/TokenEmission.sol'
                },
                {
                        name: 'Ether funds',
                        address: '0x4db8916286205bf5f136f2cc436c19ee78e1c270'
                        interface: 'github://airalab/core/token/TokenEther.sol'
                },
                {
                        name: 'DAO credit',
                        address: '0x02f96a016c8da51b2706fce0bd05455b06d65c5c'
                        interface: 'github://airalab/core/token/TokenEmission.sol'
                },
                {
                        name: 'Market',
                        address: '0x22fd913f7a0445f01bcce967da3de9a95599abde'
                        interface: 'github://airalab/core/market/Market.sol'
                },
        ]
}
```
**Attention**: depends on `startup.js`

## miningSatFix.js

This util successively mine SatFix contract using
[SatFixBuilder](https://github.com/simonpavlov/contracts/blob/master/builder/BuilderSatFix.sol)
and display this address. Input accepts JSON file generate by [DEServiceApp](https://github.com/simonpavlov/DEServiceApp).

#### Usage
```bash
$ node ./miningSatFixes.js path/to/file.json
```
**Attention**: depends on `startup.js`

## startup.js

This is simple script for initialize `web3` and `abi_stor` for `nodejs`.

#### Usage
```javascript
> web3 = require('./startup.js').web3
> abi = require('./startup.js').abi_stor
```
