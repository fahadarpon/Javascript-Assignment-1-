// problem 1
function anaToVori(ana){
    if(ana < 0){
        
        return "please enter valid input" ;
    }
    else{
        let vori = ana/16;
        return vori;
    }
   
    
}

let newAna = 80;
let vori = anaToVori(newAna);
  console.log(vori);