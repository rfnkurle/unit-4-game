var targetNumber = Math.floor(Math.random() * 101) + 19;
        var counter = 0;
        var playerWins = 0;
        var playerLosses = 0;

        $("#number-to-guess").text(targetNumber);


        var numberOptions = [(Math.floor(Math.random() * 12) + 1)]
        for (var i = 0; i < numberOptions.length; i++) {

            var numberOptions = [(Math.floor(Math.random() * 11) + 1)]
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image image");
            imageCrystal.attr("src", "https://mcginnis92.github.io/crystal-game/assets/images/green.png")
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);
            $("#crystals").append(imageCrystal);

            var numberOptions = [(Math.floor(Math.random() * 12) + 1)]
            var imageCrystalBlue = $("<img>");
            imageCrystalBlue.addClass("crystal-image image");
            imageCrystalBlue.attr("src", "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffecaee91400019463c4_Asset%202%402x.png")
            imageCrystalBlue.attr("data-crystalvalue", numberOptions[i]);
            $("#crystals").append(imageCrystalBlue)


            var numberOptions = [(Math.floor(Math.random() * 12) + 1)]
            var imageCrystalRed = $("<img>");
            imageCrystalRed.addClass("crystal-image image");
            imageCrystalRed.attr("src", "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8cffecaee91400019463c5_Asset%201%402x.png")
            imageCrystalRed.attr("data-crystalvalue", numberOptions[i]);
            $("#crystals").append(imageCrystalRed)

            var numberOptions = [(Math.floor(Math.random() * 12) + 1)]
            var imageDiamond = $("<img>");
            imageDiamond.addClass("crystal-image image");
            imageDiamond.attr("src", "http://uploads.webflow.com/5a8cfc09aee91400019461b0/5a8d073baee9140001946903_Asset%206%402x.png")
            imageDiamond.attr("data-crystalvalue", numberOptions[i]);
            $("#crystals").append(imageDiamond)

            console.log(imageCrystal)
        }
        

        $(".crystal-image").on("click", function () {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue)

            counter += crystalValue

            $("#player-score").text(counter);
            
            if (counter === targetNumber) {
                alert("WOOOHOOO! YOU WIN!");
                playerWins++;
                $("#wins").text(playerWins);
                
                counter = 0;
                $("#player-score").text(counter)
                
                targetNumber = Math.floor(Math.random() * 101) + 19;
                $("#number-to-guess").text(targetNumber);
                
                numberOptions = [(Math.floor(Math.random() * 11) + 1)]
                $(".crystal-image").each(function(i) {
                $(this).attr("data-crystalvalue", numberOptions[i]);
                
    })
                console.log
            
            }
        
            
            
 else if (counter > targetNumber) {
                alert("TOO BAD! YOU LOSE");
               playerLosses++;
                $("#losses").text(playerLosses);
                
                counter = 0;
                $("#player-score").text(counter);
                
                targetNumber = Math.floor(Math.random() * 101) + 19;
                $("#number-to-guess").text(targetNumber);
                
                numberOptions = [(Math.floor(Math.random() * 11) + 1)]
                $(".crystal-image").each(function(i) {
                $(this).attr("data-crystalvalue", numberOptions[i]);
                
    })
            console.log(numberOptions)
            } 
            

            
            
        });
    