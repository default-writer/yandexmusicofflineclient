var expect = require('chai').expect;
var lazy = require('@root_admin/lazyeval/lazy');
var sqlite3client = require('./sqlite3client');

describe('open sqlite3 database', function () {
  it('should open sqlite3 database', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;
    let c;

    // 2. ACT
    let func = lazy((f) => c = f.a + f.b);
    func.a = a;
    func.b = b;

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});
