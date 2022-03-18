const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    nutritionistId: {type: String, trim: true, required: true},
    name: {type: String, trim: true, required: true},
    lastName: {type: String, trim: true, required: true},
    sex: {type: String, trim: true, required: true},
    age: {type: Number, required: true},
    evaluationDate: {type: Date, default: Date.now()},
    hoursWorking: {type: Number},
    hoursHavingLunch: {type: Number},
    sourcesOfStress: {type: String, trim: true},
    personalHistory: {type: String, trim: true},
    familyBackground: {type: String, trim: true},
    psychologicalHabit: [
        {
            idHabit: {type: String, trim: true},
            timesADay: {type: Number},
            descriptionHabit: {type: String, trim: true}
        }
    ],
    feedingHabits: [
        {
            idHabit: {type: String, trim: true},
            timesAWeek: {type: Number},
            descriptionHabit: {type: String, trim: true}
        }
    ],
    generalDescription: {type: String, trim: true}
})

module.exports = mongoose.model('Customer', customerSchema);