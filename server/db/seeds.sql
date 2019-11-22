USE Pick_Up_Group_DB;

INSERT INTO users (email, password, userName)
VALUES ("test@test.com", "Password123", "MusicianGuy2019");

INSERT INTO band (bandName, location)
VALUES ("The Rolling Stones", "Los Angeles");

INSERT INTO Pick_Up_Group_DB.member (memberName, location, profilePicture, UserId)
VALUES ("Cher", "Orange", "https://cnet4.cbsistatic.com/img/F15ILAKB6Fex-98zkD1Sk0bimjU=/940x0/2019/11/19/2eddb56d-56a3-4569-874e-32cd61180d6a/babyyoda2.jpg", 1), ("Sonny Bono", "Riverside", NULL, NULL);

INSERT INTO Pick_Up_Group_DB.member (memberName, location)
VALUES ("Mick Jagger", "Fullerton"), ("Ian Stewart", "Brea"), ("Dick Taylor", "Irvine");

INSERT INTO instrument (instrumentName)
VALUES ("Guitar"), ("Bass Guitar"), ("Keyboard"), ("Piano"), ("Drums"), ("Voice-Any"), ("Voice-Soprano"), ("Voice-Alto"), ("Voice-Tenor"), ("Voice-Bass");

INSERT INTO lfm (youtubeLink, location, ad, BandId, InstrumentId)
VALUES ("https://www.youtube.com/watch?v=2RtI5UEZlzU", "Anaheim", "Hi, we're the Rolling Stones and are looking for a lead singer", 1, 6);

INSERT INTO lfg (youtubeLink, location, distance, ad, InstrumentId, MemberId)
VALUES ("https://www.youtube.com/watch?v=2RtI5UEZlzU", "Anaheim", 25, "Hi, I'm Cher and I'm looking to join a band", 6, 1);

INSERT INTO groupmember (BandId, MemberId, InstrumentId)
VALUES (1, 3, 1), (1, 4, 4), (1, 5, 2);

INSERT INTO memberinstrument (MemberId, InstrumentId)
VALUES (1, 7), (2, 9), (3,1), (4,4), (5,2);