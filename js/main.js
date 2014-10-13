var DS = DS || {};
DS.member = {
	init:function(){
		this.workShow();
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