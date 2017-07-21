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

 function readData(){
 	var query = "SELECT * from products";
        connection.query(query, function(err, res){
         	if(err) throw err;


        var table = new Table({
     	head: ['ItemID', 'productName', 'Department', 'Price', 'stock_quantity'],
     	colWidths:[10, 20, 20, 20, 20]
        });
        for(var i=0; i < res.length; i++){
         var productArray = [res[i].item_id, res[i].product_name, res[i].department_name,res[i].price,res[i].stock_quantity];
         table.push(productArray);
        }
         console.log(table.toString());


         });
 }

 function addItem(){
 	inquirer.prompt({

 		name: 'item',
 		type: 'input',
 		message: 'Please select item_id to add Inventory'

 	}).then(function(choice){
 		var item = parseInt(choice.item);

 		connection.query("UPDATE products")
 	})
 }

var runSearch = function(){
	inquirer
	.prompt(
	{
     name: "menu",
     type: "list",
     message: 'Please select one from the menu options',
     choices: ['View Products for Sale', 'View Low Inventory']
	}

	).then(function(answer){
		if(answer.menu === "View Products for Sale"){
		readData();
		}

	   if(answer.menu === "View Low Inventory")	{
	   	var query = 'SELECT * FROM products where stock_quantity< 5';
	   	connection.query(query, function(err, res){
     
        console.log('These items stock_quantity is low!!'.blue.bold);
     

        var table = new Table({
     	head: ['ItemID', 'productName', 'Department', 'Price', 'stock_quantity'],
     	colWidths:[10, 20, 20, 20, 20]
        });
        for(var i=0; i < res.length; i++){
         var productArray = [res[i].item_id, res[i].product_name, res[i].department_name,res[i].price,res[i].stock_quantity];
         table.push(productArray);
        }
        console.log(table.toString());

        });
	   	
	   };



	});
    }


