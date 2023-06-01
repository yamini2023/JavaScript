const num1Input = 10;
const num2Input = 12;
const buttonElement = document.querySelector('button');

function add(a, b) {
  return a + b;
}

function printResult(result) {
  console.log(result);
}

// const result = add(5, 3);
// let isDone = false;

printResult(result);

//const results: { red print: () => void }[] = [];
const names = ['Max'];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {

    res: result,
    print() {
      console.log(this.res);
    }
  };
  results.push(resultContainer);
  // results.push(5);
  results[0].print();
});