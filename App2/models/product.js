const fs = require('fs');
const path = require('path');
module.exports = class Product {

  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      'data',
      'products.json'
    );
    console.log(require.main.filename);
    fs.readFile(p, (error, data) => {
      let products = [];

      if (!error) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll() {
    const p = path.join(
      path.dirname(require.main.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (error, data) => {
      if (error) {
        return [];
      }
      return JSON.parse(data);
    })
    return products;
  }
}