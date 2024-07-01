const a = (b) => {
  if (typeof b === 'number') {
    if (Number.isInteger(b) === true) {
      let result = b + 10;
      return result;
    } else {
      console.log(`${b}는 정수가 아닙니다.`);
    }
  } else {
    console.log(`${b}의 타입은 숫자가 아닙니다.`);
  }
};

console.log(a('조우식'));
console.log('1' + 1);
