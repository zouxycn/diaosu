var DS = DS || {};
DS.entry = {
	init:function(){
		this.getVerifyCode();
		this.agreeCheck();
		this.validateLogin();
		this.validateIdentity();
		this.validateChangePwd();
		this.registPerson();
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
		var _form = $("#loginForm");
		if(_form.length < 1) return;
		_form.Validform({
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
		var _form = $("#validateIdentity");
		if(_form.length < 1) return;
		_form.Validform({
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
	validateChangePwd:function(){
		var _form = $("#validateChangePwd");
		if(_form.length < 1) return;
		var _getVerifyBtn = _form.find(".getverify-btn"),
			_coutnDownBox = _form.find(".count-down");
		var _countDown = DS.widget("CountDown",{
			box:_coutnDownBox,
			seconds:10,
			txt:_coutnDownBox.find(".s"),
			callback:function(){
				_coutnDownBox.addClass("hide");
				_getVerifyBtn.removeClass("hide");

				_getVerifyBtn.on("click",function(){
					//添加获取手机验证码ajax
					_coutnDownBox.removeClass("hide");
					_getVerifyBtn.addClass("hide");
					_countDown.reset(60);
				});
			}
		});
		_form.Validform({
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
	registPerson:function(){
		var _form = $("#registPerson");
		if(_form.length < 1) return;
		_form.find("input").on({
			focusin:function(){
				var _p = $(this).parent().parent();
				_p.find(".err").addClass("hide");
				_p.find(".info").removeClass("hide");
			},
			focusout:function(){
				var _p = $(this).parent().parent();
				_p.find(".err").removeClass("hide");
				_p.find(".info").addClass("hide");
			}
		});

		_form.Validform({
			btnSubmit:".btn-login",
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
			},
			submitForm:function(){
				alert("aaa")
			}
		});
	}
}


$(function(){
	DS.entry.init();
});