function loadJquery(filename, onload) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.src = filename;
            script.type = 'text/javascript';
            script.onload = script.onreadystatechange = function() {
                if (script.readyState) {
                    if (script.readyState === 'complete' || script.readyState === 'loaded') {
                        script.onreadystatechange = null;                                                  
                        onload();
                    }
                } else {
                    onload();          
                }
            };
            head.appendChild(script);
        } //end loadJquery

        loadJquery('http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js', function() {
            $(document).ready(function() {
      
             
                $.ajax({
                    type: "POST",
                    url: "Services.aspx/SendData",
                    contentType: "application/json; charset=utf-8",
                    data: '{"requestNo":"' + 1 + '"}',
                    dataType: "json",
                    success: function (data) { 

                        var moduleList = data.d.split(" ");
                        var player = GetPlayer();
                        var userID = moduleList[0];
                        player.SetVar("userID",userID);
                        var moduleCount=0;
                        for(var i = 1; i<moduleList.length; i++){
                            
                            switch (moduleList[i]) {
                                case "0":
                                    player.SetVar("Introduction",true);
                                    break;
                                case "1":
                                    player.SetVar("WorkHabitsAndAttitudes",true);
                                    moduleCount++;
                                    break;
                                case "2":
                                    player.SetVar("FederalWorkStudy",true);
                                    moduleCount++;
                                    break;
                                case "3":
                                    player.SetVar("PoliciesAndProcedures",true);
                                    moduleCount++;
                                    break;
                                case "4":
                                    player.SetVar("WorkersCompensation",true);
                                    moduleCount++;
                                    break;
                                case "5":
                                    player.SetVar("Compensation",true);
                                    moduleCount++;
                                    break;
                                case "6":
                                    player.SetVar("Confidentiality",true);
                                    moduleCount++;
                                    break;
                                case "7":
                                    player.SetVar("CareerPathing",true);
                                    moduleCount++;
                                    break;
                                case "8":
                                    player.SetVar("Events",true);
                                    moduleCount++;
                                    break;
                                case "9":
                                    player.SetVar("Offices",true);
                                    moduleCount++;
                                    break;
                                case "10":
                                    player.SetVar("Safety",true);
                                    moduleCount++;
                                    break;
                                case "11":
                                    player.SetVar("FERPA",true);
                                    moduleCount++;
                                    break;
                            }
                        player.SetVar("1progress",moduleCount);
                        }


                    },
                    error: function (data) { alert("Connection to the database has been lost. Close this tab or browser and relogin to cite.nwmissouri.edu/SE_Orientation. If this issue continues check your internet connection then contact your supervisor.")}
                });//end Ajax
            }); //end jquery ready
        }); //end loadJquery callback
