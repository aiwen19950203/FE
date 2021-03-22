const obj1 = {title:'哈哈'}
const obj2 = {name:'小爱同学'}
const obj3 = {content:'么么哒'}

let arr = [obj1,obj2,obj3]

Promise.all(arr).then(res=>{
    console.log(res)


})
