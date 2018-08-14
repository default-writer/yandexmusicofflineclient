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
