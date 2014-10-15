var DS = DS || {};
DS.member = {};
DS.member.index = {
	init:function(){
		this.initCarousel();
		this.initTab();
		this.workShow();
	},
	initCarousel:function(){
		$("#banner").owlCarousel({
			autoPlay: true,
			navigation : false, 
			slideSpeed : 300,
			paginationSpeed : 400,
			paginationNumbers : true,
			singleItem:true
		});
	},
	initTab:function(){
		DS.widget("Tab",{
			tabBox:"#sculpturerTabBox",
			tabBtn:"#sculpturerTab",
			tabBoxClass:".img-list"
		});

		DS.widget("Tab",{
			tabBox:"#sculpSchoolTabBox",
			tabBtn:"#sculpSchoolTab",
			tabBoxClass:".school-list"
		});
	},
	workShow:function(){
		var _box = $("#workShow"),
			_items = _box.find(".sl-item");

		_items.hover(function(){
			$(this).addClass("sl-item-hover");
		},function(){
			$(this).removeClass("sl-item-hover");
		});
	}
}