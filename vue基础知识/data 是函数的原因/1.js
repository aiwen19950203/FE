

// var zujian = function() {}

// zujian.prototype.data = {
//     message:'Love'
// } 

// var d1 = new zujian()
// var d2  = new zujian()
// d1.data.message = 'henhen'
// d2.data.message = '哈哈'

// console.log('打印d1', d1.data.message);
// console.log('打印d2', d2.data.message);
var zujian = function() {

    this.data = this.data() 
}

zujian.prototype.data = function() {
    return {
        message: 'LOVE'
    }
}

var d1 = new zujian()
var d2  = new zujian()
d1.data.message = 'HEHE'
// d2.data.message = '哈哈'

console.log('打印d1', d1.data.message);
console.log('打印d2', d2.data.message);
