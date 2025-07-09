/**************SCRIPT INCLUDE*****************/
//Glide AJAX Enabled - true

var CalculateAgeDiff = Class.create();
CalculateAgeDiff.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
	
getNowDateTimeDiff: function(){
var firstDT = this.getParameter('sysparm_fdt'); //First Date-Time Field
var diffTYPE = this.getParameter('sysparm_difftype');
var diff = gs.dateDiff(gs.nowDateTime(), firstDT, true);
var timeDiff = this._calcDateDiff(diffTYPE, diff);
gs.log("Time difference 2: "+timeDiff);
return timeDiff;
	
},
	
_calcDateDiff: function(diffTYPE, seconds){
var thisdiff;
if (diffTYPE == "day"){thisdiff = seconds/86400;}
else if (diffTYPE == "hour"){thisdiff = seconds/3600;}
else if (diffTYPE == "minute"){thisdiff = seconds/60;}
else if (diffTYPE == "second"){thisdiff = seconds;}
else {thisdiff = seconds;}
return thisdiff;
}
	
});
