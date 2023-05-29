let fs=require('fs')

//read file

    fs.readFile('./File.txt',(err,data)=>{
    if(err){
        console.log("file not found")
    }
    
    
    else
    {
        console.log(data.toString())
    } 
    })   
    console.log("before reading")


  //Write File

  fs.appendFile('./File.txt',"updating ",(err)=>{
    if(err){
        console.log("write not found")
    }
    
    
    else
    {
        console.log("write success...")
    } 
    })   
    console.log("before reading")


    //deleting a file

    fs.unlink('./File.txt',(err)=>{
        if(err){
            console.log("write not found")
        }
        
        
        else
        {
            console.log("write success...")
        } 
        })   
        console.log("before reading")
    