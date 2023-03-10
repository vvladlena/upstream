jQuery(document).ready(function ($) {

    $(".ajax-contact-form").submit(function () {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "./send.php",
            data: str,
            success: function (msg) {
                if (msg == 'OK') {
                    alert("Thank You!");
                    window.location.replace('contact.html') 
                } else {
                    result = msg;
                }
            }
        });
        return false;
    });
});