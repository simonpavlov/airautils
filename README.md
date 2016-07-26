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
$ node -e "abi = require('path/to/abi_stor.js'); console.log(abi.Core)"
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
$ node ./daoinspect.js dao_address
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
