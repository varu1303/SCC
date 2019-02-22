$(document).ready(() => {
    // console.log('Time for JQ!');
    // $('#registerReqBtn').on('click', () => {
    //     let reqBody = {
    //         email: "mod@scc.com",
    //         password: $('#password').val() || "scc@modpass",
    //         condo: {
    //             name: $('#name').val(),
    //             address: {
    //                 line1: "xyz1",
    //                 line2: "xyz2",
    //                 landmark: "abc",
    //                 pincode: "411057",
    //                 country: "abcCNT"
    //             },
    //             location: {
    //                 long: "28.4595",
    //                 lat: "77.0266"
    //             }
    //         }
    //     }
    //     // console.log(reqBody);
    //     $.post('/mod/registerCondo', {"reqBody": 1})
    //         .done(function(returnedData){
    //                 console.log(returnedData);
    //         }).fail(function(){
    //             console.log("error");
    //         });
    // })

    $("#mod_form").on("submit", function(event) {
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
        console.log(reqBody);
        $.post("/mod/registerCondo", reqBody)
        .done(data => {
            console.log(data);
        })
        .fail(err => {
            console.log(err);
        })
    })
})