USE Pick_Up_Group_DB;

INSERT INTO users (email, password, userName)
VALUES ("fake@email.com", "Password123", "PianoMan"), ("fake2@email.com", "Password123", "SongBird"), ("fake3@email.com", "Password123", "DrumsOnDesks"), ("fake4@email.com", "Password123", "GuitarGyro"), ("fake5@email.com", "Password123", "Rockstar2000") ;

INSERT INTO band (bandName, bandPicture, city, state, zipcode, UserId)
VALUES ("The Wonders", "http://absfreepic.com/absolutely_free_photos/small_photos/rock-band-on-stage-5184x3456_53173.jpg", "Anaheim", "California", 92805, 4), ("Kittensica", "https://images.squarespace-cdn.com/content/v1/5501bec6e4b02c9014d45223/1470260591124-OXMUZ5UGFIM6BTKIV2OB/ke17ZwdGBToddI8pDm48kC6ynxTxuqK_SAELPUnqIdZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz1kkP7csDUbQ66mFVGHMEKwgYDqYVNDayPKKc42ydPtqg4znOkv7iOVaRAaPG9PTk/image-asset.jpeg", "Irvine", "California", 92603, 5) ;

INSERT INTO Pick_Up_Group_DB.member (memberName, city, state, zipcode, profilePicture, createdByUserId, UserId)
VALUES 
("Robert", "Anaheim", "California", 92805 ,"https://i0.wp.com/www.learning-mind.com/wp-content/uploads/2017/02/piano-players.jpg?fit=850%2C567&ssl=1", 1, 1), 
("Laura", "Irvine", "California", 92603, "https://previews.123rf.com/images/subbotina/subbotina1304/subbotina130400018/18867382-beautiful-singing-girl-beauty-woman-with-microphone-over-white.jpg", 2, 2), 
("Duke", "Anaheim", "California", 92805, "https://i.ytimg.com/vi/R9rERx4Srg0/maxresdefault.jpg", 3, 3), 
("Mark", "Irvine", "California", 92603, "https://www.robotbutt.com/wp-content/uploads/2016/09/Playing-Guitar-at-Party-e1473850428650.jpg", 4, 4), 
("Suzy", "Anaheim", "California", 92805, "https://cdn.vox-cdn.com/thumbor/PxJXH2jJerSyrIHmpLnxCcLmkoE=/0x0:785x534/1200x800/filters:focal(331x105:455x229)/cdn.vox-cdn.com/uploads/chorus_image/image/57647679/Screen_Shot_2017_11_17_at_12.30.10_AM.0.png", 4, null), 
("Johnny", "Anaheim", "California", 92805, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ToBRmN4SvgatLIpnMp7M6uY2461S_ETG8EcmNexq1tIkCB4nvQ&s", 4, null), 
("Jen", "Irvine", "California", 92603, "https://www.womensbeautylife.com/albums/Asian_hairstyles/image_of_Asian_punk_hairstyle_for_girls.jpg", 5, 5), 
("Maria", "Irvine", "California", 92603, "https://i.ytimg.com/vi/U7OZcgwLRcc/hqdefault.jpg", 5, null);


INSERT INTO BandMember (instrument, BandId, MemberId)
VALUES ("Guitar", 1, 4), ("Keyboard", 1, 5), ("Guitar-Bass", 1, 6), ("Voice-Alto", 2, 7), ("Drums", 2, 8);

INSERT INTO memberinstrument (MemberId, instrument)
VALUES (1, "Piano"), (2, "Voice-Soprano"), (3, "Drums"), (4, "Guitar"), (5, "Keyboard"), (6, "Guitar-Bass"), (7, "Voice-Alto"), (8, "Drums");


INSERT INTO lfm (youtubeLink, city, state, zipcode, ad, instrument, BandId,  MemberId)
VALUES 
("OtSCKYLur1k", "Irvine", "California", 92603, "Hi all.  Looking for a female lead singer to make us stars!", "Voice-Soprano", 1, 4), 

("IbfJivZm3Xo", "Anaheim", "California", 92805, "We're an awesome girl group looking for a guitarist!", "Guitar", 2, 7), 

("IbfJivZm3Xo", "Anaheim", "California", 92805, "Girl Group here -- also looking for a soprano...", "Voice-Soprano", 2, 7);

INSERT INTO lfg (youtubeLink, city, state, zipcode, distance, ad, instrument, MemberId)
VALUES ("GBTEjwXB0GY", "Irvine", "California", 92603, 5, "Classically trained pianist looking to join a folk band or a classical group", "Piano", 1), ("IwzwPy69H5E", "Anaheim", "California", 92805, 20, "Powerful vocals here - looking to be the lead singer of a rock or alternative band", "Voice-Soprano", 2), ("8vYnOvxuXuQ", "Anaheim", "California", 92805, 15, "I rock the drums, lemme join your band", "Drums", 3);