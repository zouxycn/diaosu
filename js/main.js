var DS = DS || {};
DS.member = {
	init:function(){
		this.workShow();
	},
	workShow:function(){
		var _box = $("#workShow"),
			_items = _box.find(".sl-item");

		_items.on("mouseover",function(){
			_items.toggleClass(".sl-item-hover")
		});
	}
}