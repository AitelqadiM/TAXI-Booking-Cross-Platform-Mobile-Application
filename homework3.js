Const ValidBirthDate = (BirthDate) => {
	Let bdate = newbdate; 
	Const regex = /^(0?[1-9]|[12][0-9] | 3[01]) [\/\-](0? [1-9] | 1 [012]) [\/\-]\d{4}$/;

	
	Const isExisting = regex.test(date);
	If(isExisting) {
		Console.log(date);

	}else {
		console.log(‘wrong input’)
	
}

describe("Check BirthDate", () => {
    it(`${regex def}`, () => {
      assert. AssertEquals(bdate, true);
    );
}
