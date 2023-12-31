const express = require('express');
const port = 7575;
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");
const path = require('path');
 app.use(express.static(path.join(__dirname, "css")));
 app.use(express.static(path.join(__dirname, "js")));

var db_M = require('./database');
global.db_pool = db_M.pool;


const employees_rtr = require('./routers/employeesR');
app.use('/employees', employees_rtr);


const employees_TW_rtr = require('./routers/employees_TW_R');
app.use('/employees_TW', employees_TW_rtr);


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
    console.log(`Now listening on port http://localhost:${port}/employees`);
    console.log(`Now listening on port http://localhost:${port}/employees_TW`);

});