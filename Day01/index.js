//Flatten the object
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

// console.log(flatten(obj));


//Array Destructuring

const arr=[1,2,3,4,5]

const [a,b,c,d]=[10,...arr]

console.log(d);

//object destructuring
const {email}=req.body;

//dot operator





