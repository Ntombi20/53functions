function hello_uppercase(USERNAME){
    return "Hello, " + USERNAME;

};

	test("make sure that Hello return 'Hello' and the USERNAME", function(assert) {
		assert.equal( hello_uppercase("NTOMBI20"), "Hello, NTOMBI20");

	});


