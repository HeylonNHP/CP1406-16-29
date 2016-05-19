// JavaScript Document
function check_form(){
	var form = document.getElementById('benefactorForm');
	var errors = false;
	
	var correct_amount_entered = true;
	var amount = form.amount.value;
	if(amount <= 0 || amount == ""){
		correct_amount_entered = false;
	}
	
	var payment_method_checked = false;
	for(var i = 0; i < document.benefactorForm.payment.length; i++){
		payment_method_checked = true;
	}
	
	var benefactor_title_entered = true;
	var benefactor_title = form.benefactortitle.value;
	var remain_anonymous = form.remainanonymous.checked;
	if(benefactor_title == "" && remain_anonymous == false){
		benefactor_title_entered = false;
	}
	
	if(correct_amount_entered == false || payment_method_checked == false || benefactor_title_entered == false){
		alert("u dun goofed");
		return false;
	}else{
		window.location = 'thankyou.html?formtype=benefactor';
		return false;
	}
}