console.log("Hello World!!!")

console.log("__dirname:" + __dirname)
console.log("__filename:" + __filename)

setTimeout(function(){
    console.log("Hello after 2 seconds!")
}, 2000)

var count = 1
var maxCount = 5

var myCountInterval = setInterval(function() {
    console.log("Hello after " + count++ + " seconds")
    checkMaximum()
}, 1000)

var checkMaximum = function () {
    if(count > maxCount){
        clearInterval(myCountInterval)
    }
}