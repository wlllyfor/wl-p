/**
 * es5中如何声明一个类
 */

function Animal(type) {
  this.type = type
  this.walk = function() {
    console.log(this.type + ' can walk')
  }
}


const dog = new Animal('dog')
const cat = new Animal('cat')
cat.walk = () => {
  console.log('error')
}
console.log(dog)
console.log(cat)

/**
 * es5中直接在类中定义方法有什么弊端？如何解决？
 * 所有的实例都会含有类中定义的方法，造成内存浪费
 * 实例的方法是独立的，违背继承原则
 * 解决：方法定义到prototype
 */

dog.walk()
cat.walk()

Animal.prototype.say = function() {
  console.log(this.type + ' say')
}

dog.say()
cat.say()

// console.log(dog)
// console.log(Animal)
// console.log(Animal.prototype)
// console.log(Animal.prototype.constructor)
// class Animal {
//   constructor(type) {
//     this.type = type
//   }
//   eat() {
//     console.log('eat')
//   }
// }

// const monkey = new Animal('monkey')
// console.log(monkey)