var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({

    service : 'gmail',
    auth:{
        user:'yaminisreeraghavarju@gmail.com',
        pass:'Yamini@000'
    }
})


var options ={
    from:'yaminisreeraghavaraju@gmail.com',
    to :'user1@gmail.com',
    subject:'Testing a E-mail',
    text:'it is to use '
}

transporter.sendMail(options,(err,info)=>{

    if(err)
    {
        console.log(err);s
    }
    else{
        console.log('email is sent '+info.response)
    }

})