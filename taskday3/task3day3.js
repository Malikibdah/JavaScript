function fontsz(x){

    document.getElementById("text").style.fontSize=x;

}
function fontf(){
    d=document.getElementById("fontfamily").value;
    document.getElementById("text").style.fontFamily=d;
}
function fontweit(value){
    if(value)
    {document.getElementById("text").style.fontStyle="italic";}
    else{
        document.getElementById("text").style.fontStyle="";
    }
}
function fontweitgh(value){
    console.log(value);
    if(value)
        {document.getElementById("text").style.fontWeight="bold";}
        else{
            document.getElementById("text").style.fontWeight="";}
}
function fontweitghtt(value){
    if(value)
        {document.getElementById("text").style.textDecoration="underline";}
        else{
            document.getElementById("text").style.textDecoration="";}
}