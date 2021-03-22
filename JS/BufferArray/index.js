const buffer = new ArrayBuffer(8)

console.log(buffer.byteLength)//8
console.log(buffer.length)//undefined

console.log(ArrayBuffer.length)//1

// buffer.ptototype.a =8 

// const res = buffer.ptototype.a

// console.log(res);


// console.log(buffer.prototype.byteLength)
// const res = buffer.get ArrayBuffer 

// console.log(res);

// 现在的一个问题就是如何去 构造 ArrayBuffer 