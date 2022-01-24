f123();
console.log('A');
console.log('Z');
console.log('B');
f123();
console.log('F');
console.log('C');
console.log('P');
f123();

function f123() {
    var i = 1;
    while (i < 4) {
        console.log(i)
        i = i+1;
    }
}