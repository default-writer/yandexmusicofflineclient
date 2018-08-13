select t.Title, t.CoverUri, album.TrackPosition from 
T_Track as t,
 T_TrackAlbum as album
where 
 album.TrackId == t.Id
order by album.AlbumId;


select art.TrackId ArtistrTrackId, Title, DurationMillis, Available, IsOffline, CoverUri, alb.TrackId AlbumTrackId from 
 T_Track as t,
 T_TrackAlbum as alb,
 T_TrackArtist as art
where alb.AlbumVolume not null 
and t.IsOffline = '1'
and alb.TrackId == t.Id;


/*select s.Name from T_Artist s where s.Id = tr.ArtistId) artist*/

select * from (
    select * from (
        select * from (
            select * from
             T_Track as tr
            where
            tr.IsOffline = '1'
        ) tr, T_TrackArtist art
        where tr.Id == art.TrackId
    ) tr, T_TrackAlbum ta
    where tr.Id == ta.TrackId
) tr, T_Album  alb
where alb.Id = tr.AlbumId
