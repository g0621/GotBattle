const Battle = require('../schemas/battle.schema');
const csvtojson = require('csvtojson');
const path = require('path');

const addBattle = async (obj) => {
    const battle = new Battle(obj);
    await battle.save((err, createdBattle) => {
        if (err) throw err;
        return createdBattle;
    })
}
const emptyDB = async () => {
    await Battle.deleteMany({}, (err, res) => {
        if (err) throw err;
        return res;
    });
}

exports.getAllBattle = (req, res) => {
    Battle.find({}, (err, allBattle) => {
        if (err) {
            return res.status(422).send(err);
        }
        return res.json(allBattle);
    })
}


exports.populateFromCSV = (req, res) => {
    const pathToCSV = path.join(__dirname, '..', 'data', 'battles.csv');
    emptyDB().then((res) => {
        csvtojson()
            .fromFile(pathToCSV)
            .then((obj) => {
                obj.map(async (battle) => {
                    await addBattle(battle);
                });
            });
    }).catch(err => {
        res.status(422).send(err);
    })
    res.send({status: 'done'});
}

exports.search = (req, res) => {
    const queries = req.query;
    let queryArr = [];
    const queryKeys = Object.keys(queries);
    if (queryKeys.length === 0) queryArr.push({});
    else {
        queryKeys.forEach((key) => {
            key = key.toLowerCase();
            if (key === 'king') {
                queryArr.push({attacker_king: queries[key]})
                queryArr.push({defender_king: queries[key]})
            } else if (key === 'type') {
                queryArr.push({battle_type: queries[key]});
            } else if (key === 'location') {
                queryArr.push({location: queries[key]});
            }
        })
    }
    if(queryArr.length === 0) return res.json({message : 'invalid query try king,location or type'});
    Battle
        .find()
        .or(queryArr)
        .then((battles, err) => {
            if (err) res.status(422).send(err);
            return res.json(battles);
        });
}

exports.allPlaces = (req, res) => {
    Battle.find().distinct('location', (err, locations) => {
        if (err) res.status(422).send(err);
        return res.json(locations);
    })
}

exports.allBattleCount = (req, res) => {
    Battle.countDocuments({}, (err, count) => {
        if (err) res.status(422).send(err);
        return res.json({count: count});
    })
}

exports.locStartsWith = async (req, res) => {
    const initials = req.query.initials;
    if (initials === undefined) return res.json([]);

    // const regexp = new RegExp("^"+ req.params.username);
    // Battle.find({ location : regexp});
    let locations = [];
    await Battle.find().distinct('location',(err,data) => {
        if(err) res.status(422).send(err);
        locations = data;
    })
    locations = locations.filter((location) => {
        return location.toLowerCase().startsWith(initials.toLowerCase());
    })
    return res.json(locations);
}
