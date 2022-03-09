const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/api/v1/prueba', (req, res)=>{
        res.json({mazorca: "mazorca"});
    })

    return router;
}