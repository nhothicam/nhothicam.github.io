function Product(id,name,detail,price,date,beforeCount,afterCount,bigTag,smallTag,idCompany,sellStatus,location,srcImg){
  this.id=id;
  this.name=name;
  this.detail=detail;
  this.price=price;
  this.date=date;
  this.beforeCount=beforeCount;
  this.afterCount=afterCount;
  this.bigTag=bigTag;
  this.smallTag=smallTag;
  this.idCompany=idCompany;
  this.sellStatus=sellStatus;
  this.location=location;
  this.srcImg=srcImg;
}
function BigTag(tag,detail,srcImg){
  this.tag=tag;
  this.detail=detail;
  this.srcImg=srcImg;
}
function SmallTag(bigTag,tag,detail,srcImg){
  this.bigTag=bigTag;
  this.tag=tag;
  this.detail=detail;
  this.srcImg=srcImg;
}
function Company(id,name,detail,links,address,srcImg){
  this.id=id;
  this.name=name;
  this.detail=detail;
  this.links=links;
  this.address=address;
  this.srcImg=srcImg;
}
function CompanyTag(bigTag,smallTag,idCompany,srcImg){
  this.bigTag=bigTag;
  this.smallTag=smallTag;
  this.idCompany=idCompany;
  this.srcImg=srcImg;
}
function addProduct(product){
  var id=product.id;
  var name=product.name;
  var detail=product.detail;
  var price=product.price;
  var date=product.date;
  var beforeCount=product.beforeCount;
  var afterCount=product.afterCount;
  var bigTag=product.bigTag;
  var smallTag=product.smallTag;
  var idCompany=product.idCompany;
  var sellStatus=product.sellStatus;
  var location=product.location;
  var srcImg=product.srcImg;
  var db=firebase.database();
  db.ref("product/"+id).set({id:id,name:name,detail:detail,price:price,date:date,beforeCount:beforeCount,afterCount:afterCount,bigTag:bigTag,smallTag:smallTag,idCompany:idCompany,sellStatus:sellStatus,location:location,srcImg:srcImg});
}
function addBigTag(bigTag){
  var tag=bigTag.tag;
  var detail=bigTag.detail;
  var srcImg=bigTag.srcImg;
  var db=firebase.database();
  db.ref("bigTag/"+tag).set({tag:tag,detail:detail,srcImg:srcImg});
}
function addSmallTag(smallTag){
  var bigTag=smallTag.bigTag;
  var tag=smallTag.tag.trim();
  var detail=smallTag.detail;
  var srcImg=smallTag.srcImg;
  var db=firebase.database();
  db.ref("smallTag/"+tag).set({bigTag:bigTag,tag:tag,detail:detail,srcImg:srcImg});
}
function addCompany(company){
  //
  var id=company.id;
  var name=company.name;
  var detail=company.detail;
  var links=company.links;
  var address=company.address;
  var srcImg=company.srcImg;
  var db=firebase.database();
  db.ref("company/"+id).set({id:id,name:name,detail:detail,links:links,address:address,srcImg:srcImg});
}
function addCompanyTag(companyTag){
//
  var bigTag=companyTag.bigTag;
  var smallTag=companyTag.smallTag;
  var idCompany=companyTag.idCompany;
  var srcImg=companyTag.srcImg;
  var db=firebase.database();
  db.ref("companyTag/"+bigTag+smallTag+idCompany).set({bigTag:bigTag,smallTag:smallTag,idCompany:idCompany,srcImg:srcImg});
}
function getAllProduct(){
var waitText=document.createElement("div");
var waitDiv=document.getElementById("listview");
waitDiv.appendChild(waitText);
//var arrs=[];
var w=true;
if(w){waitText.innerHTML="Loading...";}else{waitText.innerHTML="";}
var database=firebase.database();
var productRef=database.ref("product");
productRef.on("value",function(snapshot){
snapshot.forEach(function(childSnapshot){
var product=childSnapshot.val();
w=false;
//arrs.push(product);
//list("listview",product.id,"yêu thích",product.sellStatus,product.srcImg,product.name,product.price,product.afterCount,product.location);
loadProductToList("listview",product);
});

//load to html
if(w=false){waitText.innerHTML="Loading...";}else{waitText.innerHTML="";}
});
}
function getAllByBigTag(){}
function getAllBySmallTag(){}
function getAllByCompany(){}
function demo(){
                   var item1=new Product("cloth_1","Áo thun cổ tròn","Áo thun cổ tròn","250.000","12/1/2019","123","18","Trang phục nữ","Áo","shop Be","-0%","Hà Nội","https://cf.shopee.vn/file/23a1a71da7703209468a3d8e2fea36ab");
                   var item2=new Product("cloth_2","Đầm công chúa xòe Quảng Châu","Đầm công chúa xòe Quảng Châu","280.000","12/1/2019","124","121","Trang phục nữ nữ","Áo","shop Be","-12%","Hà Nội","https://cf.shopee.vn/file/18451e229297a7713a33b39be10de4ab");
                   var item3=new Product("cloth_3","Đầm voan","Đầm voan","300.000","12/1/2019","560","20","Trang phục nữ","Áo","shop Be","-19%","Hà Nội","https://cf.shopee.vn/file/fba1ddc9129295691204c1c7ffe56943");
                   var item4=new Product("cloth_4","Váy nữ ngắn xòe","Váy nữ ngắn xòe","350.000","12/1/2019","489","130","Trang phục nam","Quần","shop Be","-39%","Hà Nội","https://cf.shopee.vn/file/b9a14868241f5834613c2171d1c01eeb");
                   var item5=new Product("cloth_5","Quần short jean nam co giãn đẹp","Quần short jean nam co giãn đẹp","289.000","12/1/2019","590","120","Trang phục nam","Quần","shop Be","-8%","Hà Nội","https://cf.shopee.vn/file/95949eac6cedb7d40bd8c18b7a8e7556");
                   var item6=new Product("cloth_6","Combo bé gái","Combo bé gái","290.000","12/1/2019","45","12","Trang phục nữ","Áo","shop Be","-12%","Hà Nội","https://cf.shopee.vn/file/e016686beedeaf05da0b466f74758973");
                   var bigTag1=new BigTag("Thời trang nam","","https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn");
                   var bigTag2=new BigTag("Điện thoại và phụ kiện","","https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn");
                   var bigTag3=new BigTag("Thiết bị điện tử","","https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn");
                   var bigTag4=new BigTag("Máy tính và Laptop","","https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn");
                   var bigTag5=new BigTag("Máy ảnh và Máy quay phim","","https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn");
                   var bigTag6=new BigTag("Đồng hồ","","https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn");
                   var bigTag7=new BigTag("Giày dép nam","","https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn");
                   var bigTag8=new BigTag("Thiết bị điện gia dụng","","https://shopee.vn/?gclid=CjwKCAiAsIDxBRAsEiwAV76N80vYhP_b-9Q37g6V2SVFWe3faTOjjCquSq32MdwXi8afKeX-llUGxhoCMekQAvD_BwE");
                   var bigTag9=new BigTag("Thể thao và du lịch","","https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn");
                   var bigTag10=new BigTag("Ô tô-xe máy-xe đạp","","https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn");
                   var bigTag11=new BigTag("Đồ chơi","","https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn");
                   var bigTag12=new BigTag("Chăm sóc thú cưng","","https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn");
                   var bigTag13=new BigTag("Thời trang nữ","","https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn");
                   var bigTag14=new BigTag("Mẹ và bé","","https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn");
                   var bigTag15=new BigTag("Nhà cửa và đời sống","","https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn");
                   var bigTag16=new BigTag("Sức khỏe và sắc đẹp","","https://cf.shopee.vn/file/bba68b7dc2d664748dd075d500049d72_tn");
                   var bigTag17=new BigTag("Giày dép nữ","","https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn");
                   var bigTag18=new BigTag("Túi ví","","https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn");
                   var bigTag19=new BigTag("Phụ kiện thời trang","","https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn");
                   var bigTag20=new BigTag("Bách hóa Online","","https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn");
                   var bigTag21=new BigTag("Vouncher và dịch vụ","","https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn");
                   var bigTag22=new BigTag("Nhà sách Online","","https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn");
                   var bigTag23=new BigTag("Giặt giũ và chăm sóc nhà cửa","","https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn");
                   var bigTag24=new BigTag("Thời trang trẻ em","","https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn");
                   var bigTag25=new BigTag("Sản phẩm khác","","https://cf.shopee.vn/file/12039f0db7c3f025fb0c57b3490efad2_tn");
                   var smallTag1=new SmallTag("Thời trang nam","Áo thun","","https://cf.shopee.vn/file/ca37a77f47daf7d5435e6bca2c3ae626_tn");
                   var smallTag2=new SmallTag("Thời trang nam","Áo khoác và Vest","","https://cf.shopee.vn/file/6994faa596a56231391a99e0e5c9a041_tn");
                   var smallTag3=new SmallTag("Thời trang nam","Đồ bộ-Đồ mặc nhà","","https://cf.shopee.vn/file/c8ac08079df2ac1115df920f8dcd6fed_tn");
                   var smallTag4=new SmallTag("Thời trang nam","Quần","","https://cf.shopee.vn/file/fec1d0b00ed14a18bfa182402ee28860_tn");
                   var smallTag5=new SmallTag("Thời trang nam","Mắt kính","","https://cf.shopee.vn/file/fd5c311e26da418b25e03f6d8ebee300_tn");
                   var smallTag6=new SmallTag("Thời trang nam","Đồ trung niên","","https://cf.shopee.vn/file/0e51fc92c8b606ce169ec445ded07adc_tn");
                   var smallTag7=new SmallTag("Thời trang nam","Thắt lưng","","https://cf.shopee.vn/file/83fde006ff8d33ea91fcdc96cb816264_tn");
                   var smallTag8=new SmallTag("Thời trang nam","Áo sơ mi","","https://cf.shopee.vn/file/b8935c215fbebbfb95bbbd6d545a3ca6_tn");
                   var smallTag9=new SmallTag("Thời trang nam","Áo nỉ và Áo len","","https://cf.shopee.vn/file/2c0693e21e62f2e7e6b0e3e9934a0679_tn");
                   var smallTag10=new SmallTag("Thời trang nam","Đồ đôi","","https://cf.shopee.vn/file/2c99fb98ca15977fc6f2c080bd997db4_tn");
                   var smallTag11=new SmallTag("Thời trang nam","Ba lô-Túi-Ví","","https://cf.shopee.vn/file/dfe1d927c52ff584cc2309fbc5527521_tn");
                   var smallTag12=new SmallTag("Thời trang nam","Phụ kiện nam","","https://cf.shopee.vn/file/559e3da0cee05a9a9090fdd412b90d27_tn");
                   var smallTag13=new SmallTag("Thời trang nam","Trang sức nam","","https://cf.shopee.vn/file/1bbd362fc6411b546662d1159720d2dd_tn");
                   var smallTag14=new SmallTag("Thời trang nam","Đồ lót","","https://cf.shopee.vn/file/2e3140f2811a31f2144808892a55e209_tn");
                   var smallTag15=new SmallTag("Điện thoại và phụ kiện","Điện thoại","","https://cf.shopee.vn/file/f3a059066bef7a473f1713d8211d033a_tn");
                   var smallTag16=new SmallTag("Điện thoại và phụ kiện","Vỏ,bao và ốp lưng","","https://cf.shopee.vn/file/c1dd0d347c28d32ee4d3b636941019ab_tn");
                   var smallTag17=new SmallTag("Điện thoại và phụ kiện","Pin sạc dự phòng","","https://cf.shopee.vn/file/633594e39f233cf969a097635f87596c_tn");
                   var smallTag18=new SmallTag("Điện thoại và phụ kiện","Giá đỡ và kẹp","","https://cf.shopee.vn/file/1b40ef54e212fad55176c6b2c1930d00_tn");
                   var smallTag19=new SmallTag("Điện thoại và phụ kiện","Sim","","https://cf.shopee.vn/file/f158cf229d28dfca0c9404d7fd7f86e2_tn");
                   var smallTag20=new SmallTag("Điện thoại và phụ kiện","Máy tính bảng","","https://cf.shopee.vn/file/33231c44426334f6a32605fe1b949814_tn");
                   var smallTag21=new SmallTag("Điện thoại và phụ kiện","Miếng dán màn hình","","https://cf.shopee.vn/file/3c20160b90bfbd54170062832e6caa41_tn");
                   var smallTag22=new SmallTag("Điện thoại và phụ kiện","Pin,cáp và bộ sạc","","https://cf.shopee.vn/file/4d31a4001e750b1ea57bc551d49bbda9_tn");
                   var smallTag23=new SmallTag("Điện thoại và phụ kiện","Gậy chụp màn hình","","https://cf.shopee.vn/file/816cc2b331785d9ea428b51e4c4c8f05_tn");
                   var smallTag24=new SmallTag("Thiết bị điện tử","Thiết bị âm thanh","","https://cf.shopee.vn/file/8578781ca98e33f64ab31319f92ee68e_tn");
                   var smallTag25=new SmallTag("Thiết bị điện tử","Thiết bị đeo thông minh","","https://cf.shopee.vn/file/8b33ddc396623763cba34d5a6214ae41_tn");
                   var smallTag26=new SmallTag("Thiết bị điện tử","Tivi","","https://cf.shopee.vn/file/664338d5e5730291122b9e4298c10b32_tn");
                   var smallTag27=new SmallTag("Thiết bị điện tử","Tai nghe","","https://cf.shopee.vn/file/ae7d5123db9b1e76a922e14496f4a83a_tn");
                   var smallTag28=new SmallTag("Thiết bị điện tử","Android Tivi box","","https://cf.shopee.vn/file/eb02eb7800c7bfddabbca324f6ead95f_tn");
                   var smallTag29=new SmallTag("Thiết bị điện tử","Phụ kiện Tivi","","https://cf.shopee.vn/file/2e7cfe5256dde626190e3fecaf833f51_tn");
                   var smallTag30=new SmallTag("Thiết bị điện tử","Phụ kiện và thiết bị Game","","https://cf.shopee.vn/file/a9bc9cb650b37c885a2a08fff3a605dd_tn");
                   var smallTag31=new SmallTag("Máy tính và Laptop","Laptop","","https://cf.shopee.vn/file/b8f8d61a447f47dd68f7e41c2009dcb1_tn");
                   var smallTag32=new SmallTag("Máy tính và Laptop","Linh kiện máy tính","","https://cf.shopee.vn/file/7eadb76b02ec38ccff9fdf69506f02c9_tn");
                   var smallTag33=new SmallTag("Máy tính và Laptop","Thiết bị mạng","","https://cf.shopee.vn/file/8c21ccbac8144f8a4f1b2e57d2e2076d_tn");
                   var smallTag34=new SmallTag("Máy tính và Laptop","Máy in,máy scan và máy fax","","https://cf.shopee.vn/file/bad5bbf3e4645894ee2dd09b9a5e2e16_tn");
                   var smallTag35=new SmallTag("Máy tính và Laptop","Máy tính bàn","","https://cf.shopee.vn/file/bad5bbf3e4645894ee2dd09b9a5e2e16_tn");
                   var smallTag36=new SmallTag("Máy tính và Laptop","Chuột,bàn phím","","https://cf.shopee.vn/file/f0cc5671efb13507e48c2ea06430c45e_tn");
                   var smallTag37=new SmallTag("Máy tính và Laptop","USB và ổ cứng","","https://cf.shopee.vn/file/c1b4a8f86a210f0c8d88b8e76fd25c17_tn");
                   var smallTag38=new SmallTag("Máy tính và Laptop","Phần mềm","","https://cf.shopee.vn/file/81e9b24353d58bef9dda8bd8cf5202ce_tn");
                   var smallTag39=new SmallTag("Máy tính và Laptop","Audio, video và accessories","","https://cf.shopee.vn/file/f70a3e207716c72972990d562df90eff_tn");
                   var smallTag40=new SmallTag("Máy tính và Laptop","Phụ kiện máy tính khác","","https://cf.shopee.vn/file/1544120e6617f5ad231b02a4328e3778_tn");
                   var smallTag41=new SmallTag("Máy ảnh và Máy quay phim","Máy ảnh du lịch và chụp lấy liền","","https://cf.shopee.vn/file/56f0e97ac4b93266f1bc0a9c51c18062_tn");
                   var smallTag42=new SmallTag("Máy ảnh và Máy quay phim","Thẻ nhớ","","https://cf.shopee.vn/file/53a900a1f3eca606f7282717b3c34b3e_tn");
                   var smallTag43=new SmallTag("Máy ảnh và Máy quay phim","Camera giám sát và Webcam","","https://cf.shopee.vn/file/7124c044c5a2c7343c0696a3187a0bb8_tn");
                   var smallTag44=new SmallTag("Máy ảnh và Máy quay phim","Máy ảnh DSLR","","https://cf.shopee.vn/file/04875f6c0f01f46fe71941c3dd35c918_tn");
                   var smallTag45=new SmallTag("Máy ảnh và Máy quay phim","Máy ảnh không gương lật","","https://cf.shopee.vn/file/4d4d12cb569b8dfa4fdad3d236758816_tn");
                   var smallTag46=new SmallTag("Máy ảnh và Máy quay phim","Máy quay phim","","https://cf.shopee.vn/file/fcf7f9c45191b7fabe77914014257027_tn");
                   var smallTag47=new SmallTag("Máy ảnh và Máy quay phim","Phụ kiện máy ảnh","","https://cf.shopee.vn/file/299dbc56e3816f189665a05a0b14eb11_tn");
                   var smallTag48=new SmallTag("Đồng hồ","Đồng hồ nam dây thép","","https://cf.shopee.vn/file/de164604f301c92170aca54cff067025");
                   var smallTag49=new SmallTag("Đồng hồ","Đồng hồ nữ dây thép","","https://cf.shopee.vn/file/d64544dfa15aad99c30b3c9a4683518d");
                   var smallTag50=new SmallTag("Đồng hồ","Đồng hồ nam dây da","","https://cf.shopee.vn/file/7209bc6a410fe21498cd508e50ede64c");
                   var smallTag51=new SmallTag("Đồng hồ","Đồng hồ nữ dây da","","https://cf.shopee.vn/file/6f9cc601215d2778349b71b83922fef5");
                   var smallTag52=new SmallTag("Đồng hồ","Đồng hồ nam nữ thể thao","","https://cf.shopee.vn/file/259cf4a0e2385a922b8801d79131adc8");
                   var smallTag53=new SmallTag("Giày dép nam","Giày thể thao,Sneakers","","https://cf.shopee.vn/file/0b6d5f29787c39b8e5afe2afeee6a9da_tn");
                   var smallTag54=new SmallTag("Giày dép nam","Giày lười","","https://cf.shopee.vn/file/89f2774664f2bf51099f93806282705c_tn");
                   var smallTag55=new SmallTag("Giày dép nam","Giày tây","","https://cf.shopee.vn/file/1daeca0a52ff8f6f74099f9e5ac35587_tn");
                   var smallTag56=new SmallTag("Giày dép nam","Xăng-đan","","https://cf.shopee.vn/file/92f37d4a1c06bb6d53ceedfce49777de_tn");
                   var smallTag57=new SmallTag("Giày dép nam","Dép","","https://cf.shopee.vn/file/1a90acbad52eda2c160187eeafc04c21_tn");
                   var smallTag58=new SmallTag("Giày dép nam","Giày Unisex","","https://cf.shopee.vn/file/27a20c4bf8cf45254b60ec62a99a9f3c_tn");
                   var smallTag59=new SmallTag("Giày dép nam","Phụ kiện giày dép","","https://cf.shopee.vn/file/d15bfe3ce97858d9959c10856ef59de1_tn");
                   var smallTag60=new SmallTag("Thiết bị điện gia dụng","Đồ gia dụng nhà bếp","","https://cf.shopee.vn/file/255236bb3234b815ddd84e46506afc98_tn");
                   var smallTag61=new SmallTag("Thiết bị điện gia dụng","Quạt và máy nóng lạnh","","https://cf.shopee.vn/file/2e5fc241fa6fcc8d7d703bf3c94c8f8c_tn");
                   var smallTag62=new SmallTag("Thiết bị điện gia dụng","Thiết bị chăm sóc quần áo","","https://cf.shopee.vn/file/b9dc17a862a6d8142e356a0900041043_tn");
                   var smallTag63=new SmallTag("Thiết bị điện gia dụng","Máy hút bụi và thiết bị làm sạch","","https://cf.shopee.vn/file/f5eb0975cf6760cf9abb9b53b2643862_tn");
                   var smallTag64=new SmallTag("Thiết bị điện gia dụng","Đồ gia dụng lớn","","https://cf.shopee.vn/file/eeb7bd0fd9bbd3b666de236d8f942f72_tn");
                   var smallTag65=new SmallTag("Thiết bị điện gia dụng","Khác","","https://cf.shopee.vn/file/f2cfcc98551ccc875f33fd064203d4b9_tn");
                   var smallTag66=new SmallTag("Thể thao và du lịch","Trang phục thể thao","","https://cf.shopee.vn/file/6dfe61980781ebcb7cf7c05dc8f349e7_tn");
                   var smallTag67=new SmallTag("Thể thao và du lịch","Phụ kiện thể thao","","https://cf.shopee.vn/file/f899115604ed283b7bf30064a4bb686e_tn");
                   var smallTag68=new SmallTag("Thể thao và du lịch","Thể thao ngoài trời","","https://cf.shopee.vn/file/6efb544655b557ab3d90ffb067ec86a4_tn");
                   var smallTag69=new SmallTag("Thể thao và du lịch","Thể thao dưới nước","","https://cf.shopee.vn/file/e0bf1ef2b707cd1aeb9e69c26b0dd6c4_tn");
                   var smallTag70=new SmallTag("Thể thao và du lịch","Vali,hành lí","","https://cf.shopee.vn/file/d2155751bc5834241da44ce150330b74_tn");
                   var smallTag71=new SmallTag("Thể thao và du lịch","Giày thể thao","","https://cf.shopee.vn/file/756f7bde558180b9167fa13aa3e09ac3_tn");
                   var smallTag72=new SmallTag("Thể thao và du lịch","Thể thao và thể hình","","https://cf.shopee.vn/file/14465fb2fd3eb5cb87483a48960c0785_tn");
                   var smallTag73=new SmallTag("Thể thao và du lịch","Indoor sports","","https://cf.shopee.vn/file/6c770a010b0d8062324881529b2f9da8_tn");
                   var smallTag74=new SmallTag("Thể thao và du lịch","Các môn thể thao khác","","https://cf.shopee.vn/file/99468acd6e5a59ed73f6e0263e8e97c1_tn");
                   var smallTag75=new SmallTag("Thể thao và du lịch","Hoạt động dã ngoại","","https://cf.shopee.vn/file/bbf5545a9243672aa6393e6062278226_tn");
                   var smallTag76=new SmallTag("Thể thao và du lịch","Ba lô,túi","","https://cf.shopee.vn/file/5fcf7735ab40a9509f7498c9abb90e5f_tn");
                   var smallTag77=new SmallTag("Thể thao và du lịch","Khác","","https://cf.shopee.vn/file/75727deb0641f4cc68f909307f9846a6_tn");
                   var smallTag78=new SmallTag("Ô tô-xe máy-xe đạp","Mũ bảo hiểm chất lượng","","https://cf.shopee.vn/file/0dd5b64f96d52d9fe743dca0e81c44b9");
                   var smallTag79=new SmallTag("Ô tô-xe máy-xe đạp","Phụ kiện xe máy","","https://cf.shopee.vn/file/db9c46eb82fdfd84c569cf9019eed905");
                   var smallTag80=new SmallTag("Ô tô-xe máy-xe đạp","Phụ tùng xe máy","","https://cf.shopee.vn/file/31aa8a23ea352e1a519ed31b25e0e562");
                   var smallTag81=new SmallTag("Ô tô-xe máy-xe đạp","Phụ kiện đồ chơi ô tô","","https://cf.shopee.vn/file/2964259b4d38eedecb5a684c7b2bb09b");
                   var smallTag82=new SmallTag("Ô tô-xe máy-xe đạp","Phụ kiện sửa chữa","","https://cf.shopee.vn/file/179a3493a31040300c5f257ca7e65fc3");
                   var smallTag83=new SmallTag("Ô tô-xe máy-xe đạp","Chăm sóc bảo dưỡng xe","","https://cf.shopee.vn/file/90cf9bea939ec47a25185a1f52ab71ef");
                   var smallTag84=new SmallTag("Ô tô-xe máy-xe đạp","Phương tiện di chuyển","","https://cf.shopee.vn/file/bf098ee1fb1b0cc736c3917405672e77");
                   var smallTag85=new SmallTag("Đồ chơi","Đồ chơi cho trẻ sơ sinh","","https://cf.shopee.vn/file/08ba5ad8501a87407bde788faf6091fb_tn");
                   var smallTag86=new SmallTag("Đồ chơi","Đồ chơi giáo dục","","https://cf.shopee.vn/file/814042d340fc02b9ceb890527cdd7d9f_tn");
                   var smallTag87=new SmallTag("Đồ chơi","Đồ chơi vận động vàngoài trời","","https://cf.shopee.vn/file/97b369c886d6f26fbcc5452a85446617_tn");
                   var smallTag88=new SmallTag("Đồ chơi","Búp bê và đồ chơi nhồi bông","","https://cf.shopee.vn/file/4aa117d58c40cb4dd440bd6e13333fce_tn");
                   var smallTag89=new SmallTag("Đồ chơi","Đồ chơi mô hình","","https://cf.shopee.vn/file/b3a0681eea56f3e5b6e07dd6aec30b4d_tn");
                   var smallTag90=new SmallTag("Đồ chơi","Đồ chơi giải trí","","https://cf.shopee.vn/file/b8f4da99cd24cc18ca5104640c5be378_tn");
                   var smallTag91=new SmallTag("Chăm sóc thú cưng","Chó","","https://cf.shopee.vn/file/1a8870615f8c0bfbd8dd87f6a5787793_tn");
                   var smallTag92=new SmallTag("Chăm sóc thú cưng","Mèo","","https://cf.shopee.vn/file/0961f4873af4eab7822f0ea0c1d5be71_tn");
                   var smallTag93=new SmallTag("Chăm sóc thú cưng","Fish","","https://cf.shopee.vn/file/e712ca2b1bf6dd3a58213a1115a05d78_tn");
                   var smallTag94=new SmallTag("Chăm sóc thú cưng","Chim","","https://cf.shopee.vn/file/62f5690350b7ba2198a4e40efb2e38aa_tn");
                   var smallTag95=new SmallTag("Chăm sóc thú cưng","Hamsters","","https://cf.shopee.vn/file/db73d3ed630c4057e91cf0d65f63227f_tn");
                   var smallTag96=new SmallTag("Chăm sóc thú cưng","Khác","","https://cf.shopee.vn/file/ba309efba01d0503077c55f712b0e81e_tn");
                   var smallTag97=new SmallTag("Thời trang nữ","Áo","","https://cf.shopee.vn/file/1d0727bc01f390a69d05ca8f04c7338b_tn");
                   var smallTag98=new SmallTag("Thời trang nữ","Chân váy","","https://cf.shopee.vn/file/e2eb308e569cf474b10dae7865036bc7_tn");
                   var smallTag99=new SmallTag("Thời trang nữ","Set trang phục và Jumpsuit","","https://cf.shopee.vn/file/087f6be387be9cd20bdf38fc4a6c27c0_tn");
                   var smallTag100=new SmallTag("Thời trang nữ","Đồ lót,đồ ngủ và đồ mặc nhà","","https://cf.shopee.vn/file/95c199f9c80e3a88ddd93a1129f01902_tn");
                   var smallTag101=new SmallTag("Thời trang nữ","Trang phục thể thao","","https://cf.shopee.vn/file/f7e5a3c2e770b44d21cf2be91aabb510_tn");
                   var smallTag102=new SmallTag("Thời trang nữ","Thời trang trung niên","","https://cf.shopee.vn/file/8ad0ed694cef01c846d5506c2347697a_tn");
                   var smallTag103=new SmallTag("Thời trang nữ","Trang phục đông","","https://cf.shopee.vn/file/06e03ad46af3cf6d7de2149c2296d499_tn");
                   var smallTag104=new SmallTag("Thời trang nữ","Đầm","","https://cf.shopee.vn/file/d8894e981bfe4e47e7791eef83b27cd3_tn");
                   var smallTag105=new SmallTag("Thời trang nữ","Quần","https://cf.shopee.vn/file/67b0f52a4a9146d954d668783c383773_tn","");
                   var smallTag106=new SmallTag("Thời trang nữ","Đồ đôi","","https://cf.shopee.vn/file/88760024bd2a61cf7b9117df8df302ce_tn");
                   var smallTag107=new SmallTag("Thời trang nữ","Đồ bơi","","https://cf.shopee.vn/file/c56162ac0e0d54df817493e8aa193ad3_tn");
                   var smallTag108=new SmallTag("Thời trang nữ","Phụ kiện may mặc","","https://cf.shopee.vn/file/ee23a6de89e76ff6b9d903ddf1a72f78_tn");
                   var smallTag109=new SmallTag("Thời trang nữ","Áo khoác và Áo vest","https://cf.shopee.vn/file/83e90a5fe8b99dcb4f823d65e53ede14_tn","");
                   var smallTag110=new SmallTag("Thời trang nữ","Thời trang bầu và sau sinh","","https://cf.shopee.vn/file/e52c1e3ee1d69919391b73d714e54f8a_tn");
                   var smallTag111=new SmallTag("Mẹ và bé","Tã và bỉm","","https://cf.shopee.vn/file/af01c130604395a57645f92664c803a6_tn");
                   var smallTag112=new SmallTag("Mẹ và bé","Đồ dùng cho bé","","https://cf.shopee.vn/file/d16019a745293d67210dcba5cd04b119_tn");
                   var smallTag113=new SmallTag("Mẹ và bé","Ghế,nôi,cũi, xe đẩy và địu","","https://cf.shopee.vn/file/74ea271d307ef93714e8025cbc0f73ef_tn");
                   var smallTag114=new SmallTag("Mẹ và bé","Sữa công thức 0-24 tháng tuổi","","https://cf.shopee.vn/file/3285e9abda5c2e3ef44e1a3bc35da3e7_tn");
                   var smallTag115=new SmallTag("Mẹ và bé","Sữa công thức trên 24 tháng tuổi","","https://cf.shopee.vn/file/6dd5d73faf39ce445617dbf787f9cef7_tn");
                   var smallTag116=new SmallTag("Mẹ và bé","Vitamin,thực phẩm bổ sung","","https://cf.shopee.vn/file/a52bdeb1d7ef9a2fa178c7505d8d35c3_tn");
                   var smallTag117=new SmallTag("Mẹ và bé","Vitamin và đồ dùng cho mẹ","","https://cf.shopee.vn/file/13523ff7951b36028c36b1620e0e9dfc_tn");
                   var smallTag118=new SmallTag("Mẹ và bé","Thực phẩm bổ sung cho trẻ sơ sinh","","https://cf.shopee.vn/file/16cab8c2b8c21adf014be37b61f3f7c1_tn");
                   var smallTag119=new SmallTag("Mẹ và bé","Thực phẩm cho bé từ 6 tháng","","https://cf.shopee.vn/file/fb5b8dd174835bd962ceee56cbf9ce6b_tn");
                   var smallTag120=new SmallTag("Nhà cửa và đời sống","Dụng cụ và thiết bị tiện ích","","https://cf.shopee.vn/file/835da8cfc489de69c8f9ebac0fb913cd_tn");
                   var smallTag121=new SmallTag("Nhà cửa và đời sống","Chăn,ga,gối và nệm","","https://cf.shopee.vn/file/3450c178312894f5412b8a463f5fddcd_tn");
                   var smallTag122=new SmallTag("Nhà cửa và đời sống","Trang trí nhà cửa","","https://cf.shopee.vn/file/33dae03eba8ab7bc404aef5224ec4401_tn");
                   var smallTag123=new SmallTag("Nhà cửa và đời sống","Đồ nội thất","","https://cf.shopee.vn/file/fa93435d36815c188b45bbfedee072a6_tn");
                   var smallTag124=new SmallTag("Nhà cửa và đời sống","Ngoài trời và sân vườn","","https://cf.shopee.vn/file/87364355587144e4f04fbf79e17adfd2_tn");
                   var smallTag125=new SmallTag("Nhà cửa và đời sống","Đồ dùng nhà bếp và phòng ăn","","https://cf.shopee.vn/file/7ce1c06001464458b014a452e347a142_tn");
                   var smallTag126=new SmallTag("Nhà cửa và đời sống","Tủ dựng và hộp lưu trữ","","https://cf.shopee.vn/file/893aa853acd2cabe340b8d4ddb393d4d_tn");
                   var smallTag127=new SmallTag("Nhà cửa và đời sống","Đồ dùng phòng tắm","","https://cf.shopee.vn/file/5f2fadbc70248b4be776f5ad60b2f785_tn");
                   var smallTag128=new SmallTag("Nhà cửa và đời sống","Đèn","","https://cf.shopee.vn/file/6ab5c9bcd47b6ba91cb29832de86892b_tn");
                   var smallTag129=new SmallTag("Nhà cửa và đời sống","Dụng cụ cầm tay","","https://cf.shopee.vn/file/cffce3205dbdb0e6150ee0a258e348d4_tn");
                   var smallTag130=new SmallTag("Sức khỏe và sắc đẹp","Chăm sóc da","","https://cf.shopee.vn/file/b92ada1c3281de26f8f3fc238328476b_tn");
                   var smallTag131=new SmallTag("Sức khỏe và sắc đẹp","Trang điểm da","","https://cf.shopee.vn/file/c76981d4a1139ee522ab6f5cb10876fc_tn");
                   var smallTag132=new SmallTag("Sức khỏe và sắc đẹp","Mỹ phẩm nam","","https://cf.shopee.vn/file/22f8c626cfc18915165b4498fb2b164d_tn");
                   var smallTag133=new SmallTag("Sức khỏe và sắc đẹp","Chăm sóc tóc","","https://cf.shopee.vn/file/268167d1216442ff535527650dc5067b_tn");
                   var smallTag134=new SmallTag("Sức khỏe và sắc đẹp","Máy massage và thiết bị y tế","","https://cf.shopee.vn/file/78a3dbc8021a0e5edea0c99c69f8b0d2_tn");
                   var smallTag135=new SmallTag("Sức khỏe và sắc đẹp","Vệ sinh phụ nữ và hỗ trợ tình dục","","https://cf.shopee.vn/file/a4ba7cdc0991047978905eb83163431b_tn");
                   var smallTag136=new SmallTag("Sức khỏe và sắc đẹp","Vitamin và thực phẩm chức năng","","https://cf.shopee.vn/file/0520189763cc2b503c27ecdd146e8faf_tn");
                   var smallTag137=new SmallTag("Sức khỏe và sắc đẹp","Son và chăm sóc môi","","https://cf.shopee.vn/file/3d8e18de1cb8057620b825dbd1f59338_tn");
                   var smallTag138=new SmallTag("Sức khỏe và sắc đẹp","Trang điểm mắt","","https://cf.shopee.vn/file/89117558967cffc270ab0a56f5da9269_tn");
                   var smallTag139=new SmallTag("Sức khỏe và sắc đẹp","Tắm và chăm sóc cơ thể","","https://cf.shopee.vn/file/b04a84b96ee5f0bb95f9d94d4b2da35f_tn");
                   var smallTag140=new SmallTag("Sức khỏe và sắc đẹp","Chăm sóc răng miệng","","https://cf.shopee.vn/file/69f45fe09e848143d642c586694cab7b_tn");
                   var smallTag141=new SmallTag("Sức khỏe và sắc đẹp","Dụng cụ làm đẹp","","https://cf.shopee.vn/file/ede568705b5a7f5b94a2f5a244637c0c_tn");
                   var smallTag142=new SmallTag("Sức khỏe và sắc đẹp","Nước hoa","","https://cf.shopee.vn/file/019695357d4edca7ad272e11f8f23de2_tn");
                   var smallTag143=new SmallTag("Sức khỏe và sắc đẹp","Hóa mỹ phẩm và khác","","https://cf.shopee.vn/file/16476f55c799a9286e378d93b3b4d982_tn");
                   var smallTag144=new SmallTag("Giày dép nữ","Giày cao gót","","https://cf.shopee.vn/file/1dbf482bb2d31fd0c0510f1fab151802_tn");
                   var smallTag145=new SmallTag("Giày dép nữ","Sandal","","https://cf.shopee.vn/file/64b1425ae2abacb599fb0de4ac6855f1_tn");
                   var smallTag146=new SmallTag("Giày dép nữ","Bốt","","https://cf.shopee.vn/file/58da1dd35c2a95aa7213fb7e4f04fe7e_tn");
                   var smallTag147=new SmallTag("Giày dép nữ","Giày sneaker và giày thể thao","","https://cf.shopee.vn/file/1d211a9931940ddca1c34c1785cbec79_tn");
                   var smallTag148=new SmallTag("Giày dép nữ","Giày đế bằng","","https://cf.shopee.vn/file/65210acc3735020fa160627ab200f930_tn");
                   var smallTag149=new SmallTag("Giày dép nữ","Giày cao gót,giày đế xuồng","","https://cf.shopee.vn/file/c6baca30584dc77772b77d5767187804_tn");
                   var smallTag150=new SmallTag("Giày dép nữ","Guốc,dép nữ","","https://cf.shopee.vn/file/ed2bbda5400477c1d2c8c48144893ff8_tn");
                   var smallTag151=new SmallTag("Giày dép nữ","Phụ kiện giày","","https://cf.shopee.vn/file/7b89c1edf2e5e81b15107484fadf7986_tn");
                   var smallTag152=new SmallTag("Túi ví","Túi đi học","","https://cf.shopee.vn/file/7554a41b42d73827337b0a68ce0f2fdd");
                   var smallTag153=new SmallTag("Túi ví","Túi đi làm","","https://cf.shopee.vn/file/9cf1aea48a606bf172ab5929d586d58c");
                   var smallTag154=new SmallTag("Túi ví","Túi đi chơi","","https://cf.shopee.vn/file/a3b991619579ce5120183db1c1748c5f");
                   var smallTag155=new SmallTag("Túi ví","Túi dự tiệc","","https://cf.shopee.vn/file/a27f5be6fd9310c61eb2713abfce65fb");
                   var smallTag156=new SmallTag("Túi ví","Túi đi biển","","https://cf.shopee.vn/file/ac31860a904e30745f2a44a140ed84c5");
                   var smallTag157=new SmallTag("Phụ kiện thời trang","Trang sức","","https://cf.shopee.vn/file/e9ee713269a0f17696840108eaf539c9_tn");
                   var smallTag158=new SmallTag("Phụ kiện thời trang","Nón và dù","","https://cf.shopee.vn/file/66ee9271fb579d33ccade1cc1fac77dc_tn");
                   var smallTag159=new SmallTag("Phụ kiện thời trang","Phụ kiện tóc","","https://cf.shopee.vn/file/ac073529880ee2735871d6d54132e286_tn");
                   var smallTag160=new SmallTag("Phụ kiện thời trang","Hình xăm","","https://cf.shopee.vn/file/2f692b02be0bb09ec54b61dec1eba987_tn");
                   var smallTag161=new SmallTag("Phụ kiện thời trang","Khẩu trang","","https://cf.shopee.vn/file/067245e70edca0aafafe9b221208890b_tn");
                   var smallTag162=new SmallTag("Phụ kiện thời trang","Mắt kính","","https://cf.shopee.vn/file/20fae682a5e1beec5563e5cdf2d11ff6_tn");
                   var smallTag163=new SmallTag("Phụ kiện thời trang","Khăn,tất và găng tay","","https://cf.shopee.vn/file/1eb1a781f5662a1419b4a96a8f79e59e_tn");
                   var smallTag164=new SmallTag("Phụ kiện thời trang","Dây lưng","","https://cf.shopee.vn/file/7d4d80ab320b21129ab9df8d3b057042_tn");
                   var smallTag165=new SmallTag("Phụ kiện thời trang","Phụ kiện cưới","","https://cf.shopee.vn/file/5c0b059cb3a756618155374b0cf4eabc_tn");
                   var smallTag166=new SmallTag("Bách hóa Online","Ăn vặt và bánh kẹo","","https://cf.shopee.vn/file/00d3e0352876b2494494b1b3d65fbffc_tn");
                   var smallTag167=new SmallTag("Bách hóa Online","Đồ hộp và đóng gói","","https://cf.shopee.vn/file/95f0feb7514549a150901778fa9ab97d_tn");
                   var smallTag168=new SmallTag("Bách hóa Online","Đậu và hạt","","https://cf.shopee.vn/file/a22d999c266474b45216b617c0a05c00_tn");
                   var smallTag169=new SmallTag("Bách hóa Online","Quà biếu","","https://cf.shopee.vn/file/e1582ba08e69f516b4e85d29a3385dd6_tn");
                   var smallTag170=new SmallTag("Bách hóa Online","Đồ uống","","https://cf.shopee.vn/file/bb50f8f7257b8f618dd40ef18c18a572_tn");
                   var smallTag171=new SmallTag("Bách hóa Online","Nấu ăn và làm bánh","","https://cf.shopee.vn/file/c7981293d90773fbcb626aacff874a9a_tn");
                   var smallTag172=new SmallTag("Bách hóa Online","Đặc sản Việt","","https://cf.shopee.vn/file/a5d099ffcd34d0a33bffd7ed91a79acf_tn");
                   var smallTag173=new SmallTag("Bách hóa Online","Sữa","","https://cf.shopee.vn/file/a22d999c266474b45216b617c0a05c00_tn");
                   var smallTag174=new SmallTag("Vouncher và dịch vụ","Nhà hàng-ăn uống","","https://cf.shopee.vn/file/21dac028eca4f758f7392cb2ff1bd640_tn");
                   var smallTag175=new SmallTag("Vouncher và dịch vụ","Sức khỏe-làm đẹp","","https://cf.shopee.vn/file/b6bdcba5dc9c8f321d88d67d33297cbd_tn");
                   var smallTag176=new SmallTag("Vouncher và dịch vụ","Khóa học","","https://cf.shopee.vn/file/70964fbadd6bdaa8a3f6734b1c7f88c8_tn");
                   var smallTag177=new SmallTag("Vouncher và dịch vụ","Mã quà tặng","","https://cf.shopee.vn/file/5d3775a61f73fe70a1e1fef06c3fc9dc_tn");
                   var smallTag178=new SmallTag("Vouncher và dịch vụ","Du lịch-khách sạn","","https://cf.shopee.vn/file/926f6ce1718c0266be3086749a22713f_tn");
                   var smallTag179=new SmallTag("Vouncher và dịch vụ","Sự kiện-giải trí","","https://cf.shopee.vn/file/ec87989cd56247a2da7bca52a68adc03_tn");
                   var smallTag180=new SmallTag("Vouncher và dịch vụ","Nạp tiền tài khoản","","https://cf.shopee.vn/file/5d3775a61f73fe70a1e1fef06c3fc9dc_tn");
                   var smallTag181=new SmallTag("Vouncher và dịch vụ","Shopee Offical","","https://cf.shopee.vn/file/5d3775a61f73fe70a1e1fef06c3fc9dc_tn");
                   var smallTag182=new SmallTag("Nhà sách Online","Sách Tiếng Việt","","https://cf.shopee.vn/file/44edff1248863960795428c1133d2724_tn");
                   var smallTag183=new SmallTag("Nhà sách Online","Sách Ngoại ngữ","","https://cf.shopee.vn/file/860b9b2eec7b387ab82a67a33cbeec4a_tn");
                   var smallTag184=new SmallTag("Nhà sách Online","Văn phòng phẩm","","https://cf.shopee.vn/file/331253713f54b7a37561f233a62d729a_tn");
                   var smallTag185=new SmallTag("Nhà sách Online","Flashcards","","https://cf.shopee.vn/file/f8d2599e3c4fe2cffdc7be00a629fe95_tn");
                   var smallTag186=new SmallTag("Nhà sách Online","Nhạc cụ","","https://cf.shopee.vn/file/04796bb42f76899bfcdf470e5a432ca0_tn");
                   var smallTag187=new SmallTag("Nhà sách Online","Quà lưu niệm","","https://cf.shopee.vn/file/c5ee94357c6ea45b0265a9fe677a9a23_tn");
                   var smallTag188=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Giặt giũ","","https://cf.shopee.vn/file/8066266764a538c4eebfa1d924e07b1e_tn");
                   var smallTag189=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Vệ sinh nhà cửa","","https://cf.shopee.vn/file/844f87639de54e6f235031826a234935_tn");
                   var smallTag190=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Dụng cụ vệ sinh","","https://cf.shopee.vn/file/0e4fbd79b3bdef0eb7f42961ce58d419_tn");
                   var smallTag191=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Thuốc diệt trùng","","https://cf.shopee.vn/file/7bb12cdf49b4bbabaf3d42d7801338b6_tn");
                   var smallTag192=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Bao bì,túi đựng rác","","https://cf.shopee.vn/file/7c90fa512db64ae74a510bbb7847ff26_tn");
                   var smallTag193=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Giấy vệ sinh,khăn giấy","","https://cf.shopee.vn/file/e440d6dd62f702eed5ba6a1434be31f8_tn");
                   var smallTag194=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Vệ sinh bát đũa","","https://cf.shopee.vn/file/4bde6509676840ede02238387d53a176_tn");
                   var smallTag195=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Chất khử mùi,làm thơm","","https://cf.shopee.vn/file/eb1321e2021989715c2ef2e3efe85958_tn");
                   var smallTag196=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Túi,màn bọc thực phẩm","","https://cf.shopee.vn/file/5823f8ba5821191d08edf789a0196553_tn");
                   var smallTag197=new SmallTag("Giặt giũ và chăm sóc nhà cửa","Khác","","https://cf.shopee.vn/file/1fd8934a71f7ae2731b05109716e71bc_tn");
                   var smallTag198=new SmallTag("Thời trang trẻ em","Bé gái 5-14 tuổi","","https://cf.shopee.vn/file/c70d11ffd59e6bd6ebf68eaab1860c25_tn");
                   var smallTag199=new SmallTag("Thời trang trẻ em","Bé gái 3 tháng-4 tuổi","","https://cf.shopee.vn/file/c4d084076b0b6f70a12e835d31ac4d5b_tn");
                   var smallTag200=new SmallTag("Thời trang trẻ em","Sơ sinh 0-12 tháng","","https://cf.shopee.vn/file/e2c65e6cc71967fb8b8ef1be2da5f64f_tn");
                   var smallTag201=new SmallTag("Thời trang trẻ em","Giày dép","","https://cf.shopee.vn/file/ae6cb68c245910362e2059e8bc43c2cd_tn");
                   var smallTag202=new SmallTag("Thời trang trẻ em","Bé trai 5-14 tuổi","","https://cf.shopee.vn/file/c40dd62f5e85f8fe464c562df9a50963_tn");
                   var smallTag203=new SmallTag("Thời trang trẻ em","Bé trai 3-4 tháng tuổi","","https://cf.shopee.vn/file/8d68db50ae3cd237080ecf768030edc8_tn");
                   var smallTag204=new SmallTag("Thời trang trẻ em","Phụ kiện","","https://cf.shopee.vn/file/6d86515dc3bddbd402c2de9aeb6f88df_tn");
                   var smallTag205=new SmallTag("Thời trang trẻ em","Khác","","https://cf.shopee.vn/file/a8f46649dc1c339bdbe90d8696d1fc1f_tn");
                   var smallTag206=new SmallTag("Sản phẩm khác","Khác","","https://cf.shopee.vn/file/12039f0db7c3f025fb0c57b3490efad2_tn");
                   
                   
var bigTagArr=[bigTag1,bigTag2,bigTag3,bigTag4,bigTag5,bigTag6,bigTag7,bigTag8,bigTag9,bigTag10,bigTag11,bigTag12,bigTag13,bigTag14,bigTag15,bigTag16,bigTag17,bigTag18,bigTag19,bigTag20,bigTag21,bigTag22,bigTag23,bigTag24,bigTag25];
var smallTagArr=[smallTag1,smallTag2,smallTag3,smallTag4,smallTag5,smallTag6,smallTag7,smallTag8,smallTag9,smallTag10,smallTag11,smallTag12,smallTag13,smallTag14,smallTag15,smallTag16,smallTag17,smallTag18,smallTag19,smallTag20,smallTag21,smallTag22,smallTag23,smallTag24,smallTag25,smallTag26,smallTag27,smallTag28,smallTag29,smallTag30,smallTag31,smallTag32,smallTag33,smallTag34,smallTag35,smallTag36,smallTag37,smallTag38,smallTag39,smallTag40,smallTag41,smallTag42,smallTag43,smallTag44,smallTag45,smallTag46,smallTag47,smallTag48,smallTag49,smallTag50,smallTag51,smallTag52,smallTag53,smallTag54,smallTag55,smallTag56,smallTag57,smallTag58,smallTag59,smallTag60,smallTag61,smallTag62,smallTag63,smallTag64,smallTag65,smallTag66,smallTag67,smallTag68,smallTag69,smallTag70,smallTag71,smallTag72,smallTag73,smallTag74,smallTag75,smallTag76,smallTag77,smallTag78,smallTag79,smallTag80,smallTag81,smallTag82,smallTag83,smallTag84,smallTag85,smallTag86,smallTag87,smallTag88,smallTag89,smallTag90,smallTag91,smallTag92,smallTag93,smallTag94,smallTag95,smallTag96,smallTag97,smallTag98,smallTag99,smallTag100,smallTag101,smallTag102,smallTag103,smallTag104,smallTag105,smallTag106,smallTag107,smallTag108,smallTag109,smallTag110,smallTag111,smallTag112,smallTag113,smallTag114,smallTag115,smallTag116,smallTag117,smallTag118,smallTag119,smallTag120,smallTag121,smallTag122,smallTag123,smallTag124,smallTag125,smallTag126,smallTag127,smallTag128,smallTag129,smallTag130,smallTag131,smallTag132,smallTag133,smallTag134,smallTag135,smallTag136,smallTag137,smallTag138,smallTag139,smallTag140,smallTag141,smallTag142,smallTag143,smallTag144,smallTag145,smallTag146,smallTag147,smallTag148,smallTag149,smallTag150,smallTag151,smallTag152,smallTag153,smallTag154,smallTag155,smallTag156,smallTag157,smallTag158,smallTag159,smallTag160,smallTag161,smallTag162,smallTag163,smallTag164,smallTag165,smallTag166,smallTag167,smallTag168,smallTag169,smallTag170,smallTag171,smallTag172,smallTag173,smallTag174,smallTag175,smallTag176,smallTag177,smallTag178,smallTag179,smallTag180,smallTag181,smallTag182,smallTag183,smallTag184,smallTag185,smallTag186,smallTag187,smallTag188,smallTag189,smallTag190,smallTag191,smallTag192,smallTag193,smallTag194,smallTag195,smallTag196,smallTag197,smallTag198,smallTag199,smallTag200,smallTag201,smallTag202,smallTag203,smallTag204,smallTag205,smallTag206];                  
for(i=0;i<bigTagArr.length;i++){addBigTag(bigTagArr[i]);}
for(j=0;j<smallTagArr.length;j++){addSmallTag(smallTagArr[j]);}
alert(getAllProduct().length);    
 }
function addProductFromForm(){

var id=document.getElementById("id").value;
var name=document.getElementById("name").value;
var detail=document.getElementById("detail").value;
var price=document.getElementById("price").value;
var date=document.getElementById("date").value;
var beforeCount=document.getElementById("beforeCount").value;
var afterCount=document.getElementById("afterCount").value;
var bigTag=document.getElementById("bigTag").value;
var smallTag=document.getElementById("smallTag").value;
var idCompany=document.getElementById("idCompany").value;
var sellStatus=document.getElementById("sellStatus").value;
var location=document.getElementById("location").value;
var srcImg=document.getElementById("srcImg").value;
var product=new Product(id,name,detail,price,date,beforeCount,afterCount,bigTag,smallTag,idCompany,sellStatus,location,srcImg);
addProduct(product);
//var db=firebase.database();
//db.ref("product/"+id).set({id:id,name:name,detail:detail,price:price,date:date,count:count,bigTag:bigTag,smallTag:smallTag,idCompany:idCompany,sellStatus:sellStatus,location:location,srcImg:srcImg});

//alert(product.id+product.name+detail+price+date+beforeCount+afterCount+bigTag+smallTag+idCompany+sellStatus+location+srcImg);

alert("success");
}

