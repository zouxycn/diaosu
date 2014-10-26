var DS = DS || {};
DS.login = {
	init:function(){
		this.initForm();
		this.getVerifyCode();
	},
	initForm:function(){
		var _form = $(".regist-form");

		_form.find("input").on("keyup",function(){
			var _p = $(this).parent().parent();
			var _err;

			if(_p.hasClass("verify-box"))
			{
				_err = _p.parent().find(".err");
			}
			else
			{
				_err = _p.find(".err");
			}
			_err.text('');
			$(this).off("keyup");
		});
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
	}
};

$(function(){
	DS.login.init();
});