var DS = DS || {};
DS.school = {};
DS.school.index = {
	init:function(){
		//tab切换
		this.initTab();
	},
	initTab:function(){
		DS.widget("Tab",{
			tabBox:"#workTabBox",
			tabBtn:"#workTab",
			tabBoxClass:".school-list",
			tabType:"mouseover"
		});
	}
};