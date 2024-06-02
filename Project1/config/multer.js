const multer = require("multer");

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/utils')
    },
    filename:function(req,file,cb){
        const Suffix=Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,file.fieldname+'-'+Suffix);
    }
})

const upload =multer({storage:storage});

module.exports=upload;