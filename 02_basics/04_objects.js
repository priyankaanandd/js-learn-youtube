const tuserr=new Object();
//this is singleton obj
//console.log(tuserr)//{}
const tinderUser = {}
//this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
    //here fullname is an object
}
//console.log(regularUser)
// {email: 'some@gmail.com',
// fullname: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } } }
 //console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }
 //console.log(obj3)
 //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign({}, obj1, obj2, obj4)
//assign mei saare obj merge hojaegne
//console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const obj3 = {...obj1, ...obj2}
//another method to merge spread methd
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

///here user is array of objects

//console.log(users[1].email)
// console.log(tinderUser);

 //console.log(Object.keys(tinderUser));//['','','']
//kis object ki key chahie uska name() and return type is array

 console.log(Object.values(tinderUser));//['','','']

 //console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

 //console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course["price"])//999


//syntax=> const{ kya value extra krni h}=course //kahan se krni h
const {price}=course
console.log(price)//999

const {price:p}=course
console.log(p)//999

//bar bar console.log()course.price na likhnaa pde



//api kuch value h backen se aati gh in form of json
//json is {}
/*{
    "name":"priya",
    "age":"21"
}*/
//this is json not obj but json bcoz objext does have a name
//isme key bhi string mei hoti h


//sometine api is in from of array of object
//[{},{},{}]