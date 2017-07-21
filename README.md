# bamazon

Challenge #1: Customer View

Create a MySQL Database called bamazon.
Then create a Table inside of that database called products.
The products table should have each of the following columns:
item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)
Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.
The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.
Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
However, if your store does have enough of the product, you should fulfill the customer's order.
This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.

<img width="898" alt="screen shot 2017-07-20 at 9 32 31 pm" src="https://user-images.githubusercontent.com/12739431/28449379-6dafbd30-6d94-11e7-9794-f900fd618a2a.png">

<img width="881" alt="screen shot 2017-07-20 at 9 33 19 pm" src="https://user-images.githubusercontent.com/12739431/28449378-6dadf248-6d94-11e7-8501-2666831e7498.png">

<img width="899" alt="screen shot 2017-07-20 at 9 33 42 pm" src="https://user-images.githubusercontent.com/12739431/28449381-6db26148-6d94-11e7-8f5a-9a87c1316ccd.png">

<img width="891" alt="screen shot 2017-07-20 at 9 34 32 pm" src="https://user-images.githubusercontent.com/12739431/28449376-6dac1ebe-6d94-11e7-8d2d-fdfae3a515e5.png">

<img width="848" alt="screen shot 2017-07-20 at 9 34 50 pm" src="https://user-images.githubusercontent.com/12739431/28449380-6db08e18-6d94-11e7-9530-50f44772fada.png">

<img width="848" alt="screen shot 2017-07-20 at 9 35 09 pm" src="https://user-images.githubusercontent.com/12739431/28449382-6dc1a0fe-6d94-11e7-801e-62bff3fa5276.png">
