var BAG_OF_LETTERS = [
		new Letter('_', 2, 0),
		new Letter('_', 2, 0),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('B', 2, 3),
		new Letter('B', 2, 3),
		new Letter('C', 2, 3),
		new Letter('C', 2, 3),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('F', 2, 4),
		new Letter('F', 2, 4),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('H', 2, 4),
		new Letter('H', 2, 4),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('J', 1, 8),
		new Letter('K', 1, 5),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('M', 2, 3),
		new Letter('M', 2, 3),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('P', 2, 3),
		new Letter('P', 2, 3),
		new Letter('Q', 1, 10),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('V', 2, 4),
		new Letter('V', 2, 4),
		new Letter('W', 2, 4),
		new Letter('W', 2, 4),
		new Letter('X', 1, 8),
		new Letter('Y', 2, 4),
		new Letter('Y', 2, 4),
		new Letter('Z', 1, 10),
];

var YOUR_HAND = new Array();
var SCORE = 0;

var possibleList = new Array();
//used to store every possible combination of given letters.
var scoreList = new Array();
//used to store every possible words' score so that
//we can pick the highest one.

var character = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
//used to replace "_" in a word

function startGame() {
	addNumbersFromBag();
	displayHand();
	
};



function addNumbersFromBag(){
	console.log("your hand has:" + YOUR_HAND.length);
	var left = BAG_OF_LETTERS.length;
	var temp = YOUR_HAND.length;
	for(i=YOUR_HAND.length; i < (left>6?7:left+temp)&&i<7; i++){
		YOUR_HAND[i] = getAvailableLetter();
	}
	$( "#bag-number").html(BAG_OF_LETTERS.length);
	
}


function displayHand(){
	console.log("your hand has:" + YOUR_HAND.length);
	for (i = 0; i < YOUR_HAND.length; i++) {

		console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
		$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
		$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
		
		$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
		$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
	}

	for(i = YOUR_HAND.length; i<7; i++) {
		$( "#letter-" + (i+1)).html("");
		$( "#points-" + (i+1)).html("");
	}//When there is no more than 7 letters in hand,
	//we can see a blank grid on the web page.
}



function getAvailableLetter(){
	var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
	var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);
	console.log(randomLetter[0]);
	return randomLetter[0];
}


function findWordToUse(){
 //TODO Your job starts here.
 	var c = [].concat(YOUR_HAND);
	var p = new prefix(0,"");
	//c and p are required to call the function getPossibleWordsToList()

	var underlineNum = 0;//used to store numbers of underline in a word

	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].letter == "_"){
			underlineNum++;
		}
	}

	getPossibleWordsToList(p,c);
	//This function will add all possible word to the possibleList
	//also corresponding scores to the scoreList

	if(possibleList.length == 0){
		//if nothing found
		alert("Sorry, no match to a valid word!");
	}else{
		//Then find the highest score one
		var highestScoreIndex=0;
		var highestScore=0;
		for(i = 0; i< possibleList.length; i++){
			console.log(" "+possibleList[i]+" "+scoreList[i]);
			if(highestScore< scoreList[i]){
				highestScore = scoreList[i];
				highestScoreIndex = i;
			}
		}
		var WORD = possibleList[highestScoreIndex];
		var wordAsArray = WORD.toUpperCase().split("");
		
		for (i = 0; i < wordAsArray.length; i++) {
			var underlineUsed = true;
			for(ii=0; ii<YOUR_HAND.length; ii++){
				console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
				if(YOUR_HAND[ii].letter == wordAsArray [i]){
					if(!YOUR_HAND[ii].used){
						console.log("     " + YOUR_HAND[ii].letter + "<-Found");
						YOUR_HAND[ii].used = true;
						underlineUsed = false;
						break;
					}
				}
			}
			if(underlineUsed&&(underlineNum>0)){
				for(ii=0; ii<YOUR_HAND.length; ii++){
					if(YOUR_HAND[ii].letter == "_"){
						underlineNum--;
						YOUR_HAND[ii].used = true;
						break;
					}
				}
			}
		}
		successfullyAddedWord(WORD);
		possibleList = new Array();
		scoreList = new Array();
	}
		
}

//This is a class to store score of a prefix at the same thime
function prefix(score,letters){
	this.score = score;
	this.letters = letters;
}

//The function to add words
//Using recursion
function getPossibleWordsToList(p,c){
	if(c.length == 1){
		if(c[0].letter == "_"){//deal with the underline situation
			for(var i = 0; i< 26; i++){
				var str1 = p.letters + character[i];
				if(possibleList.indexOf(str1)<=-1 && isThisAWord(str1)){
					possibleList[possibleList.length] = str1;
					scoreList[scoreList.length] = p.score;
				}
			}
		}else{
			var str1 = p.letters+c[0].letter;
			if(possibleList.indexOf(str1)<=-1 && isThisAWord(str1)){
				possibleList[possibleList.length] = str1;
				scoreList[scoreList.length] = p.score+c[0].pointsWhenLettersUsed;
			}
		}	
		
	}else{
		for(var i = 0; i<c.length; i++){
			if(c[i].letter == "_"){//deal with the underline situation
				for(var ii = 0; ii< 26; ii++){
					var str2 = p.letters+character[ii];
					if(possibleList.indexOf(str2)<=-1 && isThisAWord(str2)){
						possibleList[possibleList.length] = str2;
						scoreList[scoreList.length] = p.score;
						
					}
				}
				
			}else{
				var str2 = p.letters+c[i].letter;
				if(possibleList.indexOf(str2)<=-1 && isThisAWord(str2)){
					possibleList[possibleList.length] = str2;
					scoreList[scoreList.length] = p.score+c[i].pointsWhenLettersUsed;
					
				}
			}
			var cc = [].concat(c);
			cc.splice(i,1);
			var score = p.score+c[i].pointsWhenLettersUsed;
			getPossibleWordsToList(new prefix(score,str2),cc);
		}
	}
}

function humanFindWordToUse(){
	
	 var humanFoundWord = $( "#human-word-input").val();
	 console.log("Checking human workd of:" + humanFoundWord);

	 var underlineNum = 0;//found out how many underline in a word
	 for(ii = 0 ; ii < YOUR_HAND.length; ii++){
		 if(YOUR_HAND[ii].letter == "_"){
			 underlineNum++;
		 }
	 }
	 if(humanFoundWord.indexOf("_") >= 0 && underlineNum != 0){
	 	//if there is at least one underline in a word
	 	//we must think about all possible combination of words
	 	//testUnderline is what can find out the highest score of
	 	//certain word of users
	   testUnderline(humanFoundWord, underlineNum);
	 }else{
		 if(isThisAWord(humanFoundWord)){
			 if(haveLettersForWord(humanFoundWord)){
				 successfullyAddedWord(humanFoundWord);
			 }else{
				 alert(humanFoundWord + " - Do not have the letters for this word");
			 }
		 }else{
			 alert(humanFoundWord + " is not a valid word.");
		 }
	 }
		
}

function testUnderline(word,underlineNum){
	var wordAsArray = word.toUpperCase().split("");
	var underlineNumber = 0;
	var wordList = new Array();
	var str;
	var highestScoreIndex=0;//Store the highest scores' index of list
	var highestScore=0;
	for (i = 0; i < wordAsArray.length; i++) {
		if(wordAsArray[i] == "_"){
			underlineNumber++;
			if(wordList.length == 0){
				for(var iii = 0 ; iii < 26 ; iii++){
					wordList[iii] = character[iii];
				}
			}else{
				var list = new Array();
				
				for(var ii = 0; ii<wordList.length; ii++){
					list[ii] = new Array();
					for(var iii = 0 ; iii < 26 ; iii++){
						list[ii][iii] = wordList[ii] + character[iii];
					}
				}
				wordList = new Array();
				for(var ii = 0; ii<list.length; ii++){
					for(var iii=0;iii<list[ii].length;iii++){
						wordList[wordList.length] = list[ii][iii];
					}
				}
			}
			
		}else{
			if(wordList.length == 0){
				wordList[0] = wordAsArray[i];
			}else{
				for(var ii = 0; ii<wordList.length; ii++){
					wordList[ii] += wordAsArray[i];
				}
			}
			
		}
	}
	if(underlineNumber> underlineNum){
		//if user uses more than given underline
		alert(word + " used more '_' than given.");
	}else{
		for (i = 0; i < wordList.length; i++) {
			if(isThisAWord(wordList[i])){
				wordAsArray = wordList[i].toUpperCase().split("");
				var scores=0;
				for(var ii=0; ii < wordAsArray.length; ii++){
					for(var iii=0; iii < YOUR_HAND.length; iii++){
						if(wordAsArray[ii]==YOUR_HAND[iii].letter && YOUR_HAND[iii].used == false){
							scores += YOUR_HAND[iii].pointsWhenLettersUsed;
							YOUR_HAND[iii].used = true;
						}
					}
				}
				for(var iii=0; iii < YOUR_HAND.length; iii++){
					YOUR_HAND[iii].used = false;
				}
				if(highestScore < scores){
					highestScore = scores;
					highestScoreIndex = i;
				}
			}
		}
		if(highestScore == 0){
			 alert(word + " can not match any valid word.");
		}else{
			wordAsArray = wordList[highestScoreIndex].toUpperCase().split("");
			var scores=0;
			for(var ii=0; ii < wordAsArray.length; ii++){
				for(var iii=0; iii < YOUR_HAND.length; iii++){
					if((wordAsArray[ii]==YOUR_HAND[iii].letter && YOUR_HAND[iii].used == false)
							||(YOUR_HAND[iii].letter == "_"&&YOUR_HAND[iii].used == false&&underlineNumber>0)){
						YOUR_HAND[iii].used = true;
					}
				}
			}
			successfullyAddedWord(wordList[highestScoreIndex]);
		}
		
	}
	
} 

function successfullyAddedWord(foundWord){
	$( "#word-history-list").append("<li>" + foundWord + "</li>");
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	$( "#human-word-input").val('');
	
}

function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}


function takeOutUsedLetters(){
	
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			addToScore(YOUR_HAND[ii]);
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
	
}

function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	var wordAsArray = aProposedWord.toUpperCase().split("");
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					
				}
			}
		}
		
		
		if(!foundLetter){
			resetHand();
			return false;
		}
	}
	
	return true;
}


function resetHand(){
	
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
	}
}

function isThisAWord(aProposedWord){
	  if (Word_List.isInList(aProposedWord)) {
	      return true;
	  }
	  return false;
}

function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();

	$( "#bag-number").html(BAG_OF_LETTERS.length);
}

function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}

$(document).ready(function() {
	startGame();
	
	$("#find-word-button").click(function() {
		findWordToUse();
	});
	$("#human-find-word-button").click(function() {
		humanFindWordToUse();
	});
	$("#retire-hand-button").click(function() {
		retireHand();
	});
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
});