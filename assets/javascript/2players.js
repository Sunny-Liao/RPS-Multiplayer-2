    var choice = null;
    var currentplayer = null;

    $(document).ready(function() {

        //alert("Player 1, Make Your Choice.");

    $("#rock").click(function() {
        choice = "rock";
        if (document.getElementById("currentplayer").innerText==="")
        {
            currentplayer=1;
            document.getElementById("choice1Pic").innerText=choice;
            document.getElementById("currentplayer").hidden=true;
            document.getElementById("choice1Pic").hidden=true;
        }
        else if (document.getElementById("currentplayer").innerText=="1")
        {
            currentplayer=2;
            document.getElementById("choice2Pic").innerText=choice;
            document.getElementById("choice2Pic").hidden=false;
            document.getElementById("choice1Pic").hidden=false;
            document.getElementById("currentplayer").hidden=true;
            computResult();

        }
        else if (document.getElementById("currentplayer").innerText=="2")
        {
            currentplayer=1;
            document.getElementById("choice1Pic").innerText=choice;
            document.getElementById("choice2Pic").hidden=true;
            document.getElementById("choice1Pic").hidden=true;
            document.getElementById("currentplayer").hidden=true;
        }
        document.getElementById("currentplayer").innerText = currentplayer;
        
        
    });

    $("#paper").click(function() {
        choice = "paper";
        if (document.getElementById("currentplayer").innerText==="")
        {
            currentplayer=1;
            document.getElementById("choice1Pic").innerText=choice;
            document.getElementById("currentplayer").hidden=true;
            document.getElementById("choice1Pic").hidden=true;
            document.getElementById("choice2Pic").hidden=true;
        }
        else if (document.getElementById("currentplayer").innerText=="1")
        {
            currentplayer=2;
            document.getElementById("choice2Pic").innerText=choice;
            document.getElementById("currentplayer").hidden=true;
            document.getElementById("choice1Pic").hidden=false;
            document.getElementById("choice2Pic").hidden=false;
            computResult();
        }
        else if (document.getElementById("currentplayer").innerText=="2")
        {
            currentplayer=1;
            document.getElementById("choice1Pic").innerText=choice;
            document.getElementById("currentplayer").hidden=true;
            document.getElementById("choice1Pic").hidden=true;
            document.getElementById("choice2Pic").hidden=true;
        }

        document.getElementById("currentplayer").innerText = currentplayer;
    });

    $("#scissors").click(function() {
        choice = "scissors";
        if (document.getElementById("currentplayer").innerText==="")
        {
            currentplayer=1;
            document.getElementById("choice1Pic").innerText=choice;
            document.getElementById("currentplayer").hidden=true;
            document.getElementById("choice1Pic").hidden=true;
        }
        else if (document.getElementById("currentplayer").innerText=="1")
        {
            currentplayer=2;
            document.getElementById("choice2Pic").innerText=choice;
            document.getElementById("currentplayer").hidden=true;
            document.getElementById("choice1Pic").hidden=false;
            document.getElementById("choice2Pic").hidden=false;
            computResult();
        }
        else if (document.getElementById("currentplayer").innerText=="2")
        {
            currentplayer=1;
            document.getElementById("choice1Pic").innerText=choice;
            document.getElementById("currentplayer").hidden=true;
            document.getElementById("choice1Pic").hidden=true;
            document.getElementById("choice2Pic").hidden=true;
        }

        document.getElementById("currentplayer").innerText = currentplayer;

    });

    //$("#choice1Pic").hide();
        
    }

    );

    


    function computResult() {

        //$("#choice2Pic").empty();
        //$("#choice2Pic").empty();
        var player1Wins = 0;
        var player1Lose = 0;
        var player2Wins = 0;
        var player2Losses = 0;
        var result;
        var choice1=document.getElementById("choice1Pic").innerText;
        var choice2=document.getElementById("choice2Pic").innerText;
        if(choice1 == choice2) {
        $("#result").text("Tie!");
        }
        else if(choice1 == "rock" && choice2 == "scissors") {
        $("#result").text("Player 1 win!");
            player1Wins++; 
            player2Losses++;
            if (document.getElementById("player1Win").innerText==="")
            {
                
                document.getElementById("player1Win").innerText=player1Wins;
            }
            else
            {
                document.getElementById("player1Win").innerText=player1Wins + parseInt(document.getElementById("player1Win").innerText);
            }
            if (document.getElementById("player2Lose").innerText==="")
            {
                
                document.getElementById("player2Lose").innerText=player2Losses;
            }
            else
            {
                document.getElementById("player2Lose").innerText=player2Losses + parseInt(document.getElementById("player2Lose").innerText);
            }
                     
        }
        else if (choice1 == "paper" && choice2 == "rock") {
        $("#result").text("Player 1 win!");
            player1Wins++; 
            player2Losses++;
            if (document.getElementById("player1Win").innerText==="")
            {
            
            document.getElementById("player1Win").innerText=player1Wins;
            }
            else
            {
            document.getElementById("player1Win").innerText=player1Wins + parseInt(document.getElementById("player1Win").innerText);
            }
            if (document.getElementById("player2Lose").innerText==="")
            {
            
            document.getElementById("player2Lose").innerText=player2Losses;
            }
            else
            {
            document.getElementById("player2Lose").innerText=player2Losses + parseInt(document.getElementById("player2Lose").innerText);
            }
        }

        else if(choice1 == "scissors" && choice2 == "paper") {
        $("#result").text("Player 1 Win!");
            player1Wins++; 
            player2Losses++;
            if (document.getElementById("player1Win").innerText==="")
            {
            
            document.getElementById("player1Win").innerText=player1Wins;
            }
            else
            {
            document.getElementById("player1Win").innerText=player1Wins + parseInt(document.getElementById("player1Win").innerText);
            }
            if (document.getElementById("player2Lose").innerText==="")
            {
            
            document.getElementById("player2Lose").innerText=player2Losses;
            }
            else
            {
            document.getElementById("player2Lose").innerText=player2Losses + parseInt(document.getElementById("player2Lose").innerText);
            }
        }

        else if(choice2 == "rock" && choice1 == "scissors") {
        $("#result").text("Player 2 Win!")
            player1Lose++ 
            player2Wins++;
            
            if (document.getElementById("player1Lose").innerText==="")
            {
                
                document.getElementById("player1Lose").innerText=player1Lose;
            }
            else
            {
                document.getElementById("player1Lose").innerText=player1Lose + parseInt(document.getElementById("player1Lose").innerText);
            }
            if (document.getElementById("player2Win").innerText==="")
            {
                
                document.getElementById("player2Win").innerText=player2Wins;
            }
            else
            {
                document.getElementById("player2Win").innerText=player2Wins + parseInt(document.getElementById("player2Win").innerText);
            }
        }

        else if(choice2 == "paper" && choice1 == "rock") {
        $("#result").text("Player 2 Win!")
            player1Lose++ 
            player2Wins++;
        
            if (document.getElementById("player1Lose").innerText==="")
            {
            
            document.getElementById("player1Lose").innerText=player1Lose;
            }
            else
            {
            document.getElementById("player1Lose").innerText=player1Lose + parseInt(document.getElementById("player1Lose").innerText);
            }
            if (document.getElementById("player2Win").innerText==="")
            {
            
            document.getElementById("player2Win").innerText=player2Wins;
            }
            else
            {
            document.getElementById("player2Win").innerText=player2Wins + parseInt(document.getElementById("player2Win").innerText);
            }
        }

        else if(choice2 == "scissors" && choice1 == "paper") {
        $("#result").text("Player 2 Win!")
            player1Lose++ 
            player2Wins++;
        
            if (document.getElementById("player1Lose").innerText==="")
            {
            
            document.getElementById("player1Lose").innerText=player1Lose;
            }
            else
            {
            document.getElementById("player1Lose").innerText=player1Lose + parseInt(document.getElementById("player1Lose").innerText);
            }
            if (document.getElementById("player2Win").innerText==="")
            {
            
            document.getElementById("player2Win").innerText=player2Wins;
            }
            else
            {
            document.getElementById("player2Win").innerText=player2Wins + parseInt(document.getElementById("player2Win").innerText);
            }
        }

        var choice1Pic=document.getElementById("result");
        var img=document.createElement("img");
        if (document.getElementById("currentplayer")=="1")
        {
            img.src=document.getElementById(choice1).src;
            $("#choice1Pic").append(img); 
        }
        if (document.getElementById("currentplayer")=="2")
        {
            var choice2Pic=document.getElementById("result");
            img.src=document.getElementById(choice2).src;
            $("#choice2Pic").append(img);
        }


    }
    