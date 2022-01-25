// array, object
// function
function f1() {
    console.log(1 + 1);
    console.log(1 + 2);
}

// 자바스크립트는 함수가 독특한 특성을 가지고 있다.
// 처리해야할 일을 갖고 있는 구문 ( statement 이면서 동시에 값 )

/*var i = if(true){console.log(1)}; 조건문은 값이 되지 않는다. 조건문은 구문 */
/*var i = while(true){console.log(1)}; 조건문은 값이 되지 않는다. 조건문은 구문 */

var f2 = function (){
    console.log(1+2);
    console.log(1+3);
};
f2();

// 자바스크립트에서는 함수가 변수 즉 값이 될 수 있다.
var a = [f2];
a[0]();
// 배열의 원소로써 함수 존재

var o = {
    func:f2
}
o.func();

// 자바스크립트는 함수도 데이터이기 때문에 배열에도 담고 , 객체에도 담을 수 있다.

