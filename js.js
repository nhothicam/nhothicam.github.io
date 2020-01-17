function loadlist(){
                   //var model1={link:"https://google.com",noteleft:"&#9734 Hot",noteright:"-0%",srcUrl:"https://cf.shopee.vn/file/23a1a71da7703209468a3d8e2fea36ab",title:"Áo thun cổ tròn",price:"200.000",selled:"12",location:"Hà Nội"};
                   //var model2={link:"https://google.com",noteleft:"&#9734 Hot",noteright:"-12%",srcUrl:"https://cf.shopee.vn/file/18451e229297a7713a33b39be10de4ab",title:"Đầm công chúa xòe Quảng Châu",price:"289.000",selled:"8",location:"Hà Nội"};
                   //var model3={link:"https://google.com",noteleft:"&#9734 Hot",noteright:"-18%",srcUrl:"https://cf.shopee.vn/file/fba1ddc9129295691204c1c7ffe56943",title:"Đầm voan",price:"350.000",selled:"21",location:"Hồ Chí Minh"};
                   //var model4={link:"https://google.com",noteleft:"&#9734 New",noteright:"-39%",srcUrl:"https://cf.shopee.vn/file/b9a14868241f5834613c2171d1c01eeb",title:"Váy nữ ngắn xòe",price:"200.000",selled:"10",location:"Hà Nội"};
                   //var model5={link:"https://google.com",noteleft:"&#9734 New",noteright:"-8%",srcUrl:"https://cf.shopee.vn/file/95949eac6cedb7d40bd8c18b7a8e7556",title:"Quần short jean nam co giãn đẹp",price:"198.000",selled:"12",location:"Hồ Chí Minh"};
                   //var model6={link:"https://google.com",noteleft:"&#9734 Hot",noteright:"-8%",srcUrl:"https://cf.shopee.vn/file/e016686beedeaf05da0b466f74758973",title:"Combo bé gái",price:"280.000",selled:"39",location:"Hà Nội"};
                   //var arr=[model1,model2,model3,model4,model5,model6];
                   var item1=new Product("cloth_1","Áo thun cổ tròn","Áo thun cổ tròn","250.000","12/1/2019","123","Trang phục nữ ","Áo","shop Be","-0%","Hà Nội","https://cf.shopee.vn/file/23a1a71da7703209468a3d8e2fea36ab");
                   var item2=new Product("cloth_2","Đầm công chúa xòe Quảng Châu","Đầm công chúa xòe Quảng Châu","280.000","12/1/2019","121","Trang phục nữ nữ","Áo","shop Be","-12%","Hà Nội","https://cf.shopee.vn/file/18451e229297a7713a33b39be10de4ab");
                   var item3=new Product("cloth_3","Đầm voan","Đầm voan","300.000","12/1/2019","20","Trang phục nữ","Áo","shop Be","-19%","Hà Nội","https://cf.shopee.vn/file/fba1ddc9129295691204c1c7ffe56943");
                   var item4=new Product("cloth_4","Váy nữ ngắn xòe","Váy nữ ngắn xòe","350.000","12/1/2019","130","Trang phục nam","Quần","shop Be","-39%","Hà Nội","https://cf.shopee.vn/file/b9a14868241f5834613c2171d1c01eeb");
                   var item5=new Product("cloth_5","Quần short jean nam co giãn đẹp","Quần short jean nam co giãn đẹp","289.000","12/1/2019","120","Trang phục nam","Quần","shop Be","-8%","Hà Nội","https://cf.shopee.vn/file/95949eac6cedb7d40bd8c18b7a8e7556");
                   var item6=new Product("cloth_6","Combo bé gái","Combo bé gái","290.000","12/1/2019","12","Trang phục nữ","Áo","shop Be","-12%","Hà Nội","https://cf.shopee.vn/file/e016686beedeaf05da0b466f74758973");
                   var arr=[item1,item2,item3,item4,item5,item6];
                   for(i=0;arr.length;i++)
                     {
                      list(arr[i].links,"yêu thích",arr[i].sellStatus,arr[i].srcImg,arr[i].name,arr[i].price,arr[i].count,arr[i].location);
                     }
                   }
function list(link,noteleft,noteright,srcUrl,title,price,count,location){
               if(title.length>10){title=title.slice(0,16)+"...";}
               if(count.length>2){}
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
               itemChild6_3.innerHTML="còn "+count;
               itemChild6.appendChild(itemChild6_3);
               item.appendChild(itemChild6);             
               var itemChild7=document.createElement("div");
               itemChild7.className="location";
               itemChild7.innerHTML=location;
               item.appendChild(itemChild7);
               a.appendChild(item);
               document.getElementById("listview").appendChild(a);
               }
