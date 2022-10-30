function switchCurrency(cur){
   switch(cur){
       case 'usd':
           return 'dollar'
       default: 
           return cur;
   }
}

export default switchCurrency;