import mongoose from 'mongoose';
import { Router } from 'express';
import FoodTruck from '../model/foodtruck';
import Review from '../model/review';

import { authenticate } from '../middleware/authMiddleware';

export default({ config, db }) => {

  const api = Router();

  // CRUD - Create Read Update Delete

  // '/v1/foodtruck/add' - Create
  api.post('/add', authenticate, (req, res) => {

    const newFoodTruck = new FoodTruck();

    newFoodTruck.name = req.body.name;
    newFoodTruck.foodtype = req.body.foodtype;
    newFoodTruck.avgcost = req.body.avgcost;
    newFoodTruck.geometry.coordinates = req.body.geometry.coordinates;

    newFoodTruck.save(function(err){
      if(err){
        res.send(err)
      }
      res.json({ message: 'FoodTruck saved successfully' })
    })
  })

  // '/vi/foodtruck' - Read
  api.get('/', authenticate, (req, res) => {
    FoodTruck.find({}, (err, foodtruck) => {
      if(err){
        res.send(err)
      }
      res.json(foodtruck);
    })
  })

  // '/vi/foodtruck/:id' - Read 1
  api.get('/:id', authenticate, (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if(err){
        res.send(err)
      }
      res.json(foodtruck)
    })
  })

  // '/vi/foodtruck/:id' - Update
  api.put('/:id', authenticate, (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if(err){
        res.send(err)
      }
      foodtruck.name = req.body.name;
      foodtruck.save(err => {
        if(err){
          res.send(err)
        }
        res.json({ message: "FoodTruck info updated"})
      })
    })
  })

  // '/vi/foodtruck/:id' - Delete
  api.delete('/:id', authenticate, (req, res) => {
    FoodTruck.remove({
      _id: req.params.id
    }, (err, foodtruck) => {
      if(err){
        res.send(err)
      }
      res.json({ message: "FoodTruck successfully removed!"})
    })
  })

  // add review for a specific foodtruck id
  // '/v1/foodrtuck/reviews/add/:id'
  api.post('/reviews/add/:id', authenticate, (req, res) => {

    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if(err){
        res.send(err)
      }

      const newReview = new Review();

      newReview.title = req.body.title
      newReview.text = req.body.text
      newReview.foodtruck = foodtruck.id
      newReview.save((err, review) => {
        if(err){
          res.send(err)
        }
        foodtruck.reviews.push(newReview)
        foodtruck.save(err => {
          if(err){
            res.send(err)
          }
          res.json({ message: 'Food truck review saved!' })
        })
      })
    })
  })

  // get reviews for a specific food truck id

  // '/v1/foodrtuck/reviews/:id'
  api.get('/reviews/:id', authenticate, (req, res) => {
    Review.find({ foodtruck: req.params.id}, (err, reviews) => {
      if(err){
        res.send(err)
      }
      res.json(reviews)
    })
  })

  return api;
}
