var db = require('../database/Dbconnection');
var MD5=require('md5');
var ModelDB={
	//Tài Khoản
	login:function (data,callback){
		return db.query("SELECT IDTaiKhoan,Admin FROM taikhoan WHERE UserName = ? AND Password = ?",[data.username,data.password],callback);
	},
	getIdTaiKhoan:function(data,callback){
		return db.query("select IDTaiKhoan,Email,Admin from taiKhoan where UserName = ? AND Password = ?",[data.username,data.password],callback);
	},
	register:function(data,callback){
		return db.query("Insert into taikhoan(IDTaiKhoan,UserName,Password,Email,admin) values(?,?,?,?,?)",[null,data.username,MD5(data.password),data.email,'0'],callback);
	},
	getTaiKhoan:function(callback){
		return db.query("Select * from taikhoan ",callback);
	},


	//thông tin tai khoản
	themThongTinTaiKhoan:function(data,callback){
		return db.query("Insert into thongtintaikhoan(IDThongTinTaiKhoan,IDTaiKhoan,HoVaTen,Email,SoDienThoai,DiaChi) values(?,?,?,?,?,?)",[null,data.idtaikhoan,data.hovaten,data.email,data.sodienthoai,data.diachi],callback);
	},
	suaThongTinTaiKhoan:function(id,data,callback){
		return db.query("update thongtintaikhoan set HoVaTen=?,Email=?,SoDienThoai=?,DiaChi=? where IDTaiKhoan=?",[data.hovaten,data.email,data.sodienthoai,data.diachi,id],callback);
	},
	getThongTinTaiKhoan:function (id,callback) {
		return db.query("SELECT * FROM thongtintaikhoan WHERE IDTaiKhoan = ?",[id],callback);
	},



	//Căn Hộ
	getCanHo:function(callback){
		return db.query("Select * from canho where DaBan=0",callback);
	},
	themCanHo:function(data,callback){
		return db.query("Insert into canho(IDCanHo,TenCanHo,HinhAnh,ThongTin,GiaTien,DiaChi,DaBan,DienTich,ChieuDai,ChieuRong,SoTang,PhongNgu,ChoDeXe) values(?,?,?,?,?,?,?,?,?,?,?,?,?)",[null,data.tencanho,data.hinhanh,data.thongtin,data.giatien,data.diachi,"0",data.dientich,data.chieudai,data.chieurong,data.sotang,data.phongngu,data.chodexe],callback);
	},
	suaCanHo:function(id,data,callback){
		return db.query("update canho set TenCanHo=?,HinhAnh=?,ThongTin=?,GiaTien=?,DiaChi=?,DaBan=?,DienTich=?,ChieuDai=?,ChieuRong=?,SoTang=?,PhongNgu=?,ChoDeXe=? where IDCanHo=?",[data.tencanho,data.hinhanh,data.thongtin,data.giatien,data.diachi,data.daban,data.dientich,data.chieudai,data.chieurong,data.sotang,data.phongngu,data.chodexe,id],callback);
	},
	xoaCanHo:function(id,callback){
		return db.query("delete from canho where IDCanHo=?",[id],callback);
	},



	//Yêu Thích
	getYeuThich:function(id,callback){
		return db.query("Select yeuthich.IDYeuThich,yeuthich.IDCanHo,yeuthich.IDTaiKhoan,canho.TenCanHo,canho.HinhAnh from yeuthich,canho where IDTaiKhoan=? and yeuthich.IDCanHo=canho.IDCanHo",[id],callback);
	},
	themYeuThich:function(id,data,callback){
		return db.query("Insert into yeuthich(IDYeuThich,IDCanHo,IDTaiKhoan) values(?,?,?)",[null,data.idcanho,id],callback);
	},
	xoaYeuThich:function(id,callback){
		return db.query("delete from yeuthich where IDYeuThich=?",[id],callback);
	},



	//Vị trí
	getViTri:function(callback){
		return db.query("select canho.IDCanHo,canho.TenCanHo,canho.HinhAnh,canho.DiaChi,vitri.latitude,vitri.longitude from vitri , canho Where vitri.IDCanHo=canho.IDCanHo ",callback)
	},
	getViTriId:function(id,callback){
		return db.query("select * from vitri where IDCanHo=?",[id],callback)
	},
	themVitri:function(id,data,callback){
		return db.query("Insert into vitri(IDViTri,IDCanHo,latitude,longitude) values(?,?,?,?)",[null,id,data.latitude,data.longitude],callback);
	},
	suaViTri:function(id,data,callback){
		return db.query("update vitri set latitude=?,longitude=? where IDCanHo=?",[data.latitude,data.longitude,id],callback);
	},


	
// Bình Luận
	getBinhLuan:function(id,callback){
		return db.query("select binhluan.IDBinhLuan, thongtintaikhoan.HoVaTen ,binhluan.NoiDung,binhluan.ThoiGianBinhLuan from thongtintaikhoan,binhluan where binhluan.IDThongTinTaiKhoan=thongtintaikhoan.IDThongTinTaiKhoan and IDCanHo =? ",[id],callback)
	},
	themBinhLuan:function(id,data,callback){
		return db.query("Insert into binhluan(IDBinhLuan,IDThongTinTaiKhoan,IDCanHo,NoiDung,ThoiGianBinhLuan) values(?,?,?,?,?)",[null,data.idthongtintaikhoan,id,data.noidung,data.thoigianbinhluan],callback);
	},

};
 module.exports=ModelDB;