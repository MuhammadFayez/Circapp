// function checkForLastName() {

//     console.log('hello user!');
//     var fieldname = document.getElementById("lastNameField");
//      if (fieldname.value.length === 0) {
//      alert("Please enter your last name");
//      fieldname.focus();

//      fieldname.style.background = 'yellow';
// var count = 0;


//      setInterval(function(){
//         fieldname.style.background = 'white';
//         count++;
//         if(count === 4)
// {
//     fieldname.style.background = 'yellow';
// }
//      },100)



//       }

//       return false;
//  }














// chapter 83



// function  checkForSelection(el)
// {

//     var targetnodeEl =  document.getElementById(el);
//     console.log(targetnodeEl.selectedIndex);

//     if(targetnodeEl.selectedIndex === 0){
//    alert('Select a state !');
//     }


//     return false;
// }





// chapter 84   





// function validateRadios(radEl) {
//      var radios = document.getElementsByName(radEl);
//      for (var i = 0; i < radios.length; i++) {
//      if (radios[i].checked) {
//      return false;
//      }
//      }
//      alert("Please check one.");
//      return false;
//      }
































Aname = document.getElementById('teamA');
Bname = document.getElementById('teamB');

function teams(teamAEl, teamBEl) {
    teamA = document.getElementById(teamAEl);
    teamB = document.getElementById(teamBEl);


    Aname.innerHTML = teamA.value;
    Bname.innerHTML = teamB.value;




}

teamToss = document.getElementById('teamToss');
toss = document.getElementById('toss');
tossShowedHere = document.getElementById('tossShowedHere');

function matchToss() {

    tossRandomNum = Math.ceil(Math.random() * 2);
    console.log(tossRandomNum);

    if (tossRandomNum === 1 && teamToss.value === Aname.innerHTML && toss.value.toLocaleLowerCase() === "Head".toLocaleLowerCase() || toss.value.toLocaleLowerCase() === "Heads".toLocaleLowerCase()) {


        tossShowedHere.innerHTML = 'Its a heads  ' + teamToss.value + ' won the toss and chose to bat first';
    }

    else if (tossRandomNum === 2 && teamToss.value === Aname.innerHTML && toss.value.toLocaleLowerCase() === "Tail".toLocaleLowerCase() || toss.value.toLocaleLowerCase() === "Tails".toLocaleLowerCase()) {


        tossShowedHere.innerHTML = 'Its a Tail  ' + teamToss.value + ' won the toss and chose to bat first';

    }

    else if (tossRandomNum === 1 && teamToss.value === Bname.innerHTML && toss.value.toLocaleLowerCase() === "Head".toLocaleLowerCase() || toss.value.toLocaleLowerCase() === "Heads".toLocaleLowerCase()) {

        tossShowedHere.innerHTML = 'Its a heads  ' + teamToss.value + ' won the toss and chose to bat first';
    }

    else if (tossRandomNum === 2 && teamToss.value === Bname.innerHTML && toss.value.toLocaleLowerCase() === "Tail".toLocaleLowerCase() || toss.value.toLocaleLowerCase() === "Tails".toLocaleLowerCase()) {

        tossShowedHere.innerHTML = 'Its a Tail  ' + teamToss.value + ' won the toss and chose to bat first';


    }


}







wicketId = document.getElementById('wicketdown');
ScoreId = document.getElementById('score');
scoreIncrese = document.getElementById('scoreIncrese');
teamToss = document.getElementById('teamToss');
noOfBalls = document.getElementById('noOfBalls');
noOfOvers = document.getElementById('noOfOvers');
var wicketCount = 0;
var currentScore = 0;
var ballsCounter = 0;


function circketGame() {

    if(teamToss.value.length === 0 && toss.value.length === 0){
        alert('Please enter all the required Fields !');
    }
    



else{
    var randomNum = Math.floor(Math.random() * 7);
    console.log(randomNum);

    ballsCounter++;
    if(ballsCounter<12){
    noOfBalls.innerHTML = ballsCounter;
     }

   else if (ballsCounter === 12) {
        noOfOvers.innerHTML = 'Two overs are completed ' + teamToss.value + ' innigs are over ';
        scoreIncrese.innerHTML = teamToss.value + " total score is " + currentScore;   
        stop();

        document.getElementById("runButton").disabled = true;
    }



    if (randomNum == 0) {
        wicketCount++;
        if (wicketCount < 2) {

            wicketId.innerHTML = wicketCount;
        }
        else {
            wicketId.innerHTML = "All player's are out of " + teamToss.value;
            scoreIncrese.innerHTML = teamToss.value + " total score is " + currentScore;
            stop();
            document.getElementById("runButton").disabled = true;
        }
    }

    else {


        if (ballsCounter <= 12 &&  wicketCount <= 2) {

            currentScore += randomNum;
            scoreIncrese.innerHTML = currentScore;

        }


        else {
            scoreIncrese.innerHTML = teamToss.value + " total score is " + currentScore;
            stop();

        }


    }

    if (ballsCounter <= 12  &&  wicketCount <= 2 ) {

        noOfBalls.innerHTML = ballsCounter;

    }
    else {
        noOfBalls.innerHTML = '1st inning is over !';
        document.getElementById("runButton").disabled = true;
        stop();
    }

}
}










// ********************************************************************************






wicketId1 = document.getElementById('wicketdown1');
ScoreId1 = document.getElementById('score1');
scoreIncrese1 = document.getElementById('scoreIncrese1');
teamToss1 = document.getElementById('teamToss1');
noOfBalls1 = document.getElementById('noOfBalls1');
noOfOvers1 = document.getElementById('noOfOvers1');
Result = document.getElementById('Result');
var wicketCount1 = 0;
var currentScore1 = 0;
var ballsCounter1 = 0;





function circketGameFun() {

    if(currentScore === 0){
        alert(`Match is not Started Yet !`);
    }
    



else{
    var randomNum1 = Math.floor(Math.random() * 7);
    console.log(randomNum1);
    
    

        ballsCounter1++;
        noOfBalls1.innerHTML = ballsCounter1;
    
    if(ballsCounter1 < 12  && currentScore1 >  currentScore){
        
        Result.innerHTML =  'You Won the match';
           stop();
           document.getElementById("runButton1").disabled = true;
    }

    else if (ballsCounter1 === 12  && currentScore1 < currentScore  ) {
        noOfOvers1.innerHTML = 'Two overs are completed  innig is over ';
        Result.innerHTML =  teamToss.value+'Won the match';
        stop();   
           document.getElementById("runButton1").disabled = true;
    }
    else if(ballsCounter1 === 12  && currentScore1 ===  currentScore){
        Result.innerHTML = 'Match is Drawn';
        stop();   
           document.getElementById("runButton1").disabled = true;

    }

    


    if (randomNum1 == 0) {
        wicketCount1++;
        if (wicketCount1 < 2) {

            wicketId1.innerHTML = wicketCount1;
        }

        else if (wicketCount1 !== 2 && currentScore1 === currentScore){
            Result.innerHTML =  'Match is drawn';
               stop();
               document.getElementById("runButton1").disabled = true;   
            }
    
        else if(wicketCount1 === 2 && currentScore1 < currentScore){
            wicketId1.innerHTML = "All Wicktes are Down ";
            Result.innerHTML =  teamToss.value+'Won the match';
           stop();
           document.getElementById("runButton1").disabled = true;
        }
// 
        else if(wicketCount1 !== 2 && currentScore1 > currentScore){
            Result.innerHTML =  'You Won the match';
           stop();
           document.getElementById("runButton1").disabled = true;
        }
        
    }


    else {


        if (ballsCounter1 < 12 ||  wicketCount1 < 2) {

            currentScore1 += randomNum1;
            scoreIncrese1.innerHTML = currentScore1;

        }

      else if(ballsCounter1 < 12  &&  wicketCount1 < 2 && currentScore1 > currentScore  ){
        Result.innerHTML =  'You Won the match';
        stop();
        document.getElementById("runButton1").disabled = true;
      }
        else if(ballsCounter1 === 12  ||  wicketCount1 ===2 && currentScore1 < currentScore){
            Result.innerHTML =  teamToss.value+'Won the match';
           stop();
           document.getElementById("runButton1").disabled = true;
        }


    }

    // if (ballsCounter1 <= 12  &&  wicketCount1 <= 2 ) {

    //     noOfBalls1.innerHTML = ballsCounter1;

    // }
    // else {
    //     noOfBalls1.innerHTML = '1st inning is over !';
    //     document.getElementById("runButton1").disabled = true;
    //     stop();
    // }


  
}
}
