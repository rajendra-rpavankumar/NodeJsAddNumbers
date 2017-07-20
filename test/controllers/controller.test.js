var expect=require("chai").expect;
var addOp=require("../../controller/operations.js").addOp;

describe('Math', function () {
    describe('#add function', function () {
        it('should returns the result number from the two arguments',function () {
            var result=addOp(1,2);
            expect(result).to.equal(3);
        });
    });
});