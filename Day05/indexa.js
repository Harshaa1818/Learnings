console.log("start");

for (let index = 0; index < 3; index++) {
    
    async function abc (){
         setTimeout(()=>
            {
            console.log("timer")
            console.log("end")
            },2000)

       

    }
    abc();
    
}
