$(function() {
  $('.contactForm').validator().on('submit', function (e) {
    var $form = $(this);
    if (e.isDefaultPrevented()) {
      // handle the invalid form...
    } else {
      e.preventDefault();
      $form.find("[type=submit]").prop("disabled", true).button('loading'); //prevent submit behaviour and display preloading

       // get values from FORM
      var form               = $form.find('[type=submit]').attr("name"),
          message            = $form.find('[name=message]').val(),
          name               = $form.find('[name=name]').val(),
          phone              = $form.find('[name=phone]').val(),
          email              = $form.find('[name=email]').val();

      $.ajax({
        url: "./mail/mail.php",
        type: "POST",
        data: {
          form: $.trim(form),
          name: $.trim(name),
          phone: $.trim(phone),
          email: $.trim(email),
          message: $.trim(message),
        },
        cache: false,
        success: function(response) {

          if ($form.hasClass('contactForm--modal')) {
            var $animateElement = $form.find('.modal__group'),
                animateElementReplace = $form.find('.contactForm--success');

            $animateElement.animate({
              left: '-100%',
              opacity: '0'
            }, 
            { 
              duration: 1200, 
              queue: false, 
              complete: function(){
                $(this).remove();
              }
            })
            .animateElementReplace.animate({
              left: '0',
              opacity: '1'
            }, 
            { 
              duration: 1200, 
              queue: false,
              start: function(){
                $(this).show();
              }
            });
          }
          
          // Success message
          $form.find('.success').html("<div class='alert alert-success'>");
          $form.find('.success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $form.find('.success > .alert-success')
            .append("<strong>Cообщение успешно отправлено.</strong>");
          $form.find('.success > .alert-success')
            .append('</div>');
     
          // remove prevent submit behaviour and disable preloading
          $form.find("[type=submit]").prop("disabled", false).button('reset');  

          //clear all fields
          $form.trigger("reset");
        },
        error: function() {
          // Fail message
          $form.find('.success').html("<div class='alert alert-danger'>");
          $form.find('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $form.find('.success > .alert-danger').append("<strong>Письмо не отправлено. Пожалуйста, проверьте ваше интернет соединения и попробуйте еще раз!");
          $form.find('.success > .alert-danger').append('</div>');

          // remove prevent submit behaviour and disable preloading
          $form.find("[type=submit]").prop("disabled", false).button('reset'); 

          //clear all fields
          $form.trigger("reset");
        },
      });
    }
  }); 
});