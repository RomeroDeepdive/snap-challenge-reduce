//import { App } from './app';

//function main () {
 //   try}
  //  const app = new App {};
//await app.Listern();
//catch (e) {
//    console.log(e);
//}


const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

const indexRoute = express.Router()

//request, response and nextFunction//
const indexRouteMiddleware = function (req, res, next) {
console.log("is this thing on")
    nextfunction()
}
const indexRouteMiddleware2 = (req, res, next) => {
  return response.json({status; 200, data: null, message: "this thing is on"})
}

indexRoute.route("/apis").get(indexRouteMiddleware, indexRouteMiddleware2)

app.use(indexRoute)

app.listen(4200, () => {console.log("Express has started")})