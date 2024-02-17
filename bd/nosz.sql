create database Nosz;
use Nosz;

drop table restaurante;
drop table usuario;
drop table questionario;

create table restaurante (
	id_rest int(4) primary key,
    nm_rest varchar(100) not null,
    email_rest varchar(50) not null unique,
    senha_rest varchar(150) not null,
    logo_rest varchar(200) not null,
    local_rest varchar(150) not null,
    tel_rest char(9) not null,
    cep_rest char(8) not null unique
);
/*
1
:
N
*/
create table usuario (
	id_usuario int(4) primary key,
    nm_usuario varchar(50) not null unique,
    email_usuario varchar(150) not null,
    senha_usuario varchar(50) not null,
    tel_usuario char(9) not null unique,
    cpf_usuario char(11) not null,
    fk_rest_id_rest int(4) references restaurante
);
/*
1
:
N
*/
create table questionario (
	id_quest int(4) primary key,
    resposta1 varchar(650) not null unique,
    resposta2 varchar(900) not null unique,
    resposta3 varchar(60) not null unique,
    resposta4 varchar(60) not null unique,
    resposta5 char(3) not null unique,
    fk_usuario_id_usuario int(4) references usuario
);

delete from restaurante where id_rest = 1;

insert into restaurante(id_rest, nm_rest, email_rest, senha_rest, logo_rest, local_rest, tel_rest, cep_rest) 
values(
1, 
"Texas Burger Lanch", 
"texasburguer@gmail.com", 
"TB123", 
"assets/logo.png",
"R. Conceição da Pedra, 152 Bonsucesso, Guarulhos, SP, Brasil",
123451234,
07176560);
select * from restaurante;

insert into usuario(id_usuario, nm_usuario, email_usuario, senha_usuario, tel_usuario, cpf_usuario, fk_rest_id_rest) 
values(
1,
"Nósz Adm",
"nosztcc@gmail.com",
"Nosz123",
123451234,
45506034024,
1);
select * from usuario;


insert into questionario(id_quest, resposta1, resposta2, resposta3, resposta4, resposta5, fk_usuario_id_usuario) 
values(
1,
"Convencer ao superior/líder do comércio para tomar decisões que mudem o modo da fabricação dos alimentos para 
favorecer a questão",
"Comércios varejistas menores como feiras que podem ter um menor preparo para a administração dos produtos",
"Todas as compras, frequentemente, ás vezes, raramente, nunca",
"Todas as compras, frequentemente, ás vezes, raramente, nunca",
"Sim",
1);
select * from questionario;