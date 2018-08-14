SELECT DISTINCT * FROM (SELECT tr.TrackId,
    alb.CoverUri,
    alb.Title,
    TrackPosition track,
    Title,
    alb.ArtistsString
FROM (
SELECT *
 FROM (
          SELECT Id, Title trackNum
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
ORDER BY alb.Id,
track);