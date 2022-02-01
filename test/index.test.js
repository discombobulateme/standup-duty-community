const { expect } = require('chai');

  foo = 'bar',
  beverages = { tea: ['chai', 'matcha', 'oolong'] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);


/*
*I does not return a null result
* Add mock to what I expect some person to come back
* make sure dates are progressing
* check for invalid team member -> parse json to see if people exist
* 
*/
