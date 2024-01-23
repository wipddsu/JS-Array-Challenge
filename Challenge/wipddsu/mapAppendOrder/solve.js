// write your codes
function solution(inputArray) {
  // const result = inputArray.map((item, i) => {
  //   return { name: item, order: i + 1 };
  // });

  // return result;

  return inputArray.map((item, i) => ({ name: item, order: i + 1 }));
}

exports.solution = solution;
