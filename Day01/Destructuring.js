// -->> Flatten the object
const obj={
    name: 'Harshal',
    age: 26,
    address:{
        city:{
            name: 'Pune',
            zip:412216
        },
        country: 'India'
    }
}

function flatten(obj){

    let result={}

    for( let i in obj){
        if(typeof(obj[i])=="object"){
            let temp=flatten(obj[i]);

            for(let j in temp){
            result[ i + "." + j ]=temp[j]
            }
        }
        else{
            result[i]=obj[i]

        }
    }

    return result;

}


 console.log(flatten(obj));


// -->> Array Destructuring..

const arr=[1,2,3,4,5]

const [a,b,c,d]=[10,...arr]

console.log(d);

// -->> object destructuring
const {email}=req.body;
const obj1={
    name:"harshal"
}
const obj2={
    city:"pune"
}

console.log({...obj1,...obj2})

// --> rest operator 

function dummy(...rest){ //...rest is a rest operator here it gathers all the value and stores in rest variable
    console.log(rest)

}

dummy(...arr) // ...arr is a spread operator here, which spreads all the array an pass it into a fn


// --> Deep copy and shallow copy

let obj3=obj1; // SHALLOW COPY, in this case obj3 will hold refrence of obj1 , whenever we mke change in obj1 it will reflect in obj3, 

let obj4={...obj1} // DEEP COPY, it creates completely different object.

// --> function currying

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));






