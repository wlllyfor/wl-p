// forEach遍历数组不支持break和continue

const arr = [1, 2, 3]
arr.forEach(item => {
    if(item = 2) {
        return 
    } else {
        console.log(item)
    }
})