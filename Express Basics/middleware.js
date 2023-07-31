module.exports=reqfilter=(req,res,next)=>{
    console.log("Request made to "+req.url);
    next();
};
