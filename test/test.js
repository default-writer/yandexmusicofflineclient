const expect = require('chai').expect;
const sqlite3client = require('./sqlite3client');
const sqlite3 = require('sqlite3').verbose();

describe('open sqlite3 database', function () {
  it('should open sqlite3 database', function () {

    // 1. ARRANGE
    let a = 1;
    let b = 2;
    let c;

    let open_connection = function(connection) {
      if (connection.state === 'closed') {
        connection.db = new object();
        connection.state = 'open';
      }
    }


    // 2. ACT
    let client = sqlite3client(open_connection);
    client.connection = {};

    // 3. ASSERT
    expect(c).to.be.equal(3);
  });
});
