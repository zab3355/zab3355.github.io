var cors = require('cors')

app.use(cors()); // Use this after the variable declaration

$(document).ready(function(){

    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "Validation failed. Are you a bot? I don't like bots.");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "What's your name?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "Please fill in a subject here.",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "Please insert your phone number here.",
                    minlength: "your phone number must consist of at least 5 characters"
                },
                email: {
                    required: "Please insert your email here."
                },
                message: {
                    required: "Please fill out a message here.",
                    minlength: "Please add more to your message before sending."
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"https://formspree.io/xvovoaqq",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})