--> JS fundamentals



//var can be redeclared
var a=10;

var a=20;

//console.log(a);

when we dont assign a keyword , bydefault it is a var
var a=b=20;
console.log(a) 


//let and const cant be redeclared

let b=10;
//let b=3;
//console.log(b)==>error
//

// let and const are block scoped
{
    let ab=10;
}

//console.log(ab)==> error of not defined

//let can be redclared but in different scope but value will not be affected 
let ab=10;
{
    let ab=30;
}

console.log(ab)

value must be assigned to const keyword while declaring otherwise it will throw an error
const a;

Var is hoisted , whereas let and const can also be hoisted but they go into a temporal dead zone

{}=={} ,this are not equal, it will return false because both share different refrence when created

type of NaN is a 'Number'

NaN==NaN is a false statement, bcoz when they assigned NaN value when they are not a number so they may be different in that particular TimeRanges.apply

// How passing data from child to parent??

function parent(){
    function handleClick(){
        console.log("this is called")
    }

    return 
    <child handleClick={handleClick}/>
}

function child(props){
    handleClick=props.handleClick;

return
    <button onClick={()=>handleClick}>submit</button> // using callback function we can pass data from child to parent 
}

