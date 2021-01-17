
const Product = require('../models/products');
exports.getAddProducts =  (req ,res, next)=>{             
    res.render('admin/edit_product',  {  
    doctittle:'Add Product',
    path:'/admin/edit_product',  
    editMode : false                   
   });                   
}

exports.postAddProducts = (req ,res, next)=>{  
    const body = req.body;
    const title = body.title
    const imageUrl = body.imageUrl;
    const price = body.price;
    const description= body.description;
    const product = new  Product(null,title,imageUrl,price,description);    
    product.save();             
    res.redirect('/');                   
}

exports.getEditProducts =  (req ,res, next)=>{
const editMode = req.query.edit;  
 const productId = req.params.productId;   
   Product.findById(productId,(prd) => {
        res.render('admin/edit_product',  {  
            doctittle:'Edit Product',  
            path:'/admin/edit_product',  
            prods : prd,
            editMode : editMode                
           });    
    })                        
                    
}

exports.editSaveProduct = (req,res,next) =>{
    const updatedTitle = req.body.title;
    const updatedimageUrl = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const updatedProductId = req.body.productId;
    const product = new  Product(updatedProductId,updatedTitle,updatedimageUrl,updatedPrice,updatedDescription);
    product.save();
    res.redirect('/admin/products');             
}

exports.getProducts = (req,res,next) =>{
    Product.fetchAll((product) => {
        res.render('admin/products',    
        {doctittle:'Admin Product List',    
        prods : product,     
        path:'/admin/products'  
       }); 
    
       }); 

}
exports.getPostDeleteProduct = (req,res,next) =>{
    const productId = req.body.productId;
    Product.deleteById(productId);
    res.redirect('/admin/products');        
}
 
