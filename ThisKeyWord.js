var address={
    hno:12, 
    street:"Swamy",
    City:"puttur",
    State:"AP",
    fullAddress:function()
    {
        return this.hno +" "+this.street+" "+this.City+" "+this.State;
    }
};
var addr=address.fullAddress();
console.log(addr);