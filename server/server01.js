var express =require("express");
var router = express();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
var jwt=require('jsonwebtoken');
var ModelDB = require('./database/Modeldb');

router.post('/api/login',function (req,res){
   
        ModelDB.login(req.body,function(error, rows){
            if (rows.length > 0) {
                var token=jwt.sign({ten:'toandao'},'keysecrect',{algorithm:'HS256',expiresIn:'3h'});
                res.json({token,rows}); 
               
			} else {
				res.json({
                   message:'Incorrect Username and/or Password!'
                
                });
			}
        });
});
router.get("/test/gettk",function (req,res){
    ModelDB.getTaiKhoan(function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
    });
});
router.post('/api/register',function(req,res){
        ModelDB.register(req.body,function(err,count){
            if(err){
                res.json(err);
            }
            else{
                res.json(req.body);
            }
        });
});
router.post('/api/getidtk',function(req,res){
        ModelDB.getIdTaiKhoan(req.body,function(err,rows){
                if(err){
                    res.json(err);
                }
                else
                {
                    res.json(rows);
                }
        });
})
router.post('/api/thongTinTaiKhoan',function(req,res){
        ModelDB.themThongTinTaiKhoan(req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json({
                    message:'Success!'
                });
            }
        })
});
router.get("/canho",function (req,res){
    ModelDB.getCanHo(function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
    });
});
router.get("/vitri/:id?",function (req,res){
    if(req.params.id){
          ModelDB.getViTriId(req.params.id,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
         });
    }else{
        ModelDB.getViTri(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get("/binhluan/:id",function (req,res){
    ModelDB.getBinhLuan(req.params.id,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
    });
});
router.get("/thongtintaikhoan/:id",function (req,res){
    ModelDB.getThongTinTaiKhoan(req.params.id,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
    });
});
router.get("/yeuthich/:id",function (req,res){
    ModelDB.getYeuThich(req.params.id,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
    });
});
// router.post('/api/login',function (req,res){
//         if(req.body.username=='toandao' && req.body.password=='123'){
//             var token=jwt.sign({ten:'toandao'},'keysecrect',{algorithm:'HS256',expiresIn:'3h'});
//               res.json({acess_token:token}); 
//         }else{
//              res.send('sai mat khau hoac tai khoan');
//         }
// });
router.use(function (req,res,next) {
    if (req.headers && req.headers.authorization && String(req.headers.authorization.split(' ')[0]).toLowerCase() === 'bearer') {
            var token=req.headers.authorization.split(' ')[1];
            jwt.verify(token,'keysecrect',function(err,decode){
                if(err)
                    return res.status(403).send({
                        message:'token invalid'
                    });
                    else
                        return next();
            });
        }
        else
        {
            return res.status(403).send({
                message:'Unauthorized'
            });
        }

});


// Căn hộ


router.post('/canho',function(req,res){
        ModelDB.themCanHo(req.body,function(err,count){
            if(err){
                res.json(err);
            }
            else{
                res.json({
                    message:'Success!'
                });
            }
        });
});

router.put("/canho/:id",function (req,res){
    ModelDB.suaCanHo(req.params.id,req.body,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json({
                    message:'Success!'
                });
            }
    });
});
router.delete("/canho/:id",function (req,res){
    ModelDB.xoaCanHo(req.params.id,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json({
                    message:'Success!'
                });
            }
    });
});

//Yêu Thích


router.post('/yeuthich/:id',function(req,res){
        ModelDB.themYeuThich(req.params.id,req.body,function(err,count){
            if(err){
                res.json(err);
            }
            else{
                res.json({
                    message:'Success!'
                });
            }
        });
});
router.delete("/yeuthich/:id",function (req,res){
    ModelDB.xoaYeuThich(req.params.id,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json({
                    message:'Success!'
                });
            }
    });
});

// Thông tin tài khoản
router.put("/thongtintaikhoan/:id",function (req,res){
    ModelDB.suaThongTinTaiKhoan(req.params.id,req.body,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json({
                    message:'Success!'
                });
            }
    });
});



router.post('/vitri/:id',function(req,res){
        ModelDB.themVitri(req.params.id,req.body,function(err,count){
            if(err){
                res.json(err);
            }
            else{
                res.json({
                    message:'Success!'
                });
            }
        });
});
router.put("/vitri/:id",function (req,res){
    ModelDB.suaViTri(req.params.id,req.body,function(err,rows){
        if(err){
                res.json(err);
            } else {
                res.json({
                    message:'Success!'
                });
            }
    });
});
// router.get("/hello",function (req,res) {
//     res.send("Hello");
// });

router.post('/binhluan/:id',function(req,res){
    ModelDB.themBinhLuan(req.params.id,req.body,function(err,count){
        if(err){
            res.json(err);
        }
        else{
            res.json({
                message:'Success!'
            });
        }
    });
});
router.listen(3000);