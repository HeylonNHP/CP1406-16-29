// JavaScript Document
//Used for actions common to all pages only - i.e NOT for gallery or submission form specific code

//Show / Hide mobile optimised menu
function toggleMenu(){
	var menu_strip1 = document.getElementById('menustrip');
	
	var pageHeader = document.getElementById('header');
	var mainPage = document.getElementById('mainpage');
	
	var current_state = window.getComputedStyle(menu_strip1).getPropertyValue('display');
	
	//toggle
	if(current_state == 'inline-block'){
		//menu_strip1.style.display = 'none';
		menu_strip1.removeAttribute('style');
	}else{
		menu_strip1.style.display = 'inline-block';
		
	}
	
	//Set mainpage top padding so fixed header does not overlap page content
	var new_header_height = window.getComputedStyle(pageHeader).getPropertyValue('height');
	mainPage.style.paddingTop = new_header_height;
}

function pageResize(){
	//Set mainpage top padding on page resize as fail-safe if mobile-optimised menu is not closed when increasing page-size
	var pageHeader = document.getElementById('header');
	var mainPage = document.getElementById('mainpage');
	var new_header_height = window.getComputedStyle(pageHeader).getPropertyValue('height');
	mainPage.style.paddingTop = new_header_height;
	
	//Unhide menu when size exceeds 650px
	var menu_strip1 = document.getElementById('menustrip');
	var current_state = window.getComputedStyle(menu_strip1).getPropertyValue('display');
	
	if(current_state == 'none' && window.innerWidth > 650){
		toggleMenu()
	}
	adjust_footer();
}
setInterval('pageResize();',1000);

function adjust_footer(){
	var footer = document.getElementsByTagName('footer').item(0);
	var footer_spacer = document.getElementById('footerspacing');
	footer_spacer.style.height = footer.offsetHeight + "px";
	//main_page.style.paddingBottom = footer.offsetHeight + "px";
	//footer.style.bottom = "calc(0% + " +0+ "px)";
}

//Collapsible sections code

/*To use this code add initalise_collapsible_sections() function call to the bottom of desired webpage
Also do not use inline-styles on collapsible elements, as they will be erased on section expansion - Heylon
*/
function initalise_collapsible_sections(){
	var collapsible_sections = document.getElementsByClassName('collapsible');
	var collapsible_buttons = document.getElementsByClassName('collapsiblebutton');
	for(var i = 0; i < collapsible_sections.length; i++){
		var button_states = ['show more', 'show less'];
		var button_text = '';
		//section
		if(collapsible_sections.item(i).getAttribute('data-collapsed') == 'true'){
			//collapsed
			collapsible_sections.item(i).style.display = 'none';
			button_text = button_states[0];
		}else{
			//found non-collapsed section
			button_text = button_states[1];
		}
		//button
		for(var j = 0; j < collapsible_buttons.length; j++){
			if(collapsible_sections.item(i).getAttribute('data-collapsible_id') == collapsible_buttons.item(j).getAttribute('data-collapsible_id')){
				//Button matched to section
				collapsible_buttons.item(j).innerHTML = button_text;
				collapsible_buttons.item(j).setAttribute('data-collapsible_section_index',i);
				//Add handler
				collapsible_buttons.item(j).addEventListener('click', toggle_collapsible_section);
			}
		}
	}
}
function toggle_collapsible_section(){
	var collapsible_sections = document.getElementsByClassName('collapsible');
	var this_button_id = this.getAttribute('data-collapsible_id');
	var my_collapsible_section_id = this.getAttribute('data-collapsible_section_index');
	
	var button_states = ['show more', 'show less'];
	
	if(collapsible_sections.item(my_collapsible_section_id).getAttribute('data-collapsed') == 'true'){
		//Expand section
		collapsible_sections.item(my_collapsible_section_id).removeAttribute('style');
		
		collapsible_sections.item(my_collapsible_section_id).setAttribute('data-collapsed','false');
		
		this.innerHTML = button_states[1];
	}else{
		//Collapse section
		collapsible_sections.item(my_collapsible_section_id).style.display = 'none';
		
		collapsible_sections.item(my_collapsible_section_id).setAttribute('data-collapsed','true');
		
		this.innerHTML = button_states[0];
	}
}