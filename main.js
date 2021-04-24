
(function(){

   window.onload=function(){
	   
	   const form=document.querySelector('.form')
	   form.addEventListener('submit',function(e){
		   e.preventDefault()
		   
		   const message=document.querySelector('.message')
		   const feedback=document.querySelector('.show')
		   const messageContent=document.querySelector('.input_text')
		   
		  
		 if(message.value === ''){
			  feedback.textContent='Please Enter the Text !!!'
			   feedback.style.color='red'
			   setTimeout(function(){
				   feedback.textContent='Last Message Delivered'
				   feedback.style.color='black'
			   },3000)
		 }
		   
		   messageContent.textContent=message.value
		   message.value=''
		   
	   })
   }
})()