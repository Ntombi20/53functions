function helloWorld(){
	return "hello world";
};

	test("make sure that helloWorld return 'hello world'", function(assert) {
		assert.equal( helloWorld(), "hello world");
	});