var autos=["mazda","audi","toyota","renault"];
var principal=document.getElementById("principal");
var miUl=document.createElement("ul");
for(var i=0;i<autos.length;i++)
{
    var li=document.createElement("li");
    li.innerHTML=autos[i];
    li.style.display="inline-block";
    li.style.marginRight="10px";
    li.style.color="Red";
    li.classList.add("item");
    li.style.fontSize="30px";
    //li.style.border="5px solid green";
    //li.style.borderRadius="50%";
    miUl.appendChild(li);
}
principal.appendChild(miUl);
//[elemento].children =>devuelve un arreglo
//con todos los elementos hijos de un elemento padre
console.log(miUl.children[2]);

