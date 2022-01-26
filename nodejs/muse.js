// 모듈
/*var M = {
    v:'v',
    f: function () {
        console.log(this.v);
    },
}*/

var part = require ('./mpart.js');
console.log(part);
part.f();

// 많은 객체 , 많은 함수들을 정리정돈 하는 것 module