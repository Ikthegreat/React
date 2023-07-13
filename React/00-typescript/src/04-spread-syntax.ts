// --------------------------------------------------------------------------
// spread syntax

function run() {
  // combineArray();
  combineObject();
}

function combineArray() {
  const numberList: number[] = [2, -2, 1];
  const countList: Array<number> = [101, 201, 301];
  let combineList: number[] = countList
    .slice(0, 2)
    .concat(numberList)
    .concat(countList.slice(2));

  console.log(combineList);

  // 배열 복제
  // slice, map, forEach, filter, ...
  // 배열 push, pop, sort, ...

  combineList = [
    ...countList.slice(0, 2),
    ...numberList,
    ...countList.slice(2),
  ];

  // [ 101, 201, 2, -2, 1, 301 ]
  console.log(combineList);
}

// custom type
// interface
interface Options {
  startIndex?: number;
  loop: boolean;
}

function combineObject() {
  const defaultOptions: Options = {
    startIndex: 0,
    loop: false,
  };

  const customOptions: Options = {
    loop: true,
  };

  let combineOptions = Object.assign({}, defaultOptions, customOptions);
  console.log(combineOptions);

  combineOptions = { ...defaultOptions, ...customOptions };
  console.log(combineOptions);
}

run();
