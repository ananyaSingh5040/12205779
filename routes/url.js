const express = require("express");
const router = express.Router();
const {handleShortURL} = require("../controllers/url")
router.post("/",handleShortURL);
module.exports= router;