function detectmob(){
if(window.innerWidth<=800&&window.innerHeight<=600){
document.location="mobile/index.html";
}else{
document.location="desktop/index.html";
}
}
function demo1(){
alert("");
}
function showTag2Listview(){
for(i=0;i<11;i++){
showTag("Freeship 50K","https://cf.shopee.vn/file/b32facc4bd5c5dacef483d803761be9b_xhdpi","https://cf.shopee.vn/file/b32facc4bd5c5dacef483d803761be9b_xhdpi");
}
}
function showTag(name,link,srcImg){
var div=document.createElement("div");
div.className="tagtwo";
var img=document.createElement("img");
img.src=srcImg;
div.appendChild(img);
var p=document.createElement("div");
p.className="tagtwoname";
p.innerHTML=name;
div.appendChild(p);
var a=document.createElement("a");
a.href="index.html";
a.appendChild(div);
var tag2=document.getElementById("taglistview");
tag2.appendChild(a);
}
function slideshow(){
var slide0="slide0.jpeg";
var slide1={"link":"link","srcimg":"https://cf.shopee.vn/file/4d04f53b4eaec9259ec61bfffe3ae93f_xhdpi"};
var slide2={"link":"link","srcimg":"https://cf.shopee.vn/file/6747d13d79ee3f0a37f09f937416eb74_xhdpi"};
var slide3={"link":"link","srcimg":"https://cf.shopee.vn/file/713b65f78eea41b2651eda3ca7d7f597_xhdpi"};
var slide4={"link":"link","srcimg":"https://cf.shopee.vn/file/42bdd19bed4130fbae7c3bb9fc74514e_xhdpi"};
var slide5={"link":"link","srcimg":"https://cf.shopee.vn/file/6ca527122d8b5827f375f04e60b52487_xhdpi"};
var slide6={"link":"link","srcimg":"https://cf.shopee.vn/file/8677568cca4c10e94684dce4c5e94bbb_xhdpi"};
var indexSlide=0;
var arr=[slide1,slide2,slide3,slide4,slide5,slide6];
var slideImg=document.createElement("img");
slideImg.className="imgSlide";
demo.src=arr[arr.length-1].srcimg;
var slideDiv=document.getElementById("slideshow");
slideImg.src=slide0;
slideDiv.appendChild(slideImg);
setInterval(function(){
if(indexSlide==0){
slideImg.src=arr[indexSlide].srcimg;
slideDiv.appendChild(slideImg);
indexSlide=1;
}else{
indexSlide=indexSlide+1;
slideImg.src=arr[indexSlide].srcimg;
slideDiv.appendChild(slideImg);
}

if(indexSlide>4){indexSlide=0;}

},5000);
}



function loadProductToList(idList,product){
//
var link=product.id;
var noteleft="";
var noteright=product.sellStatus;
var srcUrl=product.srcImg;
var title=product.name;
var price=product.price;
var count=product.beforeCount-product.afterCount;
var ct="Đã bán "+count;
if(count>800){noteleft="yêu thích";}
if(count=0){noteleft="Bán hết";}
var location=product.location;
//
//if(title.length>22){title=title.slice(0,23)+"...";}
               //if(count.length>10){count=count.slice(0,12)+"...";}
               var a=document.createElement("a");
               a.href=link;
               var item=document.createElement("div");
               item.className="item";
               var itemChild1=document.createElement("div");
               itemChild1.className="noteleft";
               itemChild1.innerHTML=noteleft;
               item.appendChild(itemChild1);
               var itemChild2=document.createElement("div");
               itemChild2.className="noteright";
               itemChild2.innerHTML=noteright;
               item.appendChild(itemChild2);
               var itemChild3=document.createElement("img");
               itemChild3.src=srcUrl;
               item.appendChild(itemChild3);
               var itemChild4=document.createElement("textarea");
               itemChild4.className="title";
               itemChild4.rows="2";
               itemChild4.innerHTML=title;
               itemChild4.style.color="black";
               item.appendChild(itemChild4);
               var itemChild5=document.createElement("div");
               itemChild5.className="price";
               itemChild5.innerHTML=price;
               itemChild5.style.color="tomato";
               item.appendChild(itemChild5);
               var itemChild6=document.createElement("div");
               itemChild6.className="itemchild";
               var itemChild6_1=document.createElement("div");
               itemChild6_1.className="love";
               itemChild6_1.innerHTML="&#9825";
               itemChild6.appendChild(itemChild6_1);
               var itemChild6_2=document.createElement("div");
               itemChild6_2.className="rating";
               itemChild6_2.innerHTML="&#9734 &#9734 &#9734 &#9734 &#9734";
               itemChild6.appendChild(itemChild6_2);
               var itemChild6_3=document.createElement("div");
               itemChild6_3.className="count";
               itemChild6_3.innerHTML=ct;
               if(itemChild6_3.length>8){itemChild6_3.innerHTML="Đã bán "+ct.slice(0,8)+"...";}
               itemChild6.appendChild(itemChild6_3);
               item.appendChild(itemChild6);             
               var itemChild7=document.createElement("div");
               itemChild7.className="location";
               itemChild7.innerHTML=location;
               item.appendChild(itemChild7);
               a.appendChild(item);
               document.getElementById(idList).appendChild(a);
}
