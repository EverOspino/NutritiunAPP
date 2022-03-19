const Customer = require('../models/customer.model.js')
const express = require('express');
const { default: mongoose } = require('mongoose');

exports.addCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();

        res.status(201).json({ ok: true, message: 'Cliente agregado con éxito' });
    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ ok: false, message: 'Verifique la información del usuario.' });

        res.status(400).json({ ok: false, message: 'No se pudo ingresar al cliente.' });
    }
}
exports.listID = async (req, res, _id) => {
    try {
        const customer = await Customer.findById({ _id })
    } catch (error) {

    }
}
exports.addPsychologicalHabit = async (req, res) => {

    const { _id, psychologicalHabit } = req.body;
    let error;
    
    psychologicalHabit.forEach(habit => {
        console.log(habit.idHabit);
        Customer.updateOne(
            {
                _id
            }, {
                $push: {
                "psychologicalHabit": {
                    idHabit: habit.idHabit,
                    timesADay: habit.timesADay,
                    descriptionHabit: habit.descriptionHabit
                }
            }
        }, (err) => {
            if (err) {
                error = err;
            }
        }
        );
    });
    
    if (error) {
        return res.status(400).json({ ok: false, message: 'No se pudo ingresar al cliente.' });
    } else {
        res.status(201).json({ ok: true, message: "Se agregó correctamente las hábitos alimenticios."})
    }
}

exports.addFeedingHabits = async (req, res) => {
    try {
        const body = req.body;

        const feedingHabits = JSON.parse(body.feedingHabits);
        feedingHabits.forEach(habit => {
            Customer.updateOne({ _id: body._id }, {
                $push: {
                    'feedingHabits': {
                        idHabit: habit.idHabit,
                        timesAWeek: habit.timesAWeek,
                        descriptionHabit: habit.descriptionHabit
                    }
                }
            })
        })
    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ ok: false, message: 'Verifique la información del usuario.' });

        res.status(400).json({ ok: false, message: 'No se pudo ingresar al cliente.' });
    }
}

exports.add = async (req, res) => {

}

exports.listCustomer = async (req, res) => {
    try {
        const customer = await Customer.find({});
        res.status(200).json({ ok: true, message: "Se hizo la petición la manera correcta.", customer });

    } catch (error) {
        res.status(400).json({ ok: false, error });
    }
}

exports.idCustomer = async(req, res)=>{
    try {
        const {_id} = req.body;
        const customer = await Customer.findById({ _id });
        res.status(200).json({ok: true, message: "El cliente fue encontra exitosamente.", customer});
    } catch (error) {
        res.status(400).json({ok: false, message: "No se pudo encontrar al cliente.", customer});
    }
}