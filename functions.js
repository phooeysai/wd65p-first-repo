let walletBalance = 10000
let maxAttempts = 3
let attempts = 0

const transferMoney = () => {
    attempts++
    
    if(attempts <= maxAttempts) {
        // Get the receiver's mobile number
        

const receiverMobileNumber = prompt(`Enter the receiver's mobile number: `)
        
        if(receiverMobileNumber.length !== 11) {
            console.log(`Invalid receiver's mobile number`)
            
	return transferMoney()
        }
        
        
const transferAmount = prompt('How much do you want to transfer?: ')
        
        if(isNaN(transferAmount) || transferAmount < 0) {
            		console.log('Invalid transfer amount. Please enter a valid amount.')
            return transferMoney()
        }
        
        if(transferAmount > walletBalance) {
            console.log('Insufficient wallet balance.')
            return transferMoney()
        }
        
        walletBalance = walletBalance - transferAmount
        
        console.log('Transfer successful!')
        console.log(`Receiver's mobile number: ${receiverMobileNumber}`)
        console.log(`Transfer amount: ${parseFloat(transferAmount).toFixed(2)}`)
        console.log(`Wallet balance: ${parseFloat(walletBalance).toFixed(2)}`)
        
        attempts = 0
    } else {
        console.log('Max attempts reached')
    }
    
    
}

// Execute the money transfer function
transferMoney()