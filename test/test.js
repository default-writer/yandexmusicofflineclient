const expect = require('chai').expect;

const dbo = require('../dbo/dbo');
const sqlite3 = require('sqlite3').verbose();

const sqlite3Database = dbo({
  open: (context) => new sqlite3.Database(context.source, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      throw new Error("db error: " + err.message);
    }
  }),
  query: (db, sql) => {
    db.each(sql, (err, row) => {
      if (err) {
        throw new Error("db error: " + err.message);
      }
      console.log(row);
    })
  },
  close: (db) => db.close((err) => {
    if (err) {
      throw err;
    }
  })
});

const global_connection = {};

let connection = global_connection;
connection.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

// 1 1`2 2`

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.db).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

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
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.db).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.db).to.be.equal(undefined);
  });
});

// 1 2 1`2`

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.db).not.to.be.equal(undefined);
  });
});

describe('open sqlite3 database 2', function () {
  it('should open sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.db).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

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
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.db).to.be.equal(undefined);
  });
});

// 1 2 2` 1`

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.db).not.to.be.equal(undefined);
  });
});

describe('open sqlite3 database 2', function () {
  it('should open sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.db).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.db).to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

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
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.db).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.db).to.be.equal(undefined);
  });
});

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.db).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

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
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.db).not.to.be.equal(undefined);
  });
});

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.db).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 2', function () {
  it('should close sqlite3 database 2', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.db).to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

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
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.open(connection);

    // 3. ASSERT
    expect(connection.db).not.to.be.equal(undefined);
  });
});

describe('open sqlite3 database 1', function () {
  it('should open sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

    // 2. ACT
    database.open();

    // 3. ASSERT
    expect(database.db).not.to.be.equal(undefined);
  });
});

describe('close sqlite3 database 1', function () {
  it('should close sqlite3 database 1', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';

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
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.db).to.be.equal(undefined);
  });
});

// query

describe('open sqlite3 database', function () {
  it('should open sqlite3 database', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.open(connection);
    /*
      SELECT DISTINCT * FROM (SELECT tr.TrackId track,
      alb.CoverUri url,
      alb.Title titile,
      TrackPosition position,
      name,
      alb.ArtistsString album,
      alb.Year year,
      alb.AlbumVersion,
      alb.GenreId genre
  FROM (
  SELECT *
   FROM (
            SELECT Id, Title name
              FROM T_Track AS tr
             WHERE tr.IsOffline = '1'
        )
        tr,
        T_TrackAlbum ta,
        T_TrackArtist art
  WHERE tr.Id == art.TrackId AND 
        tr.Id == ta.TrackId
  )
  tr,
  T_Album alb
  WHERE alb.Id = tr.AlbumId
  ORDER BY alb.Id, position);
    */
    connection.sql = `
    SELECT DISTINCT tr.TrackId file,
    alb.CoverUri url,
    alb.Title titile,
    tr.TrackPosition position,
    tr.Title title,
    art.Name || ' - ' || alb.ArtistsString autor,
    alb.Year year,
    alb.AlbumVersion album,
    alb.GenreId genre
FROM (
SELECT Title,
      art.ArtistId,
      ta.TrackId,
      ta.TrackPosition,
      ta.AlbumId
 FROM T_Track AS tr
      INNER JOIN
      T_TrackAlbum ta ON tr.Id = ta.TrackId
      INNER JOIN
      T_TrackArtist art ON tr.Id = art.TrackId
WHERE tr.IsOffline = '1'
)
tr
INNER JOIN
T_Album alb ON tr.AlbumId = alb.Id
INNER JOIN
T_Artist art ON tr.ArtistId = art.Id
ORDER BY alb.Id,
position;
`;
    database.query(connection, (row) => {
      console.log(row);
    });

    // 3. ASSERT
    expect(connection.sql).not.to.be.equal(undefined);
  });
});


describe('close sqlite3 database', function () {
  it('should close sqlite3 database', function () {

    // 1. ARRANGE
    let database = sqlite3Database;
    database.source = './test/db/musicdb_3f0b48061129292a1244c536233a24ec.sqlite';
    let connection = global_connection;

    // 2. ACT
    database.close(connection);

    // 3. ASSERT
    expect(connection.db).to.be.equal(undefined);
  });
});