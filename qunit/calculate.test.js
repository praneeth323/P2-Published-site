//Qunit.module('MAIN MODULE',{})

QUnit.test( 'hello test', assert => {
    assert.equal( conversiontest(3000),3, 'Passed!' )
    assert.equal(conversiontest(2500),2.5,'Passed!')
    assert.equal(conversiontest(-2500),'Not valid input','Failed!')
    assert.equal(conversiontest(500),0.5,'Passed!')
    assert.equal(conversiontest(1200),1.2,'Passed!')
  });