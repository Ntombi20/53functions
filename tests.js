test("make sure that helloWorld return 'hello world'", function(assert) {
		assert.equal( helloWorld(), "hello world");
	});


test("make sure that hello_uppercase return 'Hello' and the USERNAME in u", function(assert) {
		assert.equal( hello_uppercase("ntombi20"), "Hello, NTOMBI20");
		assert.equal( hello_uppercase("andre"), "Hello, ANDRE");

	});


test("make sure that hello_jeo return 'Hello, Ntombi' but if the name is jeo or bob return 'Hello!' only.' ", function(assert) {
	assert.equal( hello_joe("Ntombi"), "Hello, Ntombi");
	assert.equal( hello_joe("Joe"), "Hello!");
	assert.equal( hello_joe("Bob"), "Hello!");
});

test("make sure that it take a number and return a list of numbers from 1 to n", function(assert) {
  	assert.deepEqual( number_list(10), [1,2,3,4,5,6,7,8,9,10]);
});

test("make sure that it take a number and return a sum of numbers from 1 to n", function(assert) {
	assert.deepEqual( sum_numbers(5), 15);
});

test("make sure that it takes a string parameter and return the length", function(assert) {
   assert.equal( length("I love coding"), 13);
});

test("make sure that it takes a string parameter and returns the supplied parameter in hello_uppercase", function(assert) {
	assert.equal( uppercase("i have a beautiful sister, beauty"), "I HAVE A BEAUTIFUL SISTER, BEAUTY");
});

test("make sure that it take a string parameter and return the reverse string parameter", function(assert) {
	assert.equal( reverse("I miss Beauty_!"), "!_ytuaeB ssim I");
});

test("make sure that it takes a number parameter and returns a list of 'hello world' entries equal to the number supplied", function(assert) {
	assert.deepEqual( hello_list(5), ["hello world", "hello world", "hello world", "hello world", "hello world"]);
});

test("make sure that it given a list of numbers returns the highest and lowest numbers in the list", function(assert) {
	assert.deepEqual( high([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 25);
    assert.deepEqual( Low([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 1);
});

test("make sure that it take a sentence as a parameter and return the number of words in the sentence.", function(assert) {
   assert.equal( count_words("It cost nothing to be nice"), 6);
});

test("make sure that it take a sentence as a parameter and returns the sum of the length of words in the sentence", function(assert) {
	assert.equal( sum_words_len("I feel like coding"), 18);
});

test("make sure that it take a sentence as a parameter and return the longest word and the length of the sentence", function(assert) {
 	assert.equal( longest_word("Nomawethu Ntombi Nomvula"), 'Nomawethu 9');
});

test("make sure that it take a sentence as a parameter and return the shortest word and the length of the sentence", function(assert) {
 	assert.equal( shortest_word("Nomawethu Ntombi Nomvula"), 'Ntombi 6');
});

test("make sure that it takes a sentence as a parameter and return both the average word length rounded up and down", function(assert) {
 	assert.equal(word_length("It cost nothing to be nice"), 4);
});

// test("make sure that it take a sentence as a parameter and return the average word length rounded up", function(assert) {
//  	assert.equal(average("53 function is the best"), '');
// });


// test("", function(assert) {
//  	assert.equal(,);
// });

// test("", function(assert) {
//  	assert.equal(,);
// });

// test("", function(assert) {
//  	assert.equal(,);
// });