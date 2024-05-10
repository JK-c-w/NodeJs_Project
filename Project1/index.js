const express=require('express');
const app=express();
const path=require('path');
const model=require('./Models/database');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'Public')))

app.get('/',function(req,res){
   res.render("index");
})
app.post('/create',async function(req,res){
   const{name,email,img}=req.body;
   const user=await model.create({
      name,
      email,
      img
   })
   res.redirect('/read');
})
app.get('/read', async function(req,res){
   const users=await model.find();
   res.render('users',{users:users});
})
app.get('/delete/:user', async function(req,res){
   const email=req.params.user;
   const delusers=await model.findOneAndDelete({email:email});
   res.redirect('/read');
})
app.get('/edited/:name', async function(req,res){
   const name=req.params.name
   const user=await model.findOne({name:name});
   res.render('edit',{user});
})

app.post('/edit/:name',async function(req,res){
   const name=req.params.name;
   const {email,img}=req.body;
   const upUser=await model.findOneAndUpdate({name:name},{email:email,img:img},{new:true});
   res.redirect('/read');
})
app.listen(3000);