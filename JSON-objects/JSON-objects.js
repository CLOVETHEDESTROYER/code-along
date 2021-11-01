const mArray = ['JIm', 28, 'red']
console.log(mArray[2])

let person = {
    name: 'Jim',
    age: 28,
    hairColor: 'red',
    run: function(){console.log('running')}
}
console.log(person.age)
person.run()
person.age = person.age + 1
console.log(person.age)

//const walk = function(){console.log('walking')}
//function walk (){console.log('walking slow')}

let anotherPerson = {
    name: 'Sue',
    age: 27,
    hairColor: 'brown',
    walk: function () {
        console.log('running')
    }
}

console.log('another person hair color', anotherPerson.hairColor)
anotherPerson.walk()


let people = [person, anotherPerson]
console.log(people[0])
console.log(people)