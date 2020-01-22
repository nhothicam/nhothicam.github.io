function moverighttoleft(element){
element.style.top=0+"px";
element.style.left=pos+"px";
var width=window.innerWidth;
var pos=width;
var id=setInterval(function(){
if(pos<=0){
clearInterval(id);
element.style.left="0px";
}else{
element.style.top=0+"px";
element.style.left=pos+"px";
pos-=20;
}
},2);
}
function loadflashsale(){
var item1={"link":"","imgSrc":"https://cf.shopee.vn/file/efa2adff0356a22a7444a73163969b0f_tn","salecount":"55","price":"9000","saled":"2926"};
var item2={"link":"","imgSrc":"https://cf.shopee.vn/file/5da2f9540490da4a8bd6a70001b3ceae_tn","salecount":"25","price":"75000","saled":"676"};
var item3={"link":"","imgSrc":"https://cf.shopee.vn/file/1b10da812a6867376e6f553227df7971_tn","salecount":"42","price":"29000","saled":"735"};
var item4={"link":"","imgSrc":"https://cf.shopee.vn/file/00a5418122928af47ee1b779603013f6_tn","salecount":"85","price":"3000","saled":"4645"};
var item5={"link":"","imgSrc":"https://cf.shopee.vn/file/6b3cfb17ffd1339de509e5b9afa75aac_tn","salecount":"21","price":"79000","saled":"9000"};
var item6={"link":"","imgSrc":"https://cf.shopee.vn/file/2ae84ce236e2b94867497975ee8e6f5a_tn","salecount":"22","price":"39000","saled":"4002"};
var arr=[item1,item2,item3,item4,item5,item6];
var item7={"link":"","srcImg":"viewa.png","salecount":"","price":"","saled":""};
for(i=0;i<5;i++){
var link=arr[i].link;
var imgSrc=arr[i].imgSrc;
var salecount=arr[i].salecount+"%";
var price=arr[i].price;
var saled="Đã bán "+arr[i].saled+" cái";
flashsale(link,imgSrc,salecount,price,saled);
}
flashsale("","","",">>Xem tất cả","");
}
function flashsale(link,imgSrc,salecount,price,saled){
var flashsalecontent=document.createElement("div");
flashsalecontent.className="flashsale-content";
var div1=document.createElement("div");
var flashsalesalecount=document.createElement("div");
flashsalesalecount.className="flashsalesalecount";
flashsalesalecount.innerHTML=salecount;
div1.appendChild(flashsalesalecount);
var img=document.createElement("img");
img.src=imgSrc;
div1.appendChild(img);
flashsalecontent.appendChild(div1);
var flashsaleprice=document.createElement("div");
flashsaleprice.className="flashsaleprice";
flashsaleprice.innerHTML=price;
flashsalecontent.appendChild(flashsaleprice);
var flashsalesale=document.createElement("div");
flashsalesale.className="flashsalesale";
flashsalesale.innerHTML=saled;
flashsalecontent.appendChild(flashsalesale);
var flashsale=document.getElementById("flashsale");
flashsale.appendChild(flashsalecontent);
}



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
var item1={"name":"Deal gần bạn","link":"","srcImg":"https://cf.shopee.vn/file/63772af8c0d05ed456c972adcf5080d6_xhdpi"};
var item2={"name":"Freeship 50K","link":"","srcImg":"https://cf.shopee.vn/file/b32facc4bd5c5dacef483d803761be9b_xhdpi"};
var item3={"name":"Shoppe Mall","link":"","srcImg":"https://cf.shopee.vn/file/cae5d99a5cb6b2231e420b7b5fb6cec5_xhdpi"};
var item4={"name":"Shoppe Games","link":"","srcImg":"https://cf.shopee.vn/file/65bea09f53b52e4c24f273710e14dff5_xhdpi"};
var item5={"name":"Siêu thị điện tử","link":"","srcImg":"https://cf.shopee.vn/file/d508ca8f4faae04ef1980810592d400f_xhdpi"};
var item6={"name":"Vận may 1 đ","link":"","srcImg":"https://cf.shopee.vn/file/9c06085a8c01c95878902522e415bfbd_xhdpi"};
var item7={"name":"Săn xu mỗi ngày","link":"","srcImg":"https://cf.shopee.vn/file/cbcfbe088c7c6894eccb67806f0016fc_xhdpi"};
var item8={"name":"Mã giảm giá","link":"","srcImg":"https://cf.shopee.vn/file/2211c969451bb28708800222dafdeacc_xhdpi"};
var item9={"name":"Ưu đãi đối tác","link":"","srcImg":"https://cf.shopee.vn/file/d1ded0a1469e629349081248db6c7d7e_xhdpi"};
var item10={"name":"Nạp thẻ và dịch vụ","link":"","srcImg":"https://cf.shopee.vn/file/5586e1d2913db472c040b1b6d247fbd1_xhdpi"};
var item11={"name":"Deal sốc từ 1K","link":"","srcImg":"https://cf.shopee.vn/file/02d180c9859049d7eb32e530fcbaec0a_xhdpi"};
var item12={"name":"Hàng quốc tế","link":"","srcImg":"https://cf.shopee.vn/file/ae736dbc1b9aa95fa5594e5f40e49941_xhdpi"};
var item13={"name":"NewFood-bữa ăn 0 đ","link":"","srcImg":"https://cf.shopee.vn/file/f30fbbbedf21e92690950cc58b126d9b_xhdpi"};
var item14={"name":"Shoppe Mum's clup","link":"","srcImg":"https://cf.shopee.vn/file/1812313becdd164e35d2904b6a64b839_xhdpi"};
var item15={"name":"Siêu thị Shoppe Mart","link":"","srcImg":"https://cf.shopee.vn/file/daf199579f117cd015284eb7f69b796d_xhdpi"};
var item16={"name":"Miễn phí vận chuyển","link":"","srcImg":"https://cf.shopee.vn/file/398f0bc1aef54f81810de07074a3d4c3_xhdpi"};
var item17={"name":"Calebrity club","link":"","srcImg":"https://cf.shopee.vn/file/bce38ceaacb9eb6df97a4ffb1a244c3d_xhdpi"};
var arr=[item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17];
for(i=0;i<arr.length;i++){
var name=arr[i].name;
var link=arr[i].link;
var srcImg=arr[i].srcImg;
showTag(name,link,srcImg);
//showTag("Freeship 50K","https://cf.shopee.vn/file/b32facc4bd5c5dacef483d803761be9b_xhdpi","https://cf.shopee.vn/file/b32facc4bd5c5dacef483d803761be9b_xhdpi");
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
moverighttoleft(slideImg);
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
