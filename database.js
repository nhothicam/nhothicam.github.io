function Product(id,name,detail,price,date,count,bigTag,smallTag,idCompany,sellStatus,location,srcImg){
  this.id=id;
  this.name=name;
  this.detail=detail;
  this.price=price;
  this.date=date;
  this.count=count;
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
  var count=product.count;
  var bigTag=product.bigTag;
  var smallTag=product.smallTag;
  var idCompany=product.idCompany;
  var sellStatus=product.sellStatus;
  var location=product.location;
  var srcImg=product.srcImg;
  var db=firebase.database();
  db.ref("product/"+id).set({id:id,name:name,detail:detail,price:price,date:date,count:count,bigTag:bigTag,smallTag:smallTag,idCompany:idCompany,sellStatus:sellStatus,location:location,srcImg:srcImg});
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
  db.ref("Company/"+id).set({id:id,name:name,detail:detail,links:links,address:address,srcImg:srcImg});
}
function addCompanyTag(companyTag){
//
  var bigTag=companyTag.bigTag;
  var smallTag=companyTag.smallTag;
  var idCompany=companyTag.idCompany;
  var srcImg=companyTag.srcImg;
  var db=firebase.database();
  db.ref("CompanyTag/"+bigTag+smallTag+idCompany).set({bigTag:bigTag,smallTag:smallTag,idCompany:idCompany,srcImg:srcImg});
}
function demo(){
                   var item1=new Product("cloth_1","Áo thun cổ tròn","Áo thun cổ tròn","250.000","12/1/2019","123","Trang phục nữ ","Áo","shop Be","-0%","Hà Nội","https://cf.shopee.vn/file/23a1a71da7703209468a3d8e2fea36ab");
                   var item2=new Product("cloth_2","Đầm công chúa xòe Quảng Châu","Đầm công chúa xòe Quảng Châu","280.000","12/1/2019","121","Trang phục nữ nữ","Áo","shop Be","-12%","Hà Nội","https://cf.shopee.vn/file/18451e229297a7713a33b39be10de4ab");
                   var item3=new Product("cloth_3","Đầm voan","Đầm voan","300.000","12/1/2019","20","Trang phục nữ","Áo","shop Be","-19%","Hà Nội","https://cf.shopee.vn/file/fba1ddc9129295691204c1c7ffe56943");
                   var item4=new Product("cloth_4","Váy nữ ngắn xòe","Váy nữ ngắn xòe","350.000","12/1/2019","130","Trang phục nam","Quần","shop Be","-39%","Hà Nội","https://cf.shopee.vn/file/b9a14868241f5834613c2171d1c01eeb");
                   var item5=new Product("cloth_5","Quần short jean nam co giãn đẹp","Quần short jean nam co giãn đẹp","289.000","12/1/2019","120","Trang phục nam","Quần","shop Be","-8%","Hà Nội","https://cf.shopee.vn/file/95949eac6cedb7d40bd8c18b7a8e7556");
                   var item6=new Product("cloth_6","Combo bé gái","Combo bé gái","290.000","12/1/2019","12","Trang phục nữ","Áo","shop Be","-12%","Hà Nội","https://cf.shopee.vn/file/e016686beedeaf05da0b466f74758973");
                   var bigTag1=new BigTag("Thời trang nam","","https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn");
                   var bigTag2=new BigTag("Thiết bị và phụ kiện","","https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn");
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
                   var bigTagArr=[bigTag1,bigTag2,bigTag3,bigTag4,bigTag5,bigTag6,bigTag7,bigTag8,bigTag9,bigTag10,bigTag11,bigTag12,bigTag13,bigTag14,bigTag15,bigTag16,bigTag17,bigTag18,bigTag19,bigTag20,bigTag21,bigTag22,bigTag23,bigTag24,bigTag25];
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
                   var smallTagArr=[smallTag1,smallTag2,smallTag3,smallTag4,smallTag5,smallTag6,smallTag7,smallTag8,smallTag9,smallTag10,smallTag11,smallTag12,smallTag13,smallTag14];
                   addProduct(item1);
                   addProduct(item2);
                   addProduct(item3);
                   addProduct(item4);
                   addProduct(item5);
                   addProduct(item6);
for(i=0;i<bigTagArr.length;i++){
addBigTag(bigTagArr[i]); 
}
for(j=0;j<smallTagArr.length;j++){
addSmallTag(smallTagArr[j]);
}
alert("added");    
 }
