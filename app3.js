const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

app.use('/static',express.static('static'));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'view'));


app.get('/',(req,res)=>{
    const param = {'cont':'hi'};
    res.setHeader('Content-Type','text/html')
    res.status(200).render('web.pug',param);
})
app.get('/home',(req,res)=>{
    const param = {'cont':'hi'};
    res.setHeader('Content-Type','text/html')
    res.status(200).render('web.pug',param);
})
app.get('/services',(req,res)=>{
    const param = {'cont':'hi'};
    res.setHeader('Content-Type','text/html')
    res.status(200).render('services.pug',param);
})

app.get('/contact',(req,res)=>{
    const param = {'cont':'hi'};
    res.setHeader('Content-Type','text/html')
    res.status(200).render('contact.pug',param);
})
app.get('/about',(req,res)=>{
    const param = {'cont':'hi'};
    res.setHeader('Content-Type','text/html')
    res.status(200).render('about.pug',param);
})
app.listen(port,()=>{
    console.log("server is started")
})