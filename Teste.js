//JSON 
let invoice = {
	name: "Kalinne",
    age: 39,
    products: {
    	0: ["mouse", 29.90],
        1: ["teclado", 129.90],
        2: ["monitor", 899.90]
	},
    taxes: "99.99"
}
generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("--------------")
 
 for (let index in invoice.products){
 	let [productName, productPrice] = invoice.products[index]
    console.log(`-${productName}: R$ ${productPrice}`)
    }
    
} 
  