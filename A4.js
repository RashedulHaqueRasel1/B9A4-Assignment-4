


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


