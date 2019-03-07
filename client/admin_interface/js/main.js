$(document).ready(function() {

    let spinnerHTML = '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
    let nodataHTML = '<span class="condo_note">No condos found</span>';
    let enterNameHTML = '<span class="condo_note">Enter a name</span>';

    let signup_tab = $('#signup_tab');
    let login_tab = $('#login_tab');
    let signup_form = $('#signup_form');
    let login_form = $('#login_form');
    let condo_selection = $('#condo_selection');
    let srch_progress = $('#srch_progress');
    let results = $('#results');
    let serachExecution;
    let checkedCondo;
    let currentRequest = null; 

    $('#active_tab').text('Log in');

    signup_form.hide();
    condo_selection.hide();
    results.hide();
    srch_progress.html(enterNameHTML);


    function toggle(deactivate, activate) {
        deactivate.removeClass('active');
        deactivate.addClass('inactive');
        activate.removeClass('inactive');
        activate.addClass('active');
    }

    function resetLogin() {
        login_form.find("input[type=email], textarea").val("");
        login_form.find("input[type=password], textarea").val("");
    }

    function resetSignUp() {
        if(currentRequest != null) {
            currentRequest.abort();
        }
        clearTimeout(serachExecution);
        results.hide();
        srch_progress.show();
        srch_progress.html(enterNameHTML);
        condo_selection.find("input[type=text], textarea").val("");
        signup_form.find("input[type=text], textarea").val("");
        signup_form.find("input[type=email], textarea").val("");
        signup_form.find("input[type=password], textarea").val("");
    }

    signup_tab.click(function() {
        if (login_tab.hasClass('active')) {
            toggle(login_tab, signup_tab);
            $('#active_tab').text('Sign up for');
            resetLogin();
            login_form.hide();
            signup_form.show();
        }
    })
    login_tab.click(function() {
        if (signup_tab.hasClass('active')) {
            toggle(signup_tab, login_tab);
            $('#active_tab').text('Log in');
            resetSignUp();
            signup_form.hide();
            condo_selection.hide();
            login_form.show();
        }
    })

    signup_form.on('submit', function(e) {
        e.preventDefault();
        signup_form.serializeArray().forEach(function(item) {
            console.log(item);
        })
        signup_form.hide();
        condo_selection.show();
    })
    login_form.on('submit', function(e) {
        e.preventDefault();
        login_form.serializeArray().forEach(function(item) {
            console.log(item);
        })
    })

    condo_selection.on('submit', function(e) {
        e.preventDefault();
    })

    $("#condo_name").on('input', function(){
        // console.log('entered', $(this).val());
        clearTimeout(serachExecution);
        results.hide();
        removeEventToCards();
        srch_progress.show();
        let val = $(this).val().trim();
        if(val.length > 0) {
            if (srch_progress.html() !== spinnerHTML)
                srch_progress.html(spinnerHTML);
        } else {
            srch_progress.html(enterNameHTML);
        }

        serachExecution = setTimeout(function() {
            if (val) {
                let body = {"condoName": val};
                currentRequest = jQuery.ajax({
                    type: 'POST',
                    url: '/admin/searchCondo',
                    data: body,
                    beforeSend : function()    {           
                        if(currentRequest != null) {
                            currentRequest.abort();
                        }
                    },
                    success: function(data) {
                        let ul = $('<ul />');
                        let resultHtml = '';
                        data.message.forEach(function(condo) {
                            resultHtml += '<li><input type="radio" id='+condo._id+' name="selector"><label for='+condo._id+'>'+condo.name+'</label><div class="check"></div></li>';
                        })
                        ul.html(resultHtml);
                        results.html(ul.html(resultHtml));
                        addEventToCards();
                        results.show();
                        srch_progress.hide();
                    },
                    error:function(e){
                        srch_progress.html(nodataHTML);
                    }
                });
            }

        }, 1000);

   }); 
   
   function addEventToCards() {
        $(document).on("click", "input[type='radio']" , function() {
            console.log('CLICKED');
            if(checkedCondo === this.id) {
                checkedCondo = '';
                this.checked = false;
            } else {
                checkedCondo = this.id;
            }
        });
    }
   function removeEventToCards() {
        $(document).off("click", "input[type='radio']");
    }

})