// We want to hide the quiz and the result page.//
var countdown = 0;
var time = 30000
var timeOut = ''
var answers = ["Mr. Belding", "fresh", "The Lion King", "Nirvana", "Chicago Bulls"]
var incorrect = 0
var unanswered= 0
var correct = 0

function onload() {
    $('#quiz').hide();
    $('#results').hide();
}



onload();

function start() {
    $('#quiz').show();
    $('#results').hide();
    $('#startScreen').hide();
    timer();
    timesUp();
}

function finish() {
    getResults();
    $('#quiz').hide();
    $('#results').show();
    $('#startScreen').hide();
    stopTimer();

}
//events//
function timer() {
    countdown = setInterval(function () {
        time -= 1000;
        $('#timer').html(time / 1000);
        console.log(time);
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    clearTimeout(timeOut);
}

function timesUp() {
    timeOut = setTimeout(function () {
        clearInterval(countdown);
        finish();
    }, time);
}

function getResults() {
    for (var i = 0; i < $('.question').length; i++) {
        //var checked=$('input:checked')[i]
        var parent = $('.question')[i];
        if (!$(parent).find('input:checked').val()) {
            unanswered++
        } else if ($(parent).find('input:checked').val() === answers[i]) {
            correct++
        } else {
           incorrect++
        }

    }
    $("#incorrect").html(incorrect);
    $("#correct").html(correct);
    $("#unanswered").html(unanswered);
}

$('#startgame').on('click', start);
$('#finish').on('click', finish);

