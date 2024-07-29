
// clusters of Node.js processes can be used to run multiple instances of Node.js 
// that can distribute workloads among their application threads. 
// When process isolation is not needed, use the worker_threads module instead, 
// which allows running multiple application threads within a single Node.js instance.

const cluster = require('cluster');
const os = require('os');


const totalCpus = os.cpus().length;

console.log(`Total CPUs: ${totalCpus}`);

if(cluster.isprimary){
    console.log('I am primary');
    for(let i = 0; i < totalCpus; i++){
        cluster.fork();
    }
}
else{
    const PORT=3000;
    const express=require('express');
    const app=express();
    app.get('/',(req,res)=>{
        res.send('Hello from cluster',cluster.worker.id);
    })

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}