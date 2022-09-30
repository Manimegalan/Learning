/* =============================== Event Loop =============================== */
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('The index of this number is: ' + i);
    }, 1000);
}

// expected ouput :
// The index of this number is: 4
// The index of this number is: 4
// The index of this number is: 4
// The index of this number is: 4

/* =============================== Callback Function =============================== */
const operation = (a, b, operation) => {
    switch (operation) {
        case "add": return a + b;
        default: return "Invalid operation";
    }
}
const add = (a, b) => operation(a, b, "add");
add(2, 2) // expected output : 4

/* =============================== Promise =============================== */
// Example 1
const promise = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Message"))
promise.then((val) => console.log(val)) // expected output : "Message"

// Example 2
const element = [{ title: "First element", body: "This is first element" }];
function addElement(ele) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            element.push(ele)
            const error = false;
            if (error) reject("Something went worng")
            else resolve("Element added sucessfully");
        }, 1000)
    })
}
addElement({ title: "Second element", body: "This is second element" })
    .then(val => console.log(val)) // expected output : "Element added sucessfully"
    .catch((e) => console.log(e)) // expected output : "Something went worng"


/* =============================== Async Await =============================== */
const addElement = (ele) => {
    setTimeout(() => element.push({ title: "Third element", body: "This is third element" }), 1000)
}
async function asyncAdd() {
    addElement({ title: "Third element", body: "This is third element" })
    console.log(element)
}
asyncAdd()


/* =============================== Handle uncaught exceptions =============================== */
process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on("uncaughtException", (err) => {
        console.log(err, "Uncaught Exception thrown");
        process.exit(1);
    })