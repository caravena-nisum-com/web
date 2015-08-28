describe("Login Happy Path",function(){
	describe("Given a User",function(){
		it("I want to validate username constraints",function(){
			expect(validateLengthUser("caravena")).toBe(true);
		});
	});
});

describe("Login with Validation errors",function(){
	describe("Given a User",function(){
		it("I want to validate username is shorter them 4",function(){
			expect(validateLengthUser("abc123")).toBe(false)
		});
	});
});

describe("Login with Validation errors",function(){
	describe("Given a User",function(){
		it("I want to validate username is longer them 30",function(){
			expect(validateLengthUser("abc123qwe3abc123qwe3abc123qwe3")).toBe(false);
		});
	});
});

describe("Login with Validation errors",function(){
	describe("Given a User",function(){
		it("I want to validate alphanumeric username",function(){
			expect(validateAlphanumericUser("!#$%qwer")).toBe(false)
		});
	});
});