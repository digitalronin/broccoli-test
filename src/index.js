function* counter(start, stop) {
  for (var i = start; i < stop; i += 1) {
    yield i;
  }
}

(() => {
    console.log("Hello, ES6 world!")
})()

for (let i of counter(1, 5)) {
  console.log(`count is ${i}`)
}


var mc = new MyClass()
mc.foo()

