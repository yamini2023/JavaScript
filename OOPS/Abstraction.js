class ATM
{
     constructor(withdraw)
     {
        this.bal=10000;
        this.withdraw=withdraw;
    
     }
     getAmount()
     {
        let avalBal=0;
        let minimum=500;
        if((this.bal-this.withdraw)>=minimum)
        {
            console.log("withdraw successfull");
            console.log("Total bal in account: "+a1.bal)
            //console.log("withdraw successfull");
            avalBal=this.bal-this.withdraw
            console.log("available balence in account : "+avalBal)
        }
        else if(avalBal=this.bal-this.withdraw)
        {

            console.log("withdraw successfull");

            
        }
        else{
            console.log("withdraw failed")
        }

     }

}

let a1=new ATM(1000);

a1.getAmount();