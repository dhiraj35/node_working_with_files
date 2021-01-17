const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '../', 'data/', 'products.json');
const Cart = require('./cart');

const getproductsfromfile = (cb) => {
    fs.readFile(p, (err, filecontent) => {
        if (err) {
            // return [];
            cb([]);
        }
        cb(JSON.parse(filecontent));
    })

}

module.exports = class Product {

    constructor(id, title, imageurl, price, desc) {
        this.id = id;
        this.title = title;
        this.imageurl = imageurl;
        this.price = price;
        this.desc = desc;
    }

    save() {
        getproductsfromfile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(
                    prod => prod.id === this.id
                );
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                });
            }
        });
    }
    static deleteById(id, cb) {
        getproductsfromfile(product => {
            const productData = product.find(prds => prds.id === id);
            const updatedproduct = product.filter(prd => prd.id !== id);
            fs.writeFile(p, JSON.stringify(updatedproduct), (err) => {
                if (!err) {
                    Cart.getCart(filecontent => {  
                        const existingcard = filecontent.products.find(cartdata => cartdata.id === id);
                        if (existingcard) {   
                            Cart.deleteProduct(id, productData.price);
                        }
                    })
                }
            });
        });


    }

    static fetchAll(cb) {
        getproductsfromfile(cb);
    }
    static findById(pid, cb) {
        getproductsfromfile(product => {
            const prodcut = product.find(p => p.id === pid);
            cb(prodcut);
        });
    }
}