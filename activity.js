//necessary variables
const productName = 'ProductName'
const quantity = 5
const amount = 10
let taxRate = 0.12
//calculation for subtotal
const subTotal = quantity * amount
// calculation for tax amount
const taxAmount = subTotal * taxRate
//calculation for total amount
const totalAmount = subTotal + taxAmount
//display
console.log('ProductName: ' + productName)
console.log('Quantity: ' + quantity)
console.log('Amount: ' + amount)
console.log('Tax Rate: ' + taxRate + '%')
console.log('Subtotal: ' + subTotal)
console.log('Tax Amount: ' + taxAmount)
console.log('Total Amount: ' + totalAmount)
