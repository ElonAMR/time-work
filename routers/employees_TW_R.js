const express = require('express');
const router = express.Router()
module.exports = router;

router.post("/Add",(req, res) => {
    let {id,start,date}=req.body;

    let q = `INSERT INTO \`employees time\` (name, start, date) VALUES (`;
    q += `(SELECT name FROM employees WHERE id = ${id}), `;
    q += `'${start}', `;
    q += `'${date}')`;

    db_pool.query(q, function(err, rows, fields) {
        if (err) {
            res.status(500).json({ message: err });
        } else {
            res.status(200).json({ message: "OK" });
        }
    });
    // res.send("good morning");
});

router.patch("/Edit/Start/:row_name",(req, res) => {
    let name=req.params.row_name;
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


router.patch("/Edit/End/:row_name",(req, res) => {
    let name=req.params.row_name;
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


router.patch("/Edit/Date/:row_name",(req, res) => {
    let name=req.params.row_name;
    let date=req.body.date;
    let q=`UPDATE \`employees time\`  SET date ='${date}' WHERE name='${name}'` ;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});

router.delete("/Del/:row_id",(req, res) => {
    let id=req.params.row_id;
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

