function shortest_word(sentence) {
	var word = sentence.split(" ");
	var shortest = "***********************";
	console.log(word)
	for (var i = 0; i < word.length; i++) {
		var newString = word[i];
		 if (newString.length < shortest.length) {
		 	shortest = newString;
		 }
	}
			
	return shortest + " " + shortest.length;	
};

console.log(shortest_word('Nomawethu Ntombi Nomvula'));