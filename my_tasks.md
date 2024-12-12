# Felipi

## vou deixar aqui os scripts do banco que fiz como primeiro modelo, o nome da tabela grupos ficou como teams pois n sei pq o workbench n deixa colocar como groups.

//NOVA TABELA

CREATE TABLE contacts (
    contact_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,          -- O usuário que adiciona o contato
    contact_user_id INT NOT NULL,  -- O usuário que é o contato
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (contact_user_id) REFERENCES users(user_id),
    UNIQUE (user_id, contact_user_id) -- Garante que o mesmo contato não seja adicionado várias vezes
);

// VALORES PRA USERS

insert into users (name, email, pass) values ('FELIPI GABRIEL HAAG MACHADO', 'felipi@gmail.com', '12345678'),
											 ('GUSTAVO NARA', 'gustavo@gmail.com', '123456789'),
                                             ('ALEXANDRE PERNA FINA', 'alexandre@gmail.com', '12345678910'),
                                             ('OSIAS ORELHA DE ABANO', 'osias@gmail.com', '98765431'),
                                             ('ÂNTONIO JOSÉ DE ANCHIETA', 'antonim@gmail.com', '11558899'),
                                             ('LÁZARO BARBOSA', 'escondido@gmail.com', 'cadevc123');




create database db_dev_central;
use db_dev_central;

create table Users (
	user_id int primary key not null auto_increment,
	name varchar(50) not null, 
	description varchar(200),
	email varchar(30) not null,
	pass varchar(20) not null,
	profile_picture longtext
);


create table teams (
	group_id int primary key not null auto_increment,
    organization_id int,
    foreign key(organization_id) references organizations(organization_id)
);

create table Chats (
	chat_id int primary key not null auto_increment,
    name varchar(45), 
    read_only varchar(45),
    is_group tinyint,
    group_id int,
    foreign key(group_id) references teams(group_id)
);

create table Organizations (
 organization_id int primary key not null auto_increment,
 name varchar(100) not null
);

create table MemberOrganization (
	memor_id int primary key not null auto_increment,
    member_id int,
    organization_id int,
	foreign key(member_id) references Users(user_id),
    foreign key(organization_id) references organizations(organization_id)
);

create table managing (
	menaging_id int primary key not null auto_increment,
    users_idUser int,
    organizations_idOrganization int,
	foreign key(users_idUser) references Users(user_id),
    foreign key(organizations_idOrganization) references organizations(organization_id)
);

create table MemberChat (
	mc_id int primary key not null auto_increment,
    member_id int,
    chat_id int,
    foreign key(member_id) references Users(user_id),
    foreign key(chat_id) references Chats(chat_id)
);

create table messages (
	message_id int primary key not null auto_increment,
    body varchar(200),
    time_stamp DATETIME,
    author_id int, 
    chat_id int,
    foreign key(author_id) references Users(user_id),
    foreign key(chat_id) references Chats(chat_id)
);