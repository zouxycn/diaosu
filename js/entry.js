var DS = DS || {};
DS.entry = {
	init:function(){
		this.getVerifyCode();
		this.agreeCheck();
		this.validateLogin();
		//this.validateIdentity();
		//this.validateChangePwd();
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
	agreeCheck:function(){
		var _box = $(".regist-form").find(".agree");
		if(_box.length < 1) return;
		var _checkbox = _box.find("input[type=checkbox]");
		var _ck1 = _box.find("#xy");
		var _ck2 = _box.find("#dy");
		var _btn = $(".regist-form").find(".btn-login");
		_checkbox.on("click",function(){
			_ck1[0].checked && _ck2[0].checked ? _btn.removeClass("btn-login-disabled"):_btn.addClass("btn-login-disabled");
		});
	},
	validateLogin:function(){
		$("#loginForm").Validform({
			tiptype:function(msg,o,cssctl){
				var _p = o.obj.parent().parent();
				var _err;
				var _prompt;
				switch(o.type)
				{
					case 3:
						_prompt = "×"
						break;
					case 2:
						_prompt = "√"
						break;
				}
				if(_p.hasClass("verify-box"))
				{
					_err = _p.parent().find(".err");
					_p.parent().find(".prompt").text(_prompt);
				}
				else
				{
					_err = _p.find(".err");
					_p.find(".prompt").text(_prompt);
				}
				cssctl(_err,o.type);
				_err.text(msg);
			},
			callback:function(form){
				alert("submitted")
				return false;
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
		$("#validateChangePwd").validate({
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
				password:"required",
				password2:{
					required:true,
					equalTo:"#pwd"
				},
				verifycode:"required"
			},
			messages:{
				password:"请输入新密码",
				password2:{
					required:"请重新输入密码",
					equalTo:"重新输入的密码应与上面密码相同"
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