document.addEventListener('DOMContentLoaded',function(){
	const form = document.getElementById('newsletter-form');
	const messageDiv = document.querySelector('.message');
	
	form.addEventListener('submit',function(event){
		event.preventDefault();
		
		const emailInput = document.getElementById('email');
		const emailAddress = emailInput.value;
		
		if(emailAddress.trim() === ''){
			messageDiv.textContent = 'Please enter a valid email address';
		}else{
			messageDiv.textContent = 'Thank you! Your email address ${emailAddress} has been added to our mailing list!';
		
		emailnput.value = '';
	});
});