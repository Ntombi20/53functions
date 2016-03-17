function shortest(sentence) {
	var word = sentence.split(" ");

	var shortest = "";

	for (var i = 0; word.length - 1; i--) {
		var newString = word[i].split(" ").join(" ").split(" ").slice(",");

		if (newString.length < shortest) {
			shortest = newString[i] + " " + newString[i].length;
		}
	
	}
			
	return shortest;	
};