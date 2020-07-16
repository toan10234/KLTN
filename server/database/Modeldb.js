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
		return db.query("Insert into taikhoan(IDTaiKhoan,UserName,Password,Email,admin) values(?,?,?,?,?)",[null,data.username,data.password,data.email,'0'],callback);
		//return db.query("Insert into taikhoan(IDTaiKhoan,UserName,Password,Email,admin) values(?,?,?,?,?)",[null,data.username,MD5(data.password),data.email,'0'],callback);
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
	getCanHoId:function(id,callback){
		return db.query("Select * from canho where DaBan=0 and IDCanHo=?",[id],callback);
	},
	themCanHo:function(data,callback){
		return db.query("Insert into canho(IDCanHo,TenCanHo,HinhAnh,ThongTin,GiaTien,DiaChi,DaBan,DienTich,ChieuDai,ChieuRong,SoTang,PhongNgu,ChoDeXe) values(?,?,?,?,?,?,?,?,?,?,?,?,?)",[null,data.tencanho,data.hinhanh,data.thongtin,data.giatien,data.diachi,"0",data.dientich,data.chieudai,data.chieurong,data.sotang,data.phongngu,data.chodexe],callback);
	},
	suaCanHo:function(id,data,callback){
		return db.query("update canho set TenCanHo=?,HinhAnh=?,ThongTin=?,GiaTien=?,DiaChi=?,DienTich=?,ChieuDai=?,ChieuRong=?,SoTang=?,PhongNgu=?,ChoDeXe=? where IDCanHo=?",[data.tencanho,data.hinhanh,data.thongtin,data.giatien,data.diachi,data.dientich,data.chieudai,data.chieurong,data.sotang,data.phongngu,data.chodexe,id],callback);
	},
	xoaCanHo:function(id,callback){
		return db.query("delete from canho where IDCanHo=?",[id],callback);
	},
	timKiemCanHo:function (data,callback) {
		return db.query("SELECT * FROM canho where TenCanHo LIKE ? or GiaTien LIKE ? or DiaChi LIKE ? and DaBan=0",[`%${data.infor}%`,`%${data.infor}%`,`%${data.infor}%`],callback)
	},


	//Yêu Thích
	getYeuThich:function(id,callback){
		return db.query("Select yeuthich.IDYeuThich,yeuthich.IDCanHo,yeuthich.IDTaiKhoan,canho.TenCanHo,canho.HinhAnh from yeuthich,canho where IDTaiKhoan=? and yeuthich.IDCanHo=canho.IDCanHo",[id],callback);
	},
	checkYeuThich:function(id,data,callback){
		return db.query("SELECT IDYeuThich FROM yeuthich WHERE IDCanHo = ? AND IDTaiKhoan = ?",[data.idcanho,id],callback);
	},
	themYeuThich:function(id,data,callback){
		return db.query("Insert into yeuthich(IDYeuThich,IDCanHo,IDTaiKhoan) values(?,?,?)",[null,data.idcanho,id],callback);
	},
	xoaYeuThich:function(id,data,callback){
		return db.query("delete from yeuthich where IDCanHo=? and IDTaiKhoan=?",[data.idcanho,id],callback);
	},



	//Vị trí
	getViTri:function(callback){
		return db.query("select canho.IDCanHo,canho.TenCanHo,canho.HinhAnh,canho.DiaChi,vitri.latitude,vitri.longitude from vitri , canho Where vitri.IDCanHo=canho.IDCanHo ",callback)
	},
	getViTriId:function(id,callback){
		return db.query("select canho.IDCanHo,canho.TenCanHo,canho.HinhAnh,canho.DiaChi,vitri.latitude,vitri.longitude from vitri , canho Where vitri.IDCanHo=canho.IDCanHo and vitri.IDCanHo=?",[id],callback)
	},
	themVitri:function(id,data,callback){
		return db.query("Insert into vitri(IDViTri,IDCanHo,latitude,longitude) values(?,?,?,?)",[null,id,parseFloat(data.latitude),parseFloat(data.longitude)],callback);
	},
	suaViTri:function(id,data,callback){
		return db.query("update vitri set latitude=?,longitude=? where IDCanHo=?",[parseFloat(data.latitude),parseFloat(data.longitude),id],callback);
	},
	checkViTri:function(id,data,callback){
		return db.query("select * from vitri where IDCanHo=?",[id],callback);
	},

	
// Bình Luận
	getBinhLuan:function(id,callback){
		return db.query("select binhluan.IDBinhLuan, thongtintaikhoan.HoVaTen ,binhluan.NoiDung,binhluan.ThoiGianBinhLuan from thongtintaikhoan,binhluan where binhluan.IDThongTinTaiKhoan=thongtintaikhoan.IDThongTinTaiKhoan and IDCanHo =? ORDER BY ThoiGianBinhLuan,IDBinhLuan",[id],callback)
	},
	themBinhLuan:function(id,data,callback){
		return db.query("Insert into binhluan(IDBinhLuan,IDThongTinTaiKhoan,IDCanHo,NoiDung,ThoiGianBinhLuan) values(?,?,?,?,?)",[null,data.idthongtintaikhoan,id,data.noidung,data.thoigianbinhluan],callback);
	},

	//hồ sơ pháp lý
	getHoSoPhapLy:function(id,callback){
		return db.query("Select * from hosophaply where IDCanHo=?",[id],callback);
	},
	themHoSoPhapLy:function(id,data,callback){
		return db.query("Insert into hosophaply(IDHoSoPhapLy,IDCanHo,FileHoSo) values(?,?,?)",[null,id,data.filehoso],callback);
	},
	suaHoSoPhapLy:function(id,data,callback){
		return db.query("update hosophaply set FileHoSo=? where IDCanHo=?",[data.filehoso,id],callback);
	},


	//Mặt bang
	getMatBang:function(id,callback){
		return db.query("Select * from matnen where IDCanHo=?",[id],callback);
	},
	themMatBang:function(id,data,callback){
		return db.query("Insert into matnen(IDMatNen,IDCanHo,HinhAnhMatNen) values(?,?,?)",[null,id,data.hinhanhmatnen],callback);
	},
	suaMatBang:function(id,data,callback){
		return db.query("update matnen set HinhAnhMatNen=? where IDCanHo=?",[data.hinhanhmatnen,id],callback);
	},

	//Tiện ích khu
	getTienIchKhu:function(id,callback){
		return db.query("Select * from tien where IDCanHo=?",[id],callback);
	},
	themTienIch:function(id,data,callback){
		return db.query("Insert into tien(IDTienIchKhu,IDCanHo,TenTienIch,HinhAnhTienich) values(?,?,?,?)",[null,id,data.tentienich,data.hinhanhtienich],callback);
	},
	suaTienIch:function(id,data,callback){
		return db.query("update tien set TenTienIch=? ,HinhAnhTienIch=? where IDTienIchKhu=?",[data.tentienich,data.hinhanhtienich,id],callback);
	},

	//cá nhân
	doiMatKhau:function(data,callback){
		return db.query("update taikhoan set PassWord=?  where IDTaiKhoan=?",[data.password,data.idtaikhoan],callback);
	},

	datCoc:function(id,callback){
		return db.query("update canho set DaBan=?  where IDCanHo=?",[1,id],callback);
	},
};



 module.exports=ModelDB;