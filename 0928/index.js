/* 배열 뒤집기 */

/* 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요. */

function solution1(num_list) {
  return num_list.reverse();
}

/* 자릿수 더하기 */

/* 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요 */

function solution2(n) {
  const numberArray = [...String(n)];
  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    sum += Number(numberArray[i]);
  }

  return sum;
}

/* 아이스 아메리카노 */

/* 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요. */

function solution3(n) {
  const americano = Math.floor(n / 5500);
  const leftMoney = n % 5500;

  const result = [americano, leftMoney];
  return result;
}
