const expect = require('chai').expect;

const dbo = require('./sqlite3client').Database;
const sqlite3 = require('sqlite3').verbose();

const sqlite3Database = dbo({
  open: () => new sqlite3.Database('./test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite', (err) => {
    if (err) {
      throw err;
    }
  }),
  close: (db) => db.close((err) => {
    if (err) {
      throw err;
    }
  })
});
const global_connection = {};

// 1 1`2 2`

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.dbo).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.close();

    // 3. ASSERT
    expect(database.db).to.be.equal(undefined);
  });
});

describe('open sqlite3 database 2', function () {
  it('should open sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.dbo).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.dbo).to.be.equal(undefined);
  });
});

// 1 2 1`2`

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.dbo).not.to.be.equal(undefined);
  });
});

describe('open sqlite3 database 2', function () {
  it('should open sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.dbo).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.close();

    // 3. ASSERT
    expect(database.db).to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.dbo).to.be.equal(undefined);
  });
});

// 1 2 2` 1`

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.dbo).not.to.be.equal(undefined);
  });
});

describe('open sqlite3 database 2', function () {
  it('should open sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.dbo).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.dbo).to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.close();

    // 3. ASSERT
    expect(database.db).to.be.equal(undefined);
  });
});

// 2 2`1 1`

describe('open sqlite3 database 2', function () {
  it('should open sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.dbo).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.dbo).to.be.equal(undefined);
  });
});

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.dbo).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.close();

    // 3. ASSERT
    expect(database.db).to.be.equal(undefined);
  });
});

// 2 1 2`1`

describe('open sqlite3 database 2', function () {
  it('should open sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.dbo).not.to.be.equal(undefined);
  });
});

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.dbo).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.dbo).to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.close();

    // 3. ASSERT
    expect(database.db).to.be.equal(undefined);
  });
});

// 2 1 1`2`

describe('open sqlite3 database 2', function () {
  it('should open sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.dbo).not.to.be.equal(undefined);
  });
});

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.dbo).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;

    // 2. ACT
    database.close();

    // 3. ASSERT
    expect(database.db).to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.dbo).to.be.equal(undefined);
  });
});