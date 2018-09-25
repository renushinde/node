let faker = require('faker');
console.log("Top 10 Products");
for( let i=0; i<10; i++){
	console.log(faker.commerce.productName() + " - $ " + faker.commerce.price()); // Kassandra.Haley@erich.biz

}
 