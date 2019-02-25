$(document).ready(() => {

    let response = $("#response");

    $(".loader").hide();
    
    $("#mod_form").on("submit", function(event) {
        $(".loader").show();
        event.preventDefault();
        let reqBody = { condo: { address: {}, location: {} } };
        $("#mod_form").serializeArray().forEach(item => {
            if (item.name === 'email' || item.name === 'password')
            reqBody[item.name] = item.value;
            else {
                if (item.name === 'long' || item.name === 'lat')
                reqBody.condo.location[item.name] = item.value;
                else if (item.name === 'name' || item.name === 'lat')
                reqBody.condo[item.name] = item.value;
                else
                reqBody.condo.address[item.name] = item.value;
            }
        })
        // console.log(reqBody);
        $.post("/mod/registerCondo", reqBody)
        .done(data => {
            $(".loader").hide();
            $(".form_holder").css("border-color", "#e0e4f1");
            console.log(data);
        })
        .fail(err => {
            $(".loader").hide();
            $(".form_holder").css("border-color", "red");
            // $("#text").innerText(err.responseText.message);
            response.show();
            // console.log(err.responseText);
        })
    })

    $("#resClsBtn").on('click', () => {
        response.hide();
    })
})