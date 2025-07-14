const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
    url:{
        type: String,
        required: true,

    },
    validity:{
        type: String,
        default: "30",
    },
    shortCode:{
        type: String,
        required: true,
        unique: true,

    },
    visitHistory: [
      {
        timestamps: { type: Date },
      },
    ],
});
const URL = mongoose.model("url",urlSchema);
module.exports= URL;