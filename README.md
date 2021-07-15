# MongoDB and Mongoose

Step 1: Clone repo by 
```shell
git clone https://github.com/dnam-foobla/Task5_Mongo.git
```
Step 2: Open project

Step 3: You can run

```shell
npm start
```
to run this code

APIs:

* GET: product/ : get all products and their infomation
* GET: product/:id : get product with specific id
* POST: product/create : create new product, you can pass name, amount, price parameters into req.body
* PUT: product/:id : update product with specific id, you can pass name, amount, price parameters into req.body
* DELETE: product/:id : delete product with specific id


Schema product
```javascript
{
name: String,
amount: Number,
price: Number
}
```
