(function ($) {

    'use strict';

    function validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+\/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9][a-z0-9-]*[a-z0-9]/;
        return re.test(email);
    }

    function validate() {
        var $result = $(".validation-result");
        var email = $("#register-email").val();
        $result.text("");

        if (validateEmail(email)) {
        } else {
            $result.css("border-color", "#ff7a5c");
            // $result.css("color", "#ff7a5c");
        }
        return false;
    }

    $(".validate-email").on("click", validate);

})(jQuery);