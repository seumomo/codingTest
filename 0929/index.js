/* 점의 위치 구하기 */

/* 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요. */

function solution1(dot) {
  const x = dot[0];
  const y = dot[1];
  let dotLocation;

  if (x > 0) {
    if (y > 0) {
      dotLocation = 1;
    } else {
      dotLocation = 4;
    }
  } else {
    if (y > 0) {
      dotLocation = 2;
    } else {
      dotLocation = 3;
    }
  }

  return dotLocation;
}

/* 최댓값 만들기 (1) */

/* 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요. */

function solution2(numbers) {
  numbers.sort((a, b) => b - a);

  return numbers[0] * numbers[1];
}

/* 중복된 숫자 개수 */

/* 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요. */

function solution3(array, n) {
  let countN = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] === n ? countN++ : null;
  }

  return countN;
}
