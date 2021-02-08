const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

// readFile helper function
const getProductsFromFile = (cb) => {
  fs.readFile(p, (error, data) => {
    if (error) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
}
module.exports = class Product {

  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
    console.log(require.main.filename);
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}