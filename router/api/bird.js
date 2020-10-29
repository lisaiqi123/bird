const Bird = require('../../models/Bird');

var express = require("express");
const router = express.Router();

router.get("/huoqu", function(req, res) {
    Bird.find({}, null, { limit: 5, sort: { "_id": -1 } }, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    })
})

router.get("/pageCount", function(req, res) {
    Bird.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    })
})

router.get("/add", function(req, res) {
    var content = req.query.content;
    var time = req.query.time;
    Bird.create({
        content: content,
        time: time,
        ding: 0,
        cai: 0
    }, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            Bird.find({ time: time }, null, { limit: 1 }, function(err, data) {
                if (err) {
                    res.send('{"err":"0","msg":"查找失败"}');
                } else {
                    console.log("查找成功");
                    res.send(data);
                }
            })
        }
    })
})

//分页
router.get("/fenye", function(req, res) {
    var start = req.query.startIndex;
    Bird.find({}, null, { sort: { "_id": -1 }, skip: start * 5, limit: 5 }, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    })
})
router.get("/remove", function(req, res) {
    var id = req.query.id;
    var index = req.query.index;
    var indexMax = req.query.indexMax;
    if (index != indexMax) {
        Bird.remove({
            _id: id
        }, function(err) {
            if (err) {
                console.log(err);
            } else {
                Bird.find({}, null, { sort: { "_id": -1 }, skip: 5 * index - 1, limit: 1 }, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        res.send(data);
                    }
                })
            }
        })
    } else {
        Bird.remove({
            _id: id
        }, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.send('{"err":"0","msg":"删除成功"}')
            }
        })
    }

})
router.get("/add", function(req, res) {
        var content = req.query.content;
        var time = req.query.time;
        Bird.create({
            content: content,
            time: time,
            ding: 0,
            cai: 0
        }, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                Bird.find({ time: time }, null, { limit: 1 }, function(err, data) {
                    if (err) {
                        res.send('{"err":"0","msg":"查找失败"}');
                    } else {
                        console.log("查找成功");
                        res.send(data);
                    }
                })
            }
        })
    })
    //顶的操作
router.get("/ding", function(req, res) {
    var id = req.query.id;
    var ding = req.query.ding;
    ding++;
    Bird.update({
        _id: id
    }, { ding: ding }, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("修改成功");
            res.send({ "err": "0", "msg": "ding修改成功" });
        }
    })
})

//踩的操作
router.get("/cai", function(req, res) {
    var id = req.query.id;
    var cai = req.query.cai;
    cai++;
    Bird.update({
        _id: id
    }, { cai: cai }, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("修改成功");
            res.send({ "err": "0", "msg": "cai修改成功" });
        }
    })
})

module.exports = router;