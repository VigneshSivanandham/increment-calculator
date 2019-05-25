let names = ["A","B","C"];
new Vue({
	el : "#app",
	template : "#app-template",
	data : { 
		dataNames : names ,
		beforeIncrement : '',
		afterIncrement : '',
		incrementPercentage : ''
	},
	watch : {
		beforeIncrement : function() {
			this.calculatePercentage();	
		},
		afterIncrement : function() {
			this.calculatePercentage();
		}
	},
	methods : {
		calculatePercentage: function(){
			if(this.beforeIncrement !== '' && this.afterIncrement !== '') {
				this.incrementPercentage = ((this.afterIncrement - this.beforeIncrement) / this.beforeIncrement) * 100;
			} else {
				this.incrementPercentage = '';
			}
		}
	}
});
