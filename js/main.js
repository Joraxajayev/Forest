$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

let button = document.querySelector('.btn__primary');

button.addEventListener('click', () => {
  console.log('clicked');
});