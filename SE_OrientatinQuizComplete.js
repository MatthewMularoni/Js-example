var player = GetPlayer();
var reqNum = player.GetVar("userID") + " " + 211;
$.ajax({
                    type: "POST",
                    url: "Services.aspx/SendData",
                    contentType: "application/json; charset=utf-8",
                    data: '{"requestNo":"' + reqNum + '"}',
                    dataType: "json",
                    success: function (data) {
                       
                    },
                    error: function (data) { alert("Connection to the database has been lost. Close this tab or browser and relogin to cite.nwmissouri.edu/SE_Orientation. If this issue continues check your internet connection then contact your supervisor.")}
                });//end Ajax