function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 2000);
  });
}

function* getData() {
  try {
    const data1 = yield fetchData('https://www.example.com/data1');
    console.log(data1);
    const data2 = yield fetchData('https://www.example.com/data2');
    console.log(data2);
    const data3 = yield fetchData('https://www.example.com/data3');
    console.log(data3);
  } catch (error) {
    console.error(error);
  }
}

function run(generator) {
  const iterator = generator();

  function iterate(iteration) {
    if (iteration.done) {
      return Promise.resolve(iteration.value);
    }

    return Promise.resolve(iteration.value)
      .then((data) => iterate(iterator.next(data)))
      .catch((error) => iterate(iterator.throw(error)));
  }

  try {
    return iterate(iterator.next());
  } catch (error) {
    return Promise.reject(error);
  }
}

run(getData);
