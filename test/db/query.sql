SELECT DISTINCT *
  FROM (
           SELECT tr.Id track,
                  alb.CoverUri url,
                  alb.Title titile,
                  position,
                  name,
                  alb.ArtistsString album,
                  alb.Year year,
                  alb.AlbumVersion,
                  alb.GenreId genre
             FROM (
                      SELECT Id,
                             Title name,
                             ta.TrackPosition position,
                             ta.AlbumId
                        FROM T_Track AS tr
                             INNER JOIN
                             T_TrackAlbum ta ON tr.Id = ta.TrackId
                             INNER JOIN
                             T_TrackArtist art ON tr.Id = art.TrackId
                       WHERE tr.IsOffline = '1'
                  )
                  tr,
                  T_Album alb
            WHERE alb.Id = tr.AlbumId
            ORDER BY alb.Id,
                     position
       );
