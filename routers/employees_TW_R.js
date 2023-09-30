const express = require('express');
const router = express.Router()
module.exports = router;


router.post("/Adds",(req, res) => {
    let {name} = req.body;
    let Query = `INSERT INTO \`employees time\` (name, start, date) VALUES ('${name}', CURRENT_TIMESTAMP(), CURRENT_DATE())`;

    db_pool.query(Query, (err, rows) => {
    if (err)
        res.status(500).json({message: err});// throw err;
    else
        res.status(200).json({message: "Clock in", lastId: rows.insertId});// success;
})
});
router.post("/Addend",(req, res) => {

    let { name } = req.body;
    let Query = `UPDATE \`employees time\`
    SET end = CURRENT_TIMESTAMP()
    WHERE name = '${name}' `;

    db_pool.query(Query, (err, rows) => {
        if (err)
            res.status(500).json({ message: err }); // throw err;
        else if (rows.affectedRows === 0) {
            res.status(404).json({ message: "No record found for the given name and date" });
        } else {
            res.status(200).json({ message: "Clock out successfully" });
        }
    });
});



router.patch("/Edit/Start",(req, res) => {
    let name=req.body.name;
    let start=req.body.start;
    let q=`UPDATE \`employees time\`  SET start ='${start}' WHERE name='${name}'` ;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});


router.patch("/Edit/End",(req, res) => {
    let name=req.body.name;
    let end=req.body.end;
    let q=`UPDATE \`employees time\`  SET end ='${end}' WHERE name='${name}'` ;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});



router.delete("/Del",(req, res) => {
    let id=req.body.id;
    let q=`DELETE FROM \`employees time\` WHERE id='${id}' `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});


router.get("/List",(req, res) => {
    let q="SELECT * FROM \`employees time\` ";
    db_pool.query(q, function(err, rows, fields){
        if(err)
        {
            res.status(500).json({message: err})
        }
        else
        {
            res.status(200).json(rows );
        }
    });
    // res.send("good morning");
});

