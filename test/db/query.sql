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