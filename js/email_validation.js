(function () {
    var $contactForm = $('#contactForm');
    // VALIDATE FORM
    $contactForm.validate();
    $contactForm.submit(function (e) {
        if ($(this).valid()) {
            alert("nice")
        }
        return false;
    });
})();

$(function () {
    $("#email").not("[type=submit]").jqBootstrapValidation();
});
