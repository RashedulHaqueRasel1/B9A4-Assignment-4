

// https://drive.google.com/file/d/1KvoghzeDFe2efIXn0hZ8lbBK5cB-xmaj/view?usp=sharing



// Problem - 1

function calculateMoney(ticketSale){

  if (typeof ticketSale !== 'number' || ticketSale <= 0) {
    return "Invalid Number" ;
  }
  
  const ticketAmount = ticketSale * 120 ;
  const getMan = 500 ;
  const staffLaunch = 8 * 50 ;
  const totalCost = getMan + staffLaunch ;
  const profitAmount = ticketAmount - totalCost ;
  
  return profitAmount ;

}

console.log(calculateMoney(1055))





// Problem - 2

function checkName(name) {

  if (typeof name !== 'string' ){
    return "invalid";
  }
  const letterCheck = ['a', 'y', 'i', 'e', 'o', 'u', 'w'] ;
  
  const letterSlice = name.slice(-1).toLowerCase();


  if (letterCheck.includes(letterSlice)) {
    return 'Good Name';
  }  
  else {
    return 'Bad Name' ;
  }

}

console.log(checkName(199));










// Problem - 3


function deleteInvalids(array) {

  if (Array.isArray(array) === false) {
    return 'Invalid Array' ;
  }

  let empty = [] ;

  for (const item of array) {

    if (typeof item === 'number' && !isNaN(item)) {
      empty.push(item) ;
    }

  }
  return empty ;

}


console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))










// Problem - 4


function password(obj) {

  if ( typeof obj.name !== 'string' || typeof obj.birthYear !== 'number' || typeof obj.siteName !== 'string') {
    return 'invalid' ;
  } 
  else if ( obj.birthYear.toString().length !== 4 ) {
    return 'invalid';
  }
  else {
    const siteObj = obj.siteName ;
    const result = siteObj.charAt(0).toUpperCase() + siteObj.slice(1) + '#' + obj.name + '@' + obj.birthYear ;
    return result ;
  }
}


console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }))















// Problem - 5

function monthlySavings(arr, livingCost ) {

  if(!Array.isArray(arr)  ){
    return 'invalid input' ;
  }

  if (typeof livingCost !== 'number') {
      return 'invalid input' ;
  }

  let add = 0 ;

  for(const forArray of arr){

    if (forArray >= 3000) {

      const multi = forArray * 0.2  ;
      const arrayMines = forArray - multi ; 
      add = add + arrayMines ;

    } else {
      add = add + forArray ;
    }
  }

  const total = add - livingCost ;

  if (total >= 0) {
     const result =   total   ;
     return result ;
  } 
  else{
    return "earn more";
  }

}

console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))