const fs = require('fs');
const eth = require('./startup.js').eth;
const abi = require('./abi_stor');

function miningSatFixes( points ) {
    var builderSatFix = eth.contract(abi.BuilderSatFix).at("0xadef8dc054485532655fa10d1f55e49c280190c8");
    console.log("contract cast: OK");

    satFixs = [];

    function create() {
        const point = points.pop();
        console.log("IN create: " + point.lat + " " + point.lng);
        lat = (point.lat * 1e4) | 0;
        lng = (point.lng * 1e4) | 0;
        builderSatFix.create(lat, lng, 0, {from:eth.accounts[0], gas:3000000});
    }

    builderSatFix.Builded({}, '', (err, res) => {
        const sf_a = res.args.instance;
        console.log('Created: ' + sf_a);
        satFixs.push(sf_a);
        if(points.length) {
            create();
        } else {
            console.log("Mining FINNISH");
            console.log("satFixs: ", satFixs);
        }
    });

    create();
}

function main() {
    console.log(process.argv.length);
    if(process.argv.length != 3) {
        console.log("USAGE: node " + process.argv[1] + " coordinates.json");
        process.exit(1);
    }

    var fileName = process.argv[2];
    var points = JSON.parse(fs.readFileSync(fileName));

    console.log("points load: OK");

    miningSatFixes(points);
}

if (require.main === module) {
    main();
}

module.exports = {
    miningSatFixes: miningSatFixes
}
