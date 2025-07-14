const express = require("express");
const router = express.Router();
const {handleShortURL,handleAnalytics} = require("../controllers/url")
router.post("/",handleShortURL);
router.get("/:shortID",handleAnalytics);
module.exports= router;