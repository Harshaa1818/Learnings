import express from 'express';

const app=express();

let CONTACTS=[];
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

//create new contact
app.post('/',(req,res)=>{
     let { firstName, lastName, email, phone }=req.body;
        if(!firstName || !lastName || !email || !phone){
            return res.status(400).json({message:"All fields are required"})
        }
        if(!email.includes('@')){
            return res.status(400).json({message:"Invalid email"})
        }
        if(phone.length!==10){
            return res.status(400).json({message:"Invalid phone number"})
        }
    CONTACTS.forEach(contact=>{ if(contact.email==email || contact.phone==phone) return  res.status(400).json({message:"Email or phone already exists"}) })
    

    const id=CONTACTS.length+1;
     let contact={ firstName, lastName, email, phone, id, createdAt:Date.now() }
    

     CONTACTS.push(contact)
    // console.log( CONTACTS )

    return res.status(201).json({message:"contact created",CONTACTS})
})

//get all contacts
app.get('/',(req,res)=>{
    return res.json({message:"list of all contacts",CONTACTS})
    
})

//get all contacts based on alphabatical sort
app.get('/contacts&order=asc',(req,res)=>{
    let contacts=CONTACTS.sort((a,b)=>a.firstName.localeCompare(b.firstName))
    return res.json({message:"list of all contacts",contacts})
    
})
app.get('/contacts&order=desc',(req,res)=>{
    let contacts=CONTACTS.sort((a,b)=>b.firstName.localeCompare(a.firstName))
    return res.json({message:"list of all contacts",contacts})
    
})
app.get('/contacts?sort=createdAt&order=asc',(req,res)=>{
    let contacts=CONTACTS.sort((a,b)=>Number(a.createdAt)-Number(b.createdAt))
    return res.json({message:"list of all contacts",contacts})
    
})
app.get('/contacts?sort=createdAt&order=desc',(req,res)=>{
    let contacts=CONTACTS.sort((a,b)=>b.createdAt-a.createdAt)
    return res.json({message:"list of all contacts",contacts})
    
})
app.get('/contacts?sort=lastname&order=asc',(req,res)=>{
    let contacts=CONTACTS.sort((a,b)=>a.lastName.localeCompare(b.lastName))
    return res.json({message:"list of all contacts",contacts})
    
})
app.get('/contacts?sort=lastname&order=desc',(req,res)=>{
    let contacts=CONTACTS.sort((a,b)=>b.lastName.localeCompare(a.lastName))
    return res.json({message:"list of all contacts",contacts})
    
})


app.get('/contact/:id',(req,res)=>{
    let contactId=req.params.id;

    const contact=CONTACTS.find((contact)=>contact.id==contactId);

    if(!contact) return res.json({message:"invalid id"})

        return res.json({message:"contact details:",contact})
})

// update contact 
app.patch('/update/:id',(req,res)=>{
    let contactId=req.params.id;
    let { firstName, lastName, email, phone }=req.body;
    let contact=CONTACTS.find(contact=>contact.id==contactId)

    if(!contact) return res.status(404).json({message:"contact not found"})

        contact.firstName=firstName;
        contact.lastName=lastName;
        contact.email=email;
        contact.phone=phone;

        return res.json({message:"contact updated",contact})

})

//delete contact
app.delete('/delete/:id',(req,res)=>{
    const contactId=req.params.id;
    if(!contactId){
        return res.json({message:"please enter contact id"})
    }

    let index=CONTACTS.findIndex((contact)=>contact.id==contactId);

    if(!index) return res.json({message:"invalid contact id"})

    CONTACTS.splice(index,1);

    return res.json({message:"contact deleted succesfully",CONTACTS})

})

app.listen(8080,()=> console.log("server is listening on PORT: 8080"))