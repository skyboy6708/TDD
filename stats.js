// exports.max = (numbers) => {
//   let result = numbers[0];
//   numbers.forEach((n) => {
//     if (n > result) {
//       result = n;
//     }
//   });
//   return result;
// };

// 리팩토링
exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);
// exports.avg = (numbers) => {
//   const sum = numbers.reduce((acc, current) => acc + current, 0);
//   return sum / numbers.length;
// };
exports.avg = (numbers) =>
  numbers.reduce(
    (acc, current, index, { length }) => acc + current / length,
    0
  );
exports.sort = (numbers) => numbers.sort((a, b) => a - b);
exports.median = (numbers) => {
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2) {
    return numbers[middle];
  }
  return (numbers[middle - 1] + numbers[middle]) / 2;
};

// ** Map 객체란? **
// 메소드만으로 값을 넣고 뺀다(get, set, clear ..) = 개발자의 의도가 명확
// 문자열 아닌 값을 키로 사용 가능
// for..of 문으로 순회가 가능(맵 이터레이터의 형태 = 키-값쌍으로 묶은 배열) entries()
// 언제쓰는가? 프로퍼티를 자주 변경해야할때!!
exports.mode = (numbers) => {
  const counts = numbers.reduce(
    (acc, current) => acc.set(current, acc.get(current) + 1 || 1),
    new Map()
  );
  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );
  if (modes.length === numbers.length) {
    // 최빈값이 없음
    return null;
  }
  if (modes.length > 1) {
    // 최빈값이 여러개
    return modes;
  }
  // 최빈값이 하나
  return modes[0];
};
