// 실용성 대신 컨셉을 배우는 코드
var v1 = 'v1';
// 중간에 10000 code가 끼어둘 수 있다. 그 사이에 v1 이 변경된다
v1 = 'kwon'; // 값이 변경되는 상황 -> 버그로 이어진다. 코드가 많으면 버그 찾기가 기하급수적으로 어려워진다.
// 이러한 상황에서 객체라는 형태는 좀 더 찾기 쉽게 도와준다.
var v2 = 'v2';

var o = {
    v1: 'v1',
    v2: 'v2',
    f1: function () {
        console.log(this.v1);
    },
    f2:function () {
        console.log(this.v2); // 자신이 속해있는 객체를 참조할 수 있는 this
    }
}
// 중간에 누군가 같은 이름의 함수를 만든다면 , 우리가 만든 위에 f1() function는 삭제된거나 마찬가지 - 그렇기에 함수도 객체 안에 멤버로써 추가하자.
// 객체안에 함수까지 그룹핑
o.f1();
o.f2();

