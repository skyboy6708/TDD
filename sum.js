function sum(a, b) {
  return a + b;
}
// function sumOf(numbers) {
//   let result = 0;
//   numbers.forEach((n) => {
//     result += n;
//   });
//   return result;
// }
// 테스트 코드를 작성했을때이점은 리팩토링 이후 코드가 제대로 작동하고있는지 검증이 편하다
function sumOf(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

// 각각 내보내기
exports.sum = sum;
exports.sumOf = sumOf;
