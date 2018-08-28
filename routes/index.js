var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/students/',function(req,res,next){
  res.json(students);
});

router.get('/students/:id', function(req,res,next){
  students.forEach(function(aStudent) {
    if(aStudent.id==req.params.id) {
      res.json(students);
    }
  });
    res.sendStatus(404);
  
});

router.post('/students/:id',function(req,res,next){
  students.push(req.body);
  res.json(req.body);
});

var students =[
  
    {id:1, name: "Gabriel", sex:"M"},
    {id:2, name: "Mark", sex:"M"},
    {id:3, name:"ABC", sex:"FM"}
]

module.exports = router;
