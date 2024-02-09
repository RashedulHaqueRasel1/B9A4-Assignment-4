


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

