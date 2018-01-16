const mongoose = require('mongoose');
const InfoSchema = require('./info');
const EduSchema = require('./education');
const WorkSchema = require('./work');
const SkillsSchema = require('./skills');

const StateSchema = module.exports = mongoose.Schema({
    info: InfoSchema,
    education: [EduSchema],
    work: [WorkSchema],
    skills: [SkillsSchema]
})
