<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
    <script>
       const folo= (str) => {
        let count=0;
         for(const c of str){
            if(c==="a"||c==="e"||c==="i"||c==="o"||c==="u"){
                count++;

            }
         }
         return count;
        
       };
       let count1= folo("hello");
       console.log(count1);

    </script>
    
</body>
</html>
