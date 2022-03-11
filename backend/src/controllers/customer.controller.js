const Customer = require('../models/customer.model.js')
const express = require('express');

exports.addCustomer = async (req, res)=>{
    try {
        const customer = new Customer(req.body);
        await customer.save();

        res.status(201).json({ok: true, message: 'Cliente agregado con éxito'});
    } catch (error) {
        if(error.code === 11000) return res.status(400).json({ok: false, message: 'Verifique la información del usuario.'});

        res.status(400).json({ok: false, message: 'No se pudo ingresar al cliente.'});
    }
}

exports.addPsychologicalHabit = async (req, res)=>{
    try {
        const body = req.body;

        const psychologicalHabit = JSON.parse(body.psychologicalHabit);
        psychologicalHabit.forEach(habit => {
            Customer.updateOne({_id: body._id},{
                       $push: {
                            'psychologicalHabit': {
                                idHabit: habit.idHabit,
                                timesADay: habit.timesADay,
                                descriptionHabit: habit.descriptionHabit
                            }
                       }
                   }
            );
        });
    } catch (error) {
        if(error.code === 11000) return res.status(400).json({ok: false, message: 'Verifique la información del usuario.'});

        res.status(400).json({ok: false, message: 'No se pudo ingresar al cliente.'});
    }
}

exports.addFeedingHabits = async (req, res)=>{
    try {
        const body = req.body;

        const feedingHabits = JSON.parse(body.feedingHabits);
        feedingHabits.forEach(habit =>{
            Customer.updateOne({_id: body._id},{
                $push:{
                    'feedingHabits':{
                        idHabit: habit.idHabit,
                        timesAWeek: habit.timesAWeek,
                        descriptionHabit: habit.descriptionHabit
                    }
                }
            })
        })
    } catch (error) {
        if(error.code === 11000) return res.status(400).json({ok: false, message: 'Verifique la información del usuario.'});

        res.status(400).json({ok: false, message: 'No se pudo ingresar al cliente.'});
    }
}

exports.add = async (req, res)=>{

}