// sending string data to our api
// const http=require('http');
// const port=3000;
// const server=http.createServer(function listener(request,response){
//     // console.log("Incoming request details",request);
//     // console.log("Response Object details",response);
//     console.log("Request Received");
//     if(request.url=='/home'){
//         console.log(request.method);
        
//         response.end("Welcome to home");
//     }
// });
// server.listen(port,function exec(){
//     console.log(`Server is up and is running on port:${port}`);
// })


//sending Html file to our api
// const http=require('http');
// const port=3000;
// const server=http.createServer((req,res)=>{
//     if(req.url=='/home'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write("Welcome to Home");
//         res.end();
//     }
// })
// server.listen(port,function exec(){
//     console.log(`Server is up and is running on port:${port}`);
// })


const http=require('http');
const port=3000;
const server=http.createServer(function listener(req,res){
    // console.log("Incoming request details",request);
    // console.log("Response Object details",response);
    console.log("Request Received");
    if(req.url=='/home'){
        console.log(req.method);
        const responseData = {
            message:"Hello, GFG Learner",
            articleData:{
                articleName: "How to send JSON response from NodeJS",
                category:"NodeJS",
                status: "published"
            },
            endingMessage:"Visit Geeksforgeeks.org for more"
        }
         
        const jsonContent = JSON.stringify(responseData);
        res.write(jsonContent);
        res.end();
    }
});
server.listen(port,function exec(){
    console.log(`Server is up and is running on port:${port}`);
})

