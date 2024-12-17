#1
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
    <script>
        let ar=[1,2,3,4,5,6,7];
        let evenar = ar.filter((val)=>{
            return val%2===0;
        });
        console.log(evenar);
      
    </script>
    
</body>
</html>
#2
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // Output: [2, 4]
console.log(numbers); 

