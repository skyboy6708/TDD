const { sum, sumOf } = require("./sum");

// test() 새로운 테스트 케이스를 만드는 함수
// expect 특정값이 ~일것이다라고 정의
// toBe() 특정값이 우리가 정한값과 일치하는 지 확인해줌
test("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// 테스트케이스 설명을 영어로 작성하게됨
it("calculates 1 + 2", () => {
  expect(sum(1, 2)).toBe(3);
});

// describe 감싸서 여러 테스트 케이스를 sum으로 묶기
describe("sum", () => {
  it("calculates 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("calculates all numbers", () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
