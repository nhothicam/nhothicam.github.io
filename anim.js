function moverighttoleft(element){
element.style.top=0+"px";
element.style.left=pos+"px";
var width=window.innerWidth;
var pos=width;
var id=setInterval(function(){
var limit=-8;
if(pos<=limit){
clearInterval(id);
element.style.left=limit+"px";;
}else{
element.style.top=0+"px";
element.style.left=pos+"px";
pos-=20;
}
},2);
}
function fadein(elem){
var opac=0;
var id=setInterval(function(){
if(opac>=1){
clearInterval(id);
}else{
opac=opac+0.02;
elem.style.opacity=opac;
}
},5);
}
