$(document).ready(() => {

    let response = $("#response");
    response.hide();

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
                $(".responseHolder #response").css('background-color', 'green');
                $("#resClsBtn button").css({'background-color': 'green' , 'border' : 'none'});
                $("#text").text("Condo Saved!");
                response.show();
                $("#mod_form").find("input[type=text], textarea").val("");
                $("#mod_form").find("input[type=email], textarea").val("");
                $("#mod_form").find("input[type=password], textarea").val("");
            })
            .fail(err => {
                console.log(err.responseJSON.message);
                $(".loader").hide();
                $(".form_holder").css("border-color", "red");
                $(".responseHolder #response").css('background-color', 'red');
                $("#resClsBtn button").css({'background-color': 'red', 'border' : 'none'});
                $("#text").text(err.responseJSON.message);
                response.show();
            })
    })

    $("#resClsBtn").on('click', () => {
        response.hide();
    })
})
