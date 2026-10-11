function BtnText()
{
    let x=document.querySelector('.btn');
    let i=document.getElementById("data");

    if(x.innerText=="Know More")
    {
        x.innerHTML="Know Less";
        i.style.display="block";
    }
    else
    {
        x.innerHTML="Know More";
        i.style.display="none";

    }
}

function callAlert1()
{
    let y=document.querySelector("#btn2")
    let l=document.getElementById("name1").innerText;
    if(y.innerText=="Connect")
    {
        y.innerHTML="Connecting...";
        alert(`Connecting:${l}`)

    }
    else
    {
        y.innerHTML="Connect";
    }
}


function callAlert2()
{
    let z=document.querySelector("#btn3")
    let l=document.getElementById("name2").innerText;

    if(z.innerText=="Connect")
    {
        z.innerHTML="Connecting...";
        alert(`Connecting:${l}`)
    }
    else
    {
        z.innerHTML="Connect";
    }
}

function callAlert3()
{
    let p=document.querySelector("#btn4")
    let l=document.getElementById("name3").innerText;
    if(p.innerText=="Connect")
    {
        p.innerHTML="Connecting...";
        alert(`Connecting:${l}`)

    }
    else
    {
        p.innerHTML="Connect";
    }
}

var count=0;
function Counter()
{
   document.getElementById("cart").innerHTML=count;
   count++;
}

function AddToCart()
{
    Counter();
}