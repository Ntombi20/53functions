test("make sure that helloWorld return 'hello world'", function(assert) {
		assert.equal( helloWorld(), "hello world");
	});


test("make sure that hello_uppercase return 'Hello' and the USERNAME", function(assert) {
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