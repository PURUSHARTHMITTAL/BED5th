function m1(req, res, next){
    console.log("running middleware 1...");
    req.user = {
        id : 1,
        username : "Purusharth"
    }
    next()
}
function m2(req, res, next){
    console.log("running middleware 2.....");
    console.log(req.user);
    req.isAdmin = true;
    next()
}
function checkAdmin(){
    let {name} = req.query;
    if(name == "Purusharth Mittal"){
        req.isAdmin = true;
        next();
    }
    res.json({
        success: true,
        message: "You are not Admin"
    })
}
module.exports.m1 = m1;
module.exports.m2 = m2
module.exports.checkAdmin = checkAdmin