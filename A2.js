



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
