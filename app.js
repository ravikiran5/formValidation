$(document).ready(function(){
	 var well = $('form#first_form .well.well-sm');
	 var first_form = $('#first_form');

	 well.hide();
	first_form.submit(function(e) {
    e.preventDefault();


    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var input = $('input');
    var first_name_valid , last_name_valid, email_valid, phone_valid = false;
    input.each(function(){
    	$(this).removeClass('error')
    })

    $("span.error").remove();

    if (first_name.length < 1) {

      $('#first_name').addClass('error').after('<span class="error">Frist Name is required</span>');

    }else{
    	first_name_valid = true;
    }

    if (last_name.length < 1) {
      $('#last_name').addClass('error').after('<span class="error">Last Name is required</span>');
    }else{
    	last_name_valid = true;
    }

    if (email.length < 1) {
      $('#email').addClass('error').after('<span class="error">Email is required</span>');
    }else{
      // var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
      var validemail = regEx.test(email);
      console.log(validemail)
      if (!validemail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
      }else{
    	email_valid = true;
    }
    }

    if (phone.length < 1) {
      $('#phone').addClass('error').after('<span class="error">Phone is required</span>');
    } else {
      var regEx = /^\d{10}$/;
      var validphone = regEx.test(phone);
      if (!validphone) {
        $('#phone').after('<span class="error">Enter a valid phone</span>');
      }else{
      	phone_valid = true;
      }
    }

    if(!first_name_valid || !last_name_valid || !email_valid || !phone_valid){
    	well.fadeIn();
    }
    if(first_name_valid && last_name_valid && email_valid && phone_valid){
    	// alert('Success !!!')
    	well.hide();
    	var data = `
    				<table class="table table-bordered" align="left">
		        		<tbody>
		        			<tr>
			    					<td><strong>User Name</strong></td>
			    					<td>${first_name} ${last_name}</td>
    						</tr>
    						<tr>
			    					<td><strong>Email</strong></td>
			    					<td>${email} </td>
    						</tr>
    						<tr>
			    					<td><strong>Phone</strong></td>
			    					<td>${phone} </td>
    						</tr>
		        		</tbody>
		        	</table>
    			`;
    	// $('#myModal table tbody').html(data);	
    	// $('#myModal').modal();
    	Swal.fire({
				  title: '<strong>User Information</strong>',
				  html:data,
				  focusConfirm: false,
				  confirmButtonText:
				    'Ok!',
				  confirmButtonAriaLabel: 'Thumbs up, great!'
		})
    	first_form.trigger("reset");
    }
   
  });
})