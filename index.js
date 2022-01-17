function getfact()
{
    let a = Number(document.getElementById("input1").value)

    let fact=1;
   for(let i=1;i<=a;i++)
   {
    
    fact=fact*i;


   }
   
   document.getElementById("content").innerHTML=` The factorial of ${a} is ${fact}` 
//  document.getElementById("input2").value=fact;
 



}

function getadd()
{

    let b = Number(document.getElementById("id1").value)
    let c = Number(document.getElementById("id2").value)
     
    let add ;
    add=b+c;

    // document.getElementById("ans").value=add;
    
    document.getElementById("sol").innerHTML=` The addition of ${b} ${c} is ${add}` 
}
function getsub()
{

    let d = Number(document.getElementById("id1").value)
    let e = Number(document.getElementById("id2").value)
     
    let sub;
    sub=d-e;
    // document.getElementById("ans").value=sub;
    document.getElementById("sol").innerHTML=` The subtraction of ${d}  ${e}is ${sub}` 

}
function getmulti()
{

    let f = Number(document.getElementById("id1").value)
    let g = Number(document.getElementById("id2").value)
     
    let multi ;
     multi=f*g;
    // document.getElementById("ans").value=multi;
    document.getElementById("sol").innerHTML=` The subtraction of ${f}  ${g}is ${multi}` 

}
function getdiv()
{

    let h = Number(document.getElementById("id1").value)
    let i = Number(document.getElementById("id2").value)
     
    let div ;
    div=h/i;
    // document.getElementById("ans").value=div;
    
    document.getElementById("sol").innerHTML=` The subtraction of ${h}  ${i}is ${div}` 

}