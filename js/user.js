var DS = DS || {};
DS.user = {};
DS.user.work = {
	init:function(){
		//详情图片切换
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
			afterInit:function(){
				this.$owlItems.find(".item").removeClass("hide");
				if(DS.widget.common.isIE6){
					var _box = $("#workSlider");
					var _prev = _box.find(".owl-prev");
					var _next = _box.find(".owl-next");
					_box.find(".owl-controls").height(_box.height());
					_prev.css("top",_box.height()*0.5);
					_next.css("top",_box.height()*0.5);
					//alert(_prev.css("top"))
				}
				
			},
			beforeMove:function(){
				if(DS.widget.common.isIE6)
				{
					var _item = $(this.owl.owlItems[this.currentItem]);
					var _img  = _item.find("img");
					var _p = _img.width() / _img.height();
					var _prev = $("#workSlider").find(".owl-prev");
					var _next = $("#workSlider").find(".owl-next");
					//alert(_prev.css("top"))
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

					_prev.css("top",_img.height()*0.5);
					_next.css("top",_img.height()*0.5)
					//alert(_prev.css("top"))
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


DS.user.album = {
	init:function(){
		//详情图片切换
		this.initSlider();
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
			afterInit:function(){
				this.$owlItems.find(".item").removeClass("hide");
				if(DS.widget.common.isIE6){
					var _box = $("#workSlider");
					var _prev = _box.find(".owl-prev");
					var _next = _box.find(".owl-next");
					_box.find(".owl-controls").height(_box.height());
					_prev.css("top",_box.height()*0.5);
					_next.css("top",_box.height()*0.5);
					//alert(_prev.css("top"))
				}
				
			},
			beforeMove:function(){
				if(DS.widget.common.isIE6)
				{
					var _item = $(this.owl.owlItems[this.currentItem]);
					var _img  = _item.find("img");
					var _p = _img.width() / _img.height();
					var _prev = $("#workSlider").find(".owl-prev");
					var _next = $("#workSlider").find(".owl-next");
					//alert(_prev.css("top"))
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

					_prev.css("top",_img.height()*0.5);
					_next.css("top",_img.height()*0.5)
					//alert(_prev.css("top"))
				}
			}
		});
	}
};