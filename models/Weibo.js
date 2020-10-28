const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({
    content:{type:"String"},
    time:{type:"String"},
    ding:{type:"Number"},
    cai:{type:"Number"}
},{
    connection:"weibo"
});
module.exports= Weibo =  mongoose.model("weibo",newSchema);