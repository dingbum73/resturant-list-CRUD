const express = require('express')
const router = express.Router()
const Resturant = require('../../models/resturant')

router.get('/name', (req, res) => {
  Resturant.find() // 取出DB resturants的資料 
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ name: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/category', (req, res) => {
  Resturant.find() // 取出DB resturants的資料 
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ category: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})


module.exports = router