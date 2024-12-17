#1
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
    <script>
        let nums= [1,2,3,4];
        let newar= nums.map((val)=>{
            return val*2;
        });
        console.log(newar);
    </script>
    
</body>
</html>

#2
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]

