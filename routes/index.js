const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('index/welcome');
 });

 router.get('/dashboard',(req,res) => {
    res.render('index/dashboard');
 });

 router.get('/hobbies',(req,res) => {
    res.render('hobbies/index');
 });
 
 router.get('/hobbies/add',(req,res) => {
    res.render('hobbies/index');
 });


 module.exports = router;