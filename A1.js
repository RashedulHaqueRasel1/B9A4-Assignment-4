


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
