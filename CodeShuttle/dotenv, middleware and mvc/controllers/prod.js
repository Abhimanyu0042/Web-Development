const products = require('../models/products'); 

const prodAddController = async (req,res) => {
    const title = req.body.title;
    const price = req.body.price;
    console.log('prodAddcontroller is called !');
    if(!title || !price){
        res.status(403).send("Title and password is required.");
        return;
    }
    const productid = Math.floor(Math.random() * 100);

    const product = products.find(item=> item.title === title);
    if(product){
        res.send("Product is already present");
        return;
    }
    products.push({
        productid,
        title,
        price
    })

    res.status(200).json({
        productid,
        title,
        price
    });

}

const prodDeleteController = async(req,res) => {
    const id = req.params.id;
    const product = products.find(item=> item.productid == id);
    if(!product){
        res.status(403).send("This product id is not present.");
        return;
    }
    products.splice(products.findIndex(a=>a.productid === id) , 1);
    res.status(200).json(products);
}

const getProdController = async(req,res) => {
    const id = req.params.id;
    if(!id){
        res.status(403).send('product id is required'); 
        return;
   }
    const product = products.find(item=> item.productid == id);
    if(!product){
        res.send("product id is not available");
        return;
    }
    if(product){
        res.status(200).json(product); 
    }
}

module.exports = {
    prodAddController,
    getProdController,
    prodDeleteController
}