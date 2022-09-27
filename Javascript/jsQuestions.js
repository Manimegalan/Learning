const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('The index of this number is: ' + i);
    }, 3000);
}

// expected ouput :
// The index of this number is: 4
// The index of this number is: 4
// The index of this number is: 4
// The index of this number is: 4