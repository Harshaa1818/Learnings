import express from 'express';

const app=express();

let CONTACTS=[];

//create new contact
app.post('/create',function(req,res){
    // const { firstName, lastName, email, phone }=req.body;
//    const firstName=req.firstName;
//    const lastName=req.lastName;
//    const email=req.email;
//    const phone=req.phone;
console.log(req.body)

    // const id=CONTACTS.length+1;
    

    // let contact={ firstName, lastName, email, phone, id, createdAt:Date.now() }

    // CONTACTS.push(contact)
    // console.log( CONTACTS )

    return res.status(201).json({message:"contact created"})
})

//get all contacts
app.get('/get',(req,res)=>{
    return res.json({message:"list of all contacts",CONTACTS})
    
})

//get all contacts based on alphabatical sort
app.get('/',(req,res)=>{
    
})

//get all contacts based on created time 
app.get('/',(req,res)=>{
    
})

//get all contacts based on lastname
app.get('/',(req,res)=>{
    
})

// update contact 
app.patch('/update/:id',(req,res)=>{

})

//delete contact
app.delete('/delete/:id',(req,res)=>{

})

app.listen(8080,()=> console.log("server is listening on PORT: 8080"))