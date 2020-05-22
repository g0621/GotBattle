const mongoose = require('mongoose');
const setStringType = (maxLength) => ({type: String, required: true, maxlength: maxLength})
const setNumType = () => ({type: Number});
const setNotReqString = (maxLength) => ({type: String, maxlength: maxLength});
const checkLen = (obj) => (obj.length === 0 ? undefined : obj);
const checkNull = (obj) => (obj === null ? undefined : obj);
const battelSchema = new mongoose.Schema({
    name: setStringType(256),
    year: setNumType(),
    battle_number: {type: Number, required: true, unique: true},
    attacker_king: setNotReqString(256),
    defender_king: setNotReqString(256),
    attacker_1: setNotReqString(256),
    attacker_2: setNotReqString(256),
    attacker_3: setNotReqString(256),
    attacker_4: setNotReqString(256),
    defender_1: setNotReqString(256),
    defender_2: setNotReqString(256),
    defender_3: setNotReqString(256),
    defender_4: setNotReqString(256),
    attacker_outcome: setNotReqString(256),
    battle_type: setNotReqString(256),
    major_death: setNumType(),
    major_capture: setNumType(),
    attacker_size: setNumType(),
    defender_size: setNumType(),
    attacker_commander: setNotReqString(256),
    defender_commander: setNotReqString(256),
    summer: setNumType(),
    location: setNotReqString(256),
    region: setNotReqString(256),
    note: setNotReqString(2048)
}, {
    timestamps: true
});

battelSchema.pre('save', function (next) {
    this.year = checkNull(this.year);
    this.attacker_king = checkLen(this.attacker_king);
    this.defender_king = checkLen(this.defender_king);
    this.attacker_1 = checkLen(this.attacker_1);
    this.attacker_2 = checkLen(this.attacker_2);
    this.attacker_3 = checkLen(this.attacker_3);
    this.attacker_4 = checkLen(this.attacker_4);
    this.defender_1 = checkLen(this.defender_1);
    this.defender_2 = checkLen(this.defender_2);
    this.defender_3 = checkLen(this.defender_3);
    this.defender_4 = checkLen(this.defender_4);
    this.attacker_outcome = checkLen(this.attacker_outcome);
    this.battle_type = checkLen(this.battle_type);
    this.major_death =  checkNull(this.major_death);
    this.major_capture = checkNull(this.major_capture);
    this.attacker_size = checkNull(this.attacker_size);
    this.defender_size = checkNull(this.defender_size);
    this.attacker_commander = checkLen(this.attacker_commander);
    this.defender_commander = checkLen(this.defender_commander);
    this.summer = checkNull(this.summer);
    this.location = checkLen(this.location);
    this.region = checkLen(this.region);
    this.note = checkLen(this.note);
    next();
})

module.exports = mongoose.model('Battle', battelSchema);
