// 1). Function that will calculate the total amount of purchased bread.
const calculateTotalAmountOfPurchasedBread = (totalPieces,pricePerEach) => totalPieces * pricePerEach
//console.log(calculateTotalAmountOfPurchasedBread(10,749))

// 2). Variable that will hold the returned output of the total amount calculator function.
const totalAmount = calculateTotalAmountOfPurchasedBread(totalPieces = 10, pricePerEach = 749)
//   return console.log(calculateTotalAmountOfPurchasedBread(10,749))

// 3). Function that will divide the total amount parameter into two equal amounts
const dividedTotalAmount = (totalAmount,intoTwoEqualAmount) => totalAmount / intoTwoEqualAmount
console.log(`Juan and Pedro have to contribute ${dividedTotalAmount(totalAmount,2)} each.`)
