const express = require('express');
const router = express.Router()
module.exports = router;

router.post("/Add",(req, res) => {
    let name=req.body.name;

    let q=`INSERT INTO employees (\`name\`) VALUES ('${name}')`;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})

        }else{
            res.status(200).json({message: "OK"});
        }
    });
    // res.send("good morning");
});


router.patch("/Edit/:row_id",(req, res) => {
    let id=req.params.row_id;
    let name=req.body.name;
    let q=`UPDATE \`employees\`  SET \`name\`='${name}' WHERE id=${id} `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
            // throw err;
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});


