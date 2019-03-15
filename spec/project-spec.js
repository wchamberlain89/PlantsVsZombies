import { addToTen } from './../src/js/project.js';

describe('addToTen', function() {
  it('should take two numbers that add to 10', function() {
    let sum = addToTen(2,7);
    expect (sum).toEqual(true);
  });
});
