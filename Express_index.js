//using express
const express=require('express');

const port =3000;

const app=express();// creater express server object

app.get('/home',(request,response)=>{
    response.send("hi there welcome to get");
})

app.post('/home',(request,response)=>{
    request.send("hi there! welcome to post");
})

// app,listen to start server
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})