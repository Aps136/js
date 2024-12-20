function sum(a,b){
        console.log(a+b);
       }
       function calc(a,b,sumCallback){
        sumCallback(a,b);
       }
       calc(1,2,sum);
}
