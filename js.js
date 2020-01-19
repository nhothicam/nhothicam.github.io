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
if(title.length>22){title=title.slice(0,23)+"...";}
               if(count.length>10){count=count.slice(0,12)+"...";}
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
               var itemChild4=document.createElement("div");
               itemChild4.className="title";
               itemChild4.innerHTML=title;
               item.appendChild(itemChild4);
               var itemChild5=document.createElement("div");
               itemChild5.className="price";
               itemChild5.innerHTML=price;
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
