const authorised=async(req,res,next)=>{
    try {
        if(req.body.role=="admin"){
            next()
        }else{
            res.send({message:"Access-denied"})
        }
    } catch (error) {
        res.send({error})
    }
}
module.exports={authorised}