var M = {
    v:'v',
    f: function () {
        console.log(this.v);
    },
}

// mpart.js 에 있는 여러가지 기능들 중에서 M이 가리키는 객체를 모듈 밖에서 사용할 수 있도록 exports 하겠다라는 뜻
module.exports = M;