/*
 * @Author: lisaiqi
 * @Date: 2020-10-29 10:19:48
 * @LastEditTime: 2020-10-29 10:25:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bird\app.js
 */
//引入express模块
const express = require('express');
const app = new express();
//引入bird.js
const bird = require('./router/api/bird');
//使用router中间件
app.use('/api/bird', bird);

const bodyParser = require('body-parser');
//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var db = require('./config/db').db;
const mongoose = require('mongoose')
mongoose.connect(db).then(() => {
    console.log('mogodb数据库连接诶成功');
}).catch((err) => {
    console.log(err);
})

app.get("/", function(req, res) {
        // res.send('运行成功了')
        console.log(__dirname);
        res.sendFile(__dirname + "/index.html");
    })
    //为了html文件中的引入文件解析
app.all("*", function(req, res) {
    res.sendFile(__dirname + req.url);
})

const port = process.env.PORT || 8888;
//连接服务器
app.listen(port, "localhost", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("服务器连接成功", port);
    }
})