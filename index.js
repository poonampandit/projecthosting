
function add()
{
  console.log("hii")
}
add()



temp=(a,b,c)=>
{
  console.log("this is arrow function")
  console.log(a+b+c)
}
temp(10,20,30)


temp1=(a,b=20)=>
{
  console.log("this is arrow function")
  console.log(a+b)
}
temp1(50)


abc=(a,args)=>
{

  for(let i=0;i<=6;i++)
  {
    console.log(args[i])
  }

}
abc(20,10,20,30,40,50,60,70)