//necesarry variables
const productName = 'ProductName' //productname
const quantity = 5 //product quantity
const amount = 10 //product amount
let taxRate = 0.12 //taxrate of product in decimals
//convert taxrate from decimal  to percent
let taxRatePercent = (taxRate * 100) 
//calculation for subtotal
const subTotal = quantity * amount
//calculation for tax amount
const taxAmount = subTotal * taxRate
//calculation for total amount
const totalAmount = subTotal + taxAmount
//display
console.log('ProductName: ' + productName)
console.log('Quantity: ' + quantity)
console.log('Amount: ' + amount)
console.log('Tax Rate: ' + taxRatePercent +'%')
console.log('SubTotal: ' + subTotal)
console.log('Tax Amount: ' + taxAmount)
console.log('Total Amount: ' + totalAmount)
