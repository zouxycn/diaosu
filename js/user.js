var DS = DS || {};
DS.user = {};
DS.user.work = {
	init:function(){
		//作品详情图片切换
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
	}
};