// JavaScript Document
var text_area = document.getElementById('comments');
var text_area_max_length = text_area.getAttribute('maxlength');

var chars_left_label = document.getElementById('charactersAvailable');

function on_type(){
	var chars_left = text_area_max_length - text_area.value.length;
	chars_left_label.innerHTML = "Characters left: " + chars_left;
}

function change(){
	on_type();
}

function test1(object){
	alert(object.value);
}

function check_form(){
	var form = document.getElementById('contactForm').getElementsByTagName('input');
	var form_values_dict = {};
	
	//Get values of all input tags
	for(var i = 0; i < form.length; i++){
		try{
			form_values_dict[form.item(i).getAttribute('name')] = form.item(i).value;
		}catch(err){
			alert("failed");
		}
	}
	//Get textarea value
	form_values_dict['comments'] = text_area.value;
	
	//for(var key in form_values_dict){
	//	alert(form_values_dict[key]);
	//}
	
	var name_error = false;
	var surname_error = false;
	var email_error = false;
	var phonenumber_error = false;
	var comments_error = false;
	
	if(form_values_dict['firstname'] == ""){
		name_error = true;
	}
	
	if(form_values_dict['lastname'] == ""){
		surname_error = true;
	}
	
	if(form_values_dict['email'] == ""){
		email_error = true;
	}
	
	if(form_values_dict['phonenumber'] == ""){
		phonenumber_error = true;
	}
	
	if(form_values_dict['comments'] == ""){
		comments_error = true;
	}
	
	if(name_error || surname_error || email_error || phonenumber_error || comments_error){
		alert('Please fill in ALL of the provided fields.');
		return false;
	}else{
		window.location = 'thankyou.html?formtype=contacts';
		return false;
	}
	
}
on_type();