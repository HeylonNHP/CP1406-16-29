// JavaScript Document
var image_view = document.getElementById('imageview');
var selection_images = document.getElementById('imageSelection').getElementsByTagName('img');

for(var i = 0; i < selection_images.length; i++){
	selection_images.item(i).addEventListener('click',function(){
		image_view.setAttribute('src',this.getAttribute('src'));
	});
}

image_view.setAttribute('src','images/gallery/hotsummernight2008/Hot_Summer_Night_12.jpg');