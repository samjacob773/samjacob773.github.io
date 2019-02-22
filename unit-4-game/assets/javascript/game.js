$(document).ready(function() {
    let wins = 0;
    let losses = 0;
    let score = 0;

    let cpuNumber = Math.floor(Math.random() * (120-19)) + 19;
    console.log("Computer Number: " + cpuNumber);

    const genNum = function(min,max,cnt) {
        let arr = [];
        for(let i = min,j=0; i <= max;j++,i++)
            arr[j] = i
            arr.sort(function() {
              return Math.floor((Math.random() * 3 ) - 1)
    });
        return arr.splice(0,cnt)
    };
    const reset = function () {
        cpuNumber = Math.floor(Math.random() * (120-19)) + 19;
        console.log("Computer Number: " + cpuNumber);
        $("#cNumber").text(cpuNumber);
        score = 0
        $("#scoreTotal").html(score);
        console.log(genNum(1,12,4));
        let randNumGen = genNum(1,12,4);
        let jewel1 = randNumGen[0];
        let jewel2 = randNumGen[1];
        let jewel3 = randNumGen[2];
        let jewel4 = randNumGen [3];
        console.log(randNumGen);
        console.log(jewel1);
        console.log(jewel2);
        console.log(jewel3);
        console.log(jewel4);
        $(".btn1").attr("value",jewel1);
        $(".btn2").val(jewel2);
        $(".btn3").val(jewel3);
        $(".btn4").val(jewel4);
    };
  
    reset();

    const winner = function() {
        alert("You won! Your number matched the random number right on the nose!");
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();
    };
    const loser = function() {
        alert("OMG! You lost! Try and match the random red number EXACTLY.");
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    };

    $('.crystal-btn').on("click", function(){
        const crystalValue = parseInt($(this).val());
        score += crystalValue;
        console.log(score);
        $("#scoreTotal").html(score);
        if (score == cpuNumber) {
            winner();
        }
        else if (score > cpuNumber) {
            loser();
        };
    });
})

