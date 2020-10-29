/*
 * @Author: lisaiqi
 * @Date: 2020-10-29 10:19:48
 * @LastEditTime: 2020-10-29 13:39:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bird\models\Bird.js
 */
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({
    content: { type: "String" },
    time: { type: "String" },
    ding: { type: "Number" },
    cai: { type: "Number" }
}, {
    connection: "Bird"
});
module.exports = Bird = mongoose.model("bird", newSchema);