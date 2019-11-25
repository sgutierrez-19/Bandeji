USE Pick_Up_Group_DB;

INSERT INTO users (email, password, userName)
VALUES ("test@test.com", "Password123", "MusicianGuy2019");

INSERT INTO band (bandName, city, state, zipcode)
VALUES ("The Rolling Stones", "Los Angeles", "California", 12345);

INSERT INTO Pick_Up_Group_DB.member (memberName, city, state, zipcode, profilePicture, UserId, createdByUserId)
VALUES ("Cher", "Orange", "California", 12345 ,"https://cnet4.cbsistatic.com/img/F15ILAKB6Fex-98zkD1Sk0bimjU=/940x0/2019/11/19/2eddb56d-56a3-4569-874e-32cd61180d6a/babyyoda2.jpg", 1, 1), ("Sonny Bono", "Riverside", "California", 54321, NULL, NULL, 1);

INSERT INTO Pick_Up_Group_DB.member (memberName, city, state, zipcode, createdByUserId)
VALUES ("Mick Jagger", "Fullerton", "California", 12345, 3), ("Ian Stewart", "Brea", "California", 54321, 3), ("Dick Taylor", "Irvine", "California", 12345, 3);

INSERT INTO lfm (youtubeLink, city, state, zipcode, ad, BandId, instrument, MemberId)
VALUES ("https://www.youtube.com/watch?v=2RtI5UEZlzU", "Anaheim", "California", 54321, "Hi, we're the Rolling Stones and are looking for a lead singer", 1, "Voice-Any", 1);

INSERT INTO lfg (youtubeLink, city, state, zipcode, distance, ad, instrument, MemberId)
VALUES ("https://www.youtube.com/watch?v=2RtI5UEZlzU", "Anaheim", "California", 54321, 25, "Hi, I'm Cher and I'm looking to join a band", "Voice-Soprano", 1), ("https://www.youtube.com/watch?v=2RtI5UEZlzU", "Brea", "California", 54321, 5, "Hey all, Sonny here.  Trying to find a band to sing with at the local bars", "Voice-Tenor", 2), ("https://www.youtube.com/watch?v=2RtI5UEZlzU", "Brea", "California", 54321, 5, "Making another ad because I'd also like to may just do a vocal duo with a Soprano or Alto.", "Voice-Tenor", 2);

INSERT INTO BandMember (BandId, MemberId, instrument)
VALUES (1, 3, "Guitar"), (1, 4, "Piano"), (1, 5, "Guitar-Bass");

INSERT INTO memberinstrument (MemberId, instrument)
VALUES (1, "Voice-Soprano"), (1, "Accordion"), (2, "Voice-Tenor"), (3, "Guitar"), (4, "Piano"), (5, "Guitar-Bass");

INSERT INTO users (email, password, userName)
VALUES ("testing@test.com", "Password123", "MusicianGirl9102");