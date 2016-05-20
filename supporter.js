// JavaScript Document

var textbox_error_colour = '#ff4d4d';
var textbox_normal_colour = '#FFFFFF';

function check_form(){
	var form = document.getElementById('benefactorForm');
	var form_inputs = form.getElementsByTagName('input');
	
	var form_values_dict = {};
	
	for(var i = 0; i < form_inputs.length; i++){
		try{
			form_values_dict[form_inputs.item(i).getAttribute('name')] = form_inputs.item(i).value;
		}catch(err){
			alert("failed");
		}
	}
	
	//Get payment method
	if(form.bycheque.checked){
		form_values_dict['payment'] = 'cheque';
	}else if(form.byeftpos.checked){
		form_values_dict['payment'] = 'eftpos';
	}else if(form.bycash.checked){
		form_values_dict['payment'] = 'cash';
	}else{
		form_values_dict['payment'] = 'not selected';
	}
	
	var amount_error = false;
	var payment_type_error = false;
	var benefactor_title_error = false;
	var name_error = false;
	var mailing_address_error = false;
	var phone_error = false;
	
	if(check_amount_correct(form_values_dict['amount']) == false){
		amount_error = true;
	}
		
	if(check_payment_type_correct(form_values_dict['payment']) == false){
		payment_type_error = true;
	}
		
	if(check_string_non_empty(form_values_dict['benefactortitle']) == false && form.remainanonymous.checked == false){
		benefactor_title_error = true;
	}
	
	if(check_string_non_empty(form_values_dict['name']) == false){
		name_error = true;
	}
	
	if(check_string_non_empty(form_values_dict['mailingaddress']) == false){
		mailing_address_error = true;
	}
	
	if(check_phonenumber_correct(form_values_dict['phonenumber']) == false && check_phonenumber_correct(form_values_dict['mobilenumber']) == false){
		phone_error = true;		
	}
	
	if(amount_error || payment_type_error || benefactor_title_error || name_error || phone_error){
		alert("u dun goofed");
		return false;
	}else{
		window.location = 'thankyou.html?formtype=benefactor';
		return false;
	}
}

//Error checking
function check_amount_correct(amount){
	if(amount.length <= 0){
		return false;
	}
	if(amount <= 0){
		return false;	
	}
	return true;
}

function check_payment_type_correct(payment_type){
	if(payment_type == "not selected"){
		return false;	
	}
	return true;
}

function check_string_non_empty(string){
	if(string == ""){
		return false;	
	}
	return true;
}

function check_phonenumber_correct(phonenumber){
	if(phonenumber.length < 10){
		return false;	
	}
	return true;
}

//Live error checking
function standard_textbox_ontype(textbox){
	if(check_string_non_empty(textbox.value)){
		textbox.style.backgroundColor = textbox_normal_colour;
	}else{
		textbox.style.backgroundColor = textbox_error_colour;
	}
}

function phonenumber_textbox_ontype(){
	var mobile_textbox = document.getElementById('mobilenumber');
	var landline_phone_textbox = document.getElementById('phonenumber');
	
	if(check_phonenumber_correct(landline_phone_textbox.value) || check_phonenumber_correct(mobile_textbox.value)){
		landline_phone_textbox.style.backgroundColor = textbox_normal_colour;
		mobile_textbox.style.backgroundColor = textbox_normal_colour;
	}else{
		landline_phone_textbox.style.backgroundColor = textbox_error_colour;
		mobile_textbox.style.backgroundColor = textbox_error_colour;
	}
	
}

function price_textbox_ontype(textbox){
	if(check_amount_correct(textbox.value)){
		textbox.style.backgroundColor = textbox_normal_colour;
	}else{
		textbox.style.backgroundColor = textbox_error_colour;
	}
}