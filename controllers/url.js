const { nanoid } = require("nanoid");
const URL = require("../models/url");
async function handleShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL required!" });
  let shortID = nanoid(5);
  if(body.shortCode) shortID = body.shortCode;
  await URL.create({
    url: body.url,
    validity: body.validity,
    shortCode: shortID,
  }); 
  const validity = body.validity || Date.now() + 30;
  return res.status(201).json({"msg":"URL Created","shortLink": "http://localhost:8001/" +shortID, "expiry" : validity });
 
}
async function handleAnalytics(req, res) {
  const shortID = req.params.shortId;
  const result = await URL.findOne({ shortCode: shortID });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports={handleShortURL,handleAnalytics};