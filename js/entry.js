var DS = DS || {};
DS.entry = {
	init:function(){
		this.getVerifyCode();
		this.validateLogin();
		this.validateIdentity();
		this.validateChangePwd();
	},
	getVerifyCode:function(){
		var _box = $(".regist-form"),
			_verifyBox = _box.find(".get-verify"),
			_btn = _box.find(".getverify-btn"),
			_verifyCloseBtn = _verifyBox.find(".close-btn"),
			_input = _verifyBox.find("input");

		_btn.on("click",function(){
			_verifyBox.removeClass("hide");
			_input.val('');
			_input.prev().removeClass("hide");
		});

		_verifyCloseBtn.on("click",function(){
			_verifyBox.addClass("hide");
		});
	},
	validateLogin:function(){
		$("#loginForm").validate({
			errorPlacement:function(error, element){
				var _p = element.parent().parent();
				if(_p.hasClass("verify-box"))
				{
					error.appendTo(_p.parent().find(".err"));
					_p.parent().find(".prompt").text("×");
				}
				else
				{
					error.appendTo(_p.find(".err"));
					_p.find(".prompt").text("×");
				}
				
				
			},
			rules:{
				username:"required",
				password:"required",
				verifycode:"required"
			},
			messages:{
				username:"请输入用户名/邮箱",
				password:"请输入密码",
				verifycode:"请输入验证码"
			},
			submitHandler:function(){
				alert("submitted!");
			},
			success: function(element) {
				element.parent().parent().find(".prompt").text("√");
			}
		});
	},
	validateIdentity:function(){
		$("#validateIdentity").validate({
			errorPlacement:function(error, element){
				var _p = element.parent().parent();
				if(_p.hasClass("verify-box"))
				{
					error.appendTo(_p.parent().find(".err"));
					_p.parent().find(".prompt").text("×");
				}
				else
				{
					error.appendTo(_p.find(".err"));
					_p.find(".prompt").text("×");
				}
				
				
			},
			rules:{
				username:"required",
				mobile:{
					required:true,
					number:true,
					rangelength:[11,11]
				},
				verifycode:"required"
			},
			messages:{
				username:"请输入用户名",
				mobile:{
					required:"请输入手机号",
					number:"请输入正确的手机号",
					rangelength:"请输入正确的手机号"
				},
				verifycode:"请输入验证码"
			},
			submitHandler:function(){
				alert("submitted!");
			},
			success: function(element) {
				element.parent().parent().find(".prompt").text("√");
			}
		});
	},
	validateChangePwd:function(){
		$("#validateIdentity").validate({
			errorPlacement:function(error, element){
				var _p = element.parent().parent();
				if(_p.hasClass("verify-box"))
				{
					error.appendTo(_p.parent().find(".err"));
					_p.parent().find(".prompt").text("×");
				}
				else
				{
					error.appendTo(_p.find(".err"));
					_p.find(".prompt").text("×");
				}
				
				
			},
			rules:{
				username:"required",
				mobile:{
					required:true,
					number:true,
					rangelength:[11,11]
				},
				verifycode:"required"
			},
			messages:{
				username:"请输入用户名",
				mobile:{
					required:"请输入手机号",
					number:"请输入正确的手机号",
					rangelength:"请输入正确的手机号"
				},
				verifycode:"请输入验证码"
			},
			submitHandler:function(){
				alert("submitted!");
			},
			success: function(element) {
				element.parent().parent().find(".prompt").text("√");
			}
		});
	}
}


$(function(){
	DS.entry.init();
});