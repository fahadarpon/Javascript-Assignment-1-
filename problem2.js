//  problem 2 
function pandaCost(Shingara,Somocha,Jilapi){
   if (Shingara >= 0  && Somocha >= 0 && Jilapi >= 0 ){
    let priceofshingara = Shingara*7;
    let priceofsomocha = Somocha*10;
    let priceofjilapi = Jilapi*15;
    let totalpriceofallthree = priceofshingara+priceofsomocha+priceofjilapi;
   
    return totalpriceofallthree;
   }
   else{
       return "please give valid input";
   }
     
}

let newpriceofallthree =pandaCost(0,6,7);
  console.log(newpriceofallthree);

