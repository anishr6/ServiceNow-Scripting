(function executeRule(current, previous /*null when async*/) {	

//BusinessRule - Before | Insert | Update

	var n1 = current.number;
	n1 = n1.toString();
	current.customer_id = n1.replace('BLM','CD');     //Re-uses the same auto-number with a different prefix.

})(current, previous)

