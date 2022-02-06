// problem 4

function oddFriend(names){
     
    for (let i = 0; i < names.length; i++) {
        if (! (typeof names[i] == "string")) {
            return "please enter a valid input"
        }
      
    }
    
    let friends = [];
    for (let i = 0; i < names.length; i++) {
        let friend = names[i].length;
        if (friend % 2 == 1) {
            friends.push(names[i]);
        }
        
       
    }
   
    return friends [0];
   
   }
   
   let demoarray = oddFriend(['Rafi' ,"John","Robi",5,"Arpan","kamal","nilu","jamal"]);
    console.log(demoarray);