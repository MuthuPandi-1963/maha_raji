const createProducts = async (req,res)=>{
    const {name,price, description , stock} = req.body
    console.log(req.body);
    return res.json({
        message : "product received successfully"
    })
    

}
export default createProducts