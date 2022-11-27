// // let http =require('http')
// // http.createServer(function(req,res){
// //     // res.writeHead(200,{"Content-type":"text/plain"});
// //     // res.write("Hello World");
// //     // res.end();
// // }).listen(8000)

// let http=require("http");
// let server =http.createServer();
// server.listen(8000);

// function say(word) {
//   console.log(word);
// }
// function execute(someFunction, value) {
//   someFunction(value);
// }
// execute(say, "Hello");

// var say_hi = function () {
//   console.log("hi");
// };
// var greeter = say_hi;
// var runner = function (fn) {
//   console.log("Invoking a function now!");
//   fn();
// };
// runner(say_hi);
// runner(greeter);
// runner(say_hi());

// var get_array = [];
// var results = [];

// function answer_collector(get_array) {
//     var elements=[];
//   for (var i = 0; i < get_array.length; i++) {
// elements.push(get_array [i] );
//   };

// return elements;
// };
// var get_results=answer_collector(['names','id','contacts']);
// console.log(get_results);

// let http = require('http');

// function onRequest(request, response){
//    console.log("Request received!")
//    response.writeHead(200, {"Content-type": "text/plain"});
//    response.write("Hello World");
//    response.end();
// }

// http.createServer(onRequest).listen(8000);

// console.log("Server has started.")