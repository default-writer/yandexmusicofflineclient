SELECT *
  FROM (
           SELECT *
             FROM (
                      SELECT *
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
 WHERE alb.Id = tr.AlbumId;
