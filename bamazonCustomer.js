var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var colors = require('colors');
require('console.table');

var connection = mysql.createConnection ({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "kamal",
	database: "bamazon"
});

connection.connect(function(err){
	if(err) throw err;

	runSearch();
});

var runSearch = function(){
    var query = "SELECT * from products";
    connection.query(query, function(err, res){
     
     console.log('Welcome to Bamazon!!'.blue.bold);
     

     var table = new Table({
     	head: ['ItemID', 'productName', 'Department', 'Price', 'stock_quantity'],
     	colWidths:[10, 20, 20, 20, 20]
     });
     for(var i=0; i < res.length; i++){
       var productArray = [res[i].item_id, res[i].product_name, res[i].department_name,res[i].price,res[i].stock_quantity];
       table.push(productArray);
     }
     console.log(table.toString());
     buyItem();

    });
};
	var buyItem = function(){
		inquirer
	.prompt([

	{
		name: "productId",
		type: "input",
		message: "What is the ID of the product you would like to buy?"
       
	},
	{
		name: "quantity",
		type: "input",
		message: "how many would you like to buy?"

	}

	])
	.then(function(choice){
		var item = parseInt(choice.quantity);

	  connection.query("SELECT * from products Where?", [{item_id : choice.productId}], function(err, result){
	  	if(err) throw err;

	  	if(result[0].stock_quantity < item){
	  		console.log('Insufficient quantity, Please select a different item.'.red.bold);
	  		runSearch();
	  		
	  	}
	  	else{
	  		var updateQty = result[0].stock_quantity - item;
	  		var totalPrice = result[0].price * item;

	  		connection.query("UPDATE products SET stock_quantity = ? WHERE item_id =?", [updateQty, choice.productId], function(err, data){
	  			if(err) {
	  				throw err;
	  			}
	  			else{
	  				console.log("Thanks for your purchase!\n".green.bold);
	  				console.log(colors.green.bold('Your total cost is: %s'), totalPrice);
                    
                    runSearch();
                    
                }

       //             function buyAgain(){
       //             	inquirer.prompt({
	  				// 	name: "buyAgain",
	  				// 	type: "confirm",
	  				// 	message: "Would you like to buy another product?",

	  				// }).then(function(answer){
	  				// 	if(answer.buyAgain == true){
	  				// 		runSearch();
	  						
	  				// 	}
	  				// 	else{
	  				// 		console.log("Thanks for shopping with us, Please visit again".green.bold);
	  				// 		connection.end();
	  				// 	}

	  				// });

       //             }

	  				
	  			
	  		});
	  	}

	  });

	   
	   	
      });
      

};
	
     
	
