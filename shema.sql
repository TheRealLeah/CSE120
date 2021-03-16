CREATE TABLE Users (
  useremail varchar(40) not null,
  username varchar(20) not null,
  userpword varchar(20) not null,
  userID int primary key
);

CREATE TABLE Organization (
  orgemail varchar(40) not null,
  orgname varchar(20) not null,
  orgpword varchar(20) not null,
  orgID int primary key
);

create table Event (
  eventName varchar(30) not null,
  eventTime time not null,
  eventDate date not null,
  eventDesc char(200) not null,
  eventLocation varchar (20) not null,
  hostID int,
  FOREIGN KEY (hostID) references Organization(orgID)
);

insert into Users (userID,username,userpword, useremail) 
VALUES(1,"Joe Cool","kjasdlkjsal","jcool@gmail.com"),
      (2,"John Doe","ljljoisadas","jdoe@gmail.com"),
      (3,"Jack Quick","asldjasdpi","jquick@gmail.com"),
      (4,"Sally May","asdjpaosd","smay@gmail.com"),
      (5,"Abby Apples","asjdasdjj","aapples@gmail.com"),
      (6,"Lyrik Note","ijonasdlp","lnote@gmail.com"),
      (7,"Bob Builder","Jashldjk","bbuilder@gmail.com"),
      (8,"Daisy Fields","askdjhuc","dfields@gmail.com"),
      (9,"Loch Lake","aslidkjlk","llake@gmail.com"),
      (10,"Savannah Wild","opioeihasd","swild@gmail.com"),
      (11,"Latte Sweets","asdguijp[ d","lsweets@gmail.com"),
      (12,"Ruby Rose","mpugkjoqw.,w","rrose@gmail.com"),
      (13,"Onyx Kingston","iyuigshmb;","okingston@gmail.com"),
      (14,"Lara Croft","asywu8qas","lcroft@gmail.com"),
      (15,"Angel Benevolence","bnmbxzip","abenevolence@gmail.com"),
      (16,"Check Gecko","asjhk9y7gk","cgeck@gmail.com"),
      (17,"Avril Levy","piuoiyhb8","alevy@gmail.com"),
      (18,"Amethyst Connors","jpoipoua","aconnors@gmail.com"),
      (19,"Eloise Capello","aspoiuqmn","ecapello@gmail.com"),
      (20,"Summer Anderson","tuewp921jk","sanderson@gmail.com");

insert into Organization (orgID,orgname,orgpword, orgemail) 
VALUES(1,"Red Cross","skfdlj","rcross@gmail.com"),
      (2,"Healthy House","ekljl","hh@gmail.com"),
      (3,"Food Bank","asfffds","foodbank@gmail.com"),
      (4,"Bobcat Pantry","fdsfaf","bpantry@gmail.com"),
      (5,"United Way of Merced","kuighg","uwaymerced@gmail.com"),
      (6,"Salvation Army","bdeytrrt","sarmy@gmail.com");

insert into Event (eventName, eventTime, eventDate, eventDesc, eventLocation, hostID) 
VALUES("Food Donation Frenzy", '12:00:00', '3-19-2021', "Come help us give out food", "Merced, CA", 3),
      ("We Love Nature", '4:00:00', '3-22-2021', "Help us plant new trees and bushes", "Merced, CA", 5);

--update Users
--set password = newpassword
--where name = this.user
update Users
set userpword = 'coolpassword'
where username = 'Joe Cool';

update Organization
set orgpword = 'food is good'
where orgname = 'Food Bank';

--delete from Users
--where name = this.user
delete from Users
where username = 'Ruby Rose';
