const { Flowers } = require('../models')

class flowerController{
    static async get(req,res){
        try {
          const response = await Flowers.findAll() 
          return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async create(req,res){
        try {
           let payload = {
               name: req.body.name,
               qty:+req.body.qty,
               placeToBuy: req.body.placeToBuy
           } 
           const response = await Flowers.create(payload)
           return res.status(201).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async getDataById(req,res){
        try {
           const id = +req.params.id
           const response = await Flowers.findAll({
               where: {
                   id
               }
           }) 
            return res.status(200).json(response) 
        } catch (error) {
            return res.status(500).json(error)  
        }
    }

    static async update(req,res){
        try {
            const id = +req.params.id 
            let payload = {
                name: req.body.name,
                qty:+req.body.qty,
                placeToBuy: req.body.placeToBuy
            } 
            const response = await Flowers.update(payload,{
                where:{
                    id
                }
            })
            return res.status(201).json({
                message: 'Success to update!'
            })
               
        } catch (error) {
            return res.status(500).json(response)  
        }
    }

    static async delete(req,res){
        try {
            const id = +req.params.id
            const response = await Flowers.destroy({
                where:{
                    id
                }
            }) 
            return res.status(200).json({
                message:"success to delete!"
            })    
        } catch (error) {
            return res.status(500).json(response)  
        }
    }
}

module.exports = flowerController