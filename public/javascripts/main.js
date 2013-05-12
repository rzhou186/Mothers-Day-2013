/*
 * main.js
 * -------
 * Initializes web application.
 * 
 */

var currStep = 0;

$(document).ready(function(){

	displayWindow();

	$("#next-btn").click(function(){
		currStep++;
		launchStep(currStep);
	});

});

function displayWindow(){
	$(".message").fadeIn(700);
}

function launchStep(currStep) {

	if (currStep === 9) $("#next-btn").remove();

	updateBackground(currStep);
	updateMessage(currStep);

}

function updateBackground(currStep) {
	var backgroundURL = "url(/images/background-" + currStep + ".jpg)";
	$("body").css("background-image", backgroundURL);
}

function updateMessage(currStep) {

	if (currStep === 1)
		displayMessage("We didn't want to make any old thank you card, so we decided to try some thing different.");

	else if (currStep === 2)
		displayMessage("Thank you for taking us to new places and inspiring us to reach new heights.");

	else if (currStep === 3)
		displayMessage("And for the little, everyday things that you do for us at home and school.");

	else if (currStep === 4)
		displayMessage("We know that we sometimes upset you or just disagree with you . . .");

	else if (currStep === 5)
		displayMessage("But in the end, we know that you only mean the best for us. Thanks for always being there.");

	else if (currStep === 6)
		displayMessage("By the way, Dad didn't help us make this gift. He didn't even know that we were planning it.");

	else if (currStep === 7)
		displayMessage("But of course, he's always thinking about you too.");

	else if (currStep === 8)
		displayMessage("So thanks for being the best mom we could have asked for.");

	else if (currStep === 9)
		displayMessage("And Happy Mother's Day. We love you very much. <br><br><span style='float:right;'>- Ray & Ian</span>");

}

function displayMessage(message){
	$(".message-body p").css("display", "none");
	$(".message-body p").html(message);
	$(".message-body p").fadeIn(700);
}