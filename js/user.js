var DS = DS || {};
DS.user = {};
DS.user.work = {
	init:function(){
		//作品详情图片切换
		this.initSlider();
		//作品介绍显示
		this.showAllText();
		//回复按钮
		this.showReplyBtn();
	},
	initSlider:function(){
		$("#workSlider").owlCarousel({
			autoPlay: true,
			slideSpeed : 300,
			navigation : true,
			paginationSpeed : 400,
			pagination : false,
			singleItem:true,
			autoHeight:true,
			beforeMove:function(){
				if(DS.widget.common.isIE6)
				{
					var _item = $(this.owl.owlItems[this.currentItem]);
					var _img  = _item.find("img");
					var _p = _img.width() / _img.height();

					if(_img.width() > 946)
					{
						_img.css({
							"width":"946px",
							"height":"auto"
						});
					}
					if(_img.height() > 680)
					{
						_img.css({
							"width":"auto",
							"height":"680"
						});
					}
					//alert(_img.width()+"-"+_img.height());
				}
			}
		});
	},
	showAllText:function(){
		var _box = $("#introText"),
			_txtBox = _box.find(".uintro-text"),
			_txt = _box.find(".uintro-text-box"),
			_btn = _box.find(".show-all");

		if(_txt.height() > 134)
		{
			_btn.removeClass("hide");
			_btn.toggle(function(){
				_btn.find("i").addClass("ico-up");
				_btn.find("span").text("收起");
				_txtBox.css("height","auto");
			},function(){
				_btn.find("i").removeClass("ico-up");
				_btn.find("span").text("展开");
				_txtBox.css("height","134px");
			});
		}
	},
	showReplyBtn:function(){
		var _box = $("#userComment");
		_box.find("li").hover(function(){
			$(this).addClass("cur");
		},function(){
			$(this).removeClass("cur");
		});
	}
};