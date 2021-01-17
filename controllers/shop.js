
const Product = require('../models/products');
const Cart = require('../models/cart');


exports.getproducts = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('shop/product_list',
            {
                doctittle: 'All Products',
                prods: product,
                path: '/products'
            });

    });
}

exports.getproduct = (req, res, next) => {
    const prodid = req.params.productid;
    Product.findById(prodid, product => {
        res.render('shop/product_details',
            {
                doctittle: 'Product Details',
                prods: product,
                path: '/products'
            });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('shop/index',
            {
                doctittle: 'Shop',
                prods: product,
                path: '/'
            });

    });

}

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(prodData => {
            const cartProducts = [];
            for (product of prodData) {
                const findCartProduct = cart.products.find(prd => prd.id === product.id);
                if (findCartProduct) {
                    cartProducts.push({ productData: product, qty: findCartProduct.qty });  
                }
            }
            res.render('shop/cart',
                {
                    doctittle: 'Your Cart',
                    path: '/cart',
                    products: cartProducts
                });
        })

    })

}

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price);
        res.redirect('/cart');
    });

}

exports.postDeleteCart = (req,res,next ) => {
    const productId = req.body.productId;
    Product.findById(productId,(prdData)=>{
     Cart.deleteProduct(productId,prdData.price); 
     res.redirect('/cart');   
    })   
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',
        {
            doctittle: 'Your Orders',
            path: '/orders'
        });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        doctittle: 'Your Checkout',
        path: '/checkout'
    });
}
