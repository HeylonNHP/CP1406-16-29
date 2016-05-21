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
pageResize()

function adjust_footer(){
	var footer = document.getElementsByTagName('footer').item(0);
	var footer_spacer = document.getElementById('footerspacing');
	footer_spacer.style.height = footer.offsetHeight + "px";
	//main_page.style.paddingBottom = footer.offsetHeight + "px";
	//footer.style.bottom = "calc(0% + " +0+ "px)";
}