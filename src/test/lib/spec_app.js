describe("Validated User",function(){
	describe("Given a User",function(){
		it("I want to validate username constraints",function(){
			expect(validateLengthUser("!#$%qwer")).toBe(true);
		});
	});
});
describe("Short name",function(){
	describe("Given a User",function(){
		it("I want to validate username is shorter them 4",function(){
			expect(validateLengthUser("abc")).toBe(false);
		});
	});
});

describe("Long name",function(){
	describe("Given a User",function(){
		it("I want to validate username is longer them 30",function(){
			expect(validateLengthUser("abc123qwe3abc123qwe3abc123qwe3")).toBe(false);
		});
	});
});

describe("Wrong character in name",function(){
	describe("Given a User",function(){
		it("I want to validate alphanumeric username",function(){
			expect(validateAlphanumericUser("!#$%qwer")).toBe(false)
		});
	});
});

describe("Empty name ",function(){
	describe("Given a User",function(){
		it("I want to validate alphanumeric username",function(){
			expect(validateAlphanumericUser("")).toBe(false)
		});
	});
});