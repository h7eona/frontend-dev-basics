/*
    자바스크립트 함수
*/


console.log("============[01.01] 함수를 생성(정의) 방법: literal1");
function f1(a, b){
    return a + b;
}
console.log(typeof(f1), f1(10, 20));

console.log("============[01.02] 함수를 생성(정의) 방법: literal2");
var f2 = function(a, b) {
    return a + b;
}
console.log(typeof(f2), f2(10, 20));

console.log("============[01.03] 함수를 생성(정의) 방법: Function() 생성자 함수");
var f3 = new Function("a", "b", "return a + b");
console.log(typeof(f3), f3(10, 20));

console.log("============[01.04] 함수를 생성(정의) 방법: 익명(Anonymous) 함수");
setTimeout(function(){
    console.log('time out');
}, 1000);

console.log("============[01.05] 함수를 생성(정의) 방법: 즉시 실행 함수");
var s = (function(a, b) {
    return a + b;
}) (10 ,20)

console.log(s);

console.log("============[02] 가변 파라미터");
var sum = function() {
    var sum = 0;
    
    // 구현 1
    // for(var i = 0; i < arguments.length; i++){
    //     sum += arguments[i];
    // }
    // return sum;

    // 구현2: error
    // arguments는 Array가 아니다: 유사배열
    // arguments.forEach(function(e){
    //     sum += e;
    // })

    // return sum;


}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));

console.log("============[03] caller(this) 바꾸기");

