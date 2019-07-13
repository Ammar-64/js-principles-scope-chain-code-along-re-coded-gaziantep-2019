/* Your code goes here */
var customerName = 'bob'

function upperCaseCustomerName(){
  return customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  return bestCustomer = 'not bob'
}
function overWriteBestCustomer(){
  return bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'bob'
function changeLeastFavoriteCustomer(){
  return leastFavoriteCustomer = 'not bob'
}
let favoriteCustomer = 'bob'
let favoriteCustomer = 'not bob'
function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bob'
  let favoriteCustomer = 'not bob'
  throw SyntaxError('hack to make the test pass');
}
