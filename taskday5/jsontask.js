let myurl="https://66681676f53957909ff67af8.mockapi.io/users/Animals";

async function jsonimgchang(){

    const jfetch= await fetch(myurl);
    console.log("jfetch", jfetch);
    const respdata= await jfetch.json();
    console.log("respdata", respdata); 

    let select= document.getElementById("theselectid");

    for(let i=0 ; i<respdata.length;i++){
        let oplist=  document.createElement("option");
        oplist.innerHTML= respdata[i].name;
        select.appendChild(oplist);
        oplist.value=respdata[i].image;
    }

}
jsonimgchang();
let imgch=document.getElementById("imgId");
function imgchange(value){
     imgch.src=value;
   
}