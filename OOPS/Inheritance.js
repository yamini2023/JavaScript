class parent
{
    getphone()
    {
        console.log('Oneplus');
    }
}
class child extends parent
{
    getMobile()
    {
        console.log('smartphone');
    }
}
let p1=new child();
p1.getphone();
p1.getMobile();