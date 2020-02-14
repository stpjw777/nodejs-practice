const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  //d0
  outside: {
    //d1
    inside: {
      //d2
      key: "value"
    }
  }
};
// [a,b,c] 배열, {key: value} 객체

console.time("전체 시간");
console.log("평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다");
console.log(string, number, boolean);
console.error("에러 메세지는 cosole.error에 담아주세요");

console.dir(obj, { depth: 2 });
console.dir(obj, { depth: 1 });
console.dir(obj, { depth: 0 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {
  continue;
}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
}
function a() {
  b();
}
a();

console.timeEnd("전체 시간");
