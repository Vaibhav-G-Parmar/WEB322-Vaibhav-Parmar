//how to include modules

var readline = require('readline')

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Enter your name: ', function(answer) { 
    console.log("Hello, " + answer + "!")
    r1.close()
}) 