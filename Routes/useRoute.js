const express = require("express");
const router = express.Router();
const Person = require("../models/userSchema.js");

const arrayofpeople = [
  { name: "amine", age: 21, favoritrFood: ["kafteji", "shan tounsi"] },
  { name: "houssem", age: 20, favoritrFood: ["cosksi", "ma9loub"] },
];

Person.create(arrayofpeople);


router.get("/getpersonbyname/:name",(req,res)=>{
  Person.find({name:req.params.name},(err,data)=>{
    if (err) throw err;
    else
    res.json(data);

  });
});


router.get("/getpersonbyfood/:food",(req,res)=>{
 Person.findOne({favoriteFood:req.params.food},(err,data)=>{
   if (err) throw err;
   else
   res.json (data);
 });
});

router.get("/getpersonbyname/:id",(req,res)=>{
  Person.findById({_id:req.params.id},(err,data)=>{
    if(err) throw err;
    else
    res.json(data);
  });
});
router.put("/edit/:id", (req,res)=>{
  Person.findById(req.params.id, (err,data)=>{

  
  if (err){
    throw err;
  } else {
    data.favoriteFood.push("pizza"),
    data.save((err,person)=>{
      if (err) throw err;
      elseres.json(person)
    });
  }
});
});

router.put("/findedit/:Id", (req, res)=>{
  Person.findByIdAndRemove(req.params.Id, function (err,data){
    if (err) throw err;
    elseres.send("deleted")
  });
});
router.get("/listpeople", (req, res)=>{
  Person.find({favoriteFood: { $all: ["mloukhiya"] }})
  .sort({ name: "asc"})
  .limit(2)
  .select("-age")
  .exec((err, data)=>{
    if (err) throw err
    elseres.json(data)
  });
});


module.exports = router;
