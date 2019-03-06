$(document).ready(() => {

    let signup_tab = $('#signup_tab');
    let login_tab = $('#login_tab');
    let signup_form = $('#signup_form');
    let login_form = $('#login_form');

    $('#active_tab').text('Log in');

    signup_form.hide();

    function toggle(deactivate, activate) {
        deactivate.removeClass('active');
        deactivate.addClass('inactive');
        activate.removeClass('inactive');
        activate.addClass('active');
    }

    signup_tab.click(function() {
        if (login_tab.hasClass('active')) {
            toggle(login_tab, signup_tab);
            $('#active_tab').text('Sign up for');
            signup_form.show();
            login_form.hide();
        }
    })
    login_tab.click(function() {
        if (signup_tab.hasClass('active')) {
            toggle(signup_tab, login_tab);
            $('#active_tab').text('Log in');
            signup_form.hide();
            login_form.show();
        }
    })
})