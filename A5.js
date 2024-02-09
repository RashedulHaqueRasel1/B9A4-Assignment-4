

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
     const result = 'Total Savings : ' + total   ;
     return result ;
  } 
  else{
    return "earn more";
  }

}
