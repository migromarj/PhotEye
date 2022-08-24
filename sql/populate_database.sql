
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM users;
DELETE FROM photos;
DELETE FROM ratings;
DELETE FROM comments;
DELETE FROM categories;
DELETE FROM photosCategories;
DELETE FROM useruser;
DELETE FROM contactforms;
DELETE FROM inappropriateWords;
SET FOREIGN_KEY_CHECKS=1;

ALTER TABLE users AUTO_INCREMENT=1;
ALTER TABLE photos AUTO_INCREMENT=1;
ALTER TABLE ratings AUTO_INCREMENT=1;
ALTER TABLE comments AUTO_INCREMENT=1;
ALTER TABLE categories AUTO_INCREMENT=1;
ALTER TABLE photosCategories AUTO_INCREMENT=1;
ALTER TABLE UserUser AUTO_INCREMENT=1;
ALTER TABLE contactForms AUTO_INCREMENT=1;
ALTER TABLE inappropriateWords AUTO_INCREMENT=1;
	
INSERT INTO Users (NAME, surnames, phoneNumber, email, userName, password, profilePictureURL) VALUES
	
	-- 1
	
	('Lucía','Martínez Mata',684215987, 'luciamartinez@gmail.com','lucmarmat','LuciaMar_55','https://i.pinimg.com/originals/0e/e2/d0/0ee2d0999ec24ba88f7432751b6b40b7.jpg'),
	('Marío','Cejas Ramos', 672159846, 'mariocejas@gmail.com','marcejram','MarioRam672','https://img1.freepng.es/20180713/aaw/kisspng-user-profile-linkedin-netwerk-money-order-fulfillm-round-face-5b494408cd2468.5239235115315282008403.jpg'),
	('José','Pérez López', 674125698, 'joseperez@gmail.com','josperlop','JoPeLop-72','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQX9clpUBlKOryROT3M8AVEyB90U_rBzkQ-KbwphebykPm-eN_wkuZL77KA_Ui3b0Bxk&usqp=CAU'),
	('Jesús','Luque Matas',632541287, 'jesusluque@gmail.com','jesluqmat','JesusLuque65','https://upload.wikimedia.org/wikipedia/commons/d/d7/Walker_Circle.png'),
	('Marta','Navas Soler',630250149, 'martanavas@gmail.com','marnavsol','MartaNav22','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZklmAAoYs7I-hVhE0brFomNYRqZgg-HpXMNnLlG6PnVpC3bCYdCmTaaxF_LgtpN1s6Q&usqp=CAU'),
	('Jesús','Jurado Martín', 632514987, 'jesusjurado@gmail.com','jesjurmar','JesJur-33','https://i.pinimg.com/originals/e3/ac/12/e3ac12e6fbef2a57c2662cc85133491d.jpg'),
	
	-- 7
	
	('Manuela','Gonzalez Parras', 624851496, 'manuelagonzalez@gmail.com','mangonpar','ManuelaGon14','https://i.pinimg.com/236x/9a/d5/13/9ad5135b8df800a80f61a92a5afe158f.jpg'),
	('Antonio','López Torralba',672359846, 'antoniolopez@gmail.com','antloptor','Antonio_14','https://w7.pngwing.com/pngs/130/766/png-transparent-techture-job-user-profile-linkedin-skill-akshay-kumar-miscellaneous-architect-linkedin.png'),
	
	-- 9
	
	('Javier','Lorenzo Valdés',655489741, 'javierlorenzo@gmail.com','javlorval','Javilorenzo14','https://i1.wp.com/acalu.es/wp-content/uploads/2015/10/Perfil-capuchas-x1000.png?resize=300%2C300');

INSERT INTO Photos (url, uploadDate, title, description, visibility, userId) VALUES

	-- General 1
	('https://i.pinimg.com/originals/c9/3c/2a/c93c2a9559b5f0d0dc6f6085b1cde6c3.jpg','2020-12-13 11:09:31', 'Un día en el pueblo', 'Paseando por las calles de mi pueblo.','Pública',1),
	('https://upload.wikimedia.org/wikipedia/commons/4/4f/Fuente_de_la_Plaza_de_Espa%C3%B1a.jpg','2020-11-29 09:22:53','Plaza de España','La fuente de más bonita de Sevilla.','Pública',2),
	('https://cadenaser00.epimg.net/ser/imagenes/2020/06/10/sociedad/1591775093_627099_1591776087_noticia_normal.jpg','2020-07-10 13:40:11','Primer baño','Yo nadando en una piscina.', 'Pública',3),
	('https://deportesmanzanedo.com/20927-large_default/zapatillas-baloncesto-nike-air-max-infuriate-2-mid-aa7066-100-blanca-hombre.jpg','2020-04-27 14:00:12','¡Me encantan!','Zapatillas blancas para jugar a baloncesto.','Pública',4),
	('https://casaydiseno.com/wp-content/uploads/2016/09/peces-de-agua-dulce-kio-jardin-bonito.jpg','2020-02-01 12:30:55','Los peces','Fuente de agua cristalina, con muchos peces de diversos colores.','Pública',5),
	('https://p1.pxfuel.com/preview/980/835/588/owl-branch-tree-wise-brown-raptor.jpg','2020-01-09 17:37:11','Búho','Un búho muy grande apoyado en la rama de un árbol.','Pública',6),

	-- Categorías 7
	('https://images-na.ssl-images-amazon.com/images/I/61dLCall-OL._AC_SX425_.jpg','2020-10-25 09:48:28','Mejor crema facial','Recomiendación de una buena crema','Pública',7),
	('https://www.ambientum.com/wp-content/uploads/2018/11/arboles-amazonas-696x479.jpg','2020-05-03 12:55:09','Amazonas','Varios árboles muy altos del amazonas','Pública',8),
	
	-- Tendencias fotos 9
	('https://imagenes.forociudad.com/fotos/321831-herrera-nevada.jpg','2020-08-16 19:34:24','Mi pueblo','Foto de mi pueblo sacada con una cámara','Pública',7),
	('https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/ae688906-005a-49a7-99cb-27a58c62ba12.jpg','2020-09-07 13:22:54','Yo','Foto mía','Pública',8),
	
	-- 11
	
	('https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/04/18/16187298909659.jpg','2020-07-15 13:12:56','Partido ganado','Victoria en el partido de baloncesto','Pública',7),
	('https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1860/public/media/image/2020/04/9-mejores-moviles-samsung-2020-precio-puedes-comprar-1925197.png?itok=idD7Iw1c','2020-07-07 16:48:59','Nuevo móvil','Nuevo Samsung Galaxy S9','Pública',7),
	('https://www.tomorrowland.com/src/Frontend/Themes/tomorrowland/Core/Layout/images/timeline/2019-9.jpg','2020-05-27 10:22:28','Increíble fiesta la de ayer','Primer día en Tomorrowland','Pública',8),
	('https://auna.pe/wp-content/uploads/2017/09/cuantas-horas-debe-dormir-bebe-recien-nacido.jpg','2020-04-21 20:32:19','Nuevo integrante en la familia','Mi primo recién nacido','Pública',7),
	('https://upload.wikimedia.org/wikipedia/commons/8/83/Castillo_de_Almod%C3%B3var_del_R%C3%ADo_2009.jpg','2020-02-28 08:34:44','Castillo de Almodóvar','Importante castillo de Córdoba','Pública',8),
	
	
	-- Publicaciones 16
	
	('https://bulldogfrances.club/wp-content/uploads/2020/06/bulldog-frances-negro.jpg','2019-12-20 09:43:58','Bulldog de color negro','Foto en la que aparece mi bulldog negro.','Pública',9),
	('https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/16082357/Torre-Eiffel-aniversario-SF-16.jpg','2019-10-16 23:12:36','Torre Eiffel','Foto de la Torre Eiffel, importante monumento francés.','Pública',9),
	('https://plantasyflores.online/wp-content/uploads/2017/08/sunflower-1627193_1920-copia.jpg','2019-10-07 07:14:20','Girasoles','Foto en la que se puede apreciar una pradera con muchos girasoles.','Pública',9),
	('https://i.blogs.es/627b74/goldengate/450_1000.jpg','2019-08-12','Puente Golden Gate','Foto en la que se puede ver uno de los puentes más largos de Estados Unidos.','Pública',9),
	('https://i.blogs.es/d26f27/delfin_curioso_sian-kaan/450_1000.jpg','2019-07-10 18:23:51','Delfín','Foto a un delfín, al que solo con mirarle se puede ver que está feliz.','Privada',9),
	('https://images.adsttc.com/media/images/5037/e2fe/28ba/0d59/9b00/0241/newsletter/stringio.jpg?1414218779','2019-01-09 22:12:42','Ópera de Sídney','Foto nocturna de la Ópera de Sídney.','Pública',9),
	
	-- Publicaciones 22
	
	('http://4.bp.blogspot.com/_zkXSwmUVeCw/S8cIZOYKT5I/AAAAAAAAAMY/swenPo0fb3U/s1600/andaluz.jpg',CURRENT_TIMESTAMP,'Caballo','Caballo marrón cabalgando por una pradera.','Pública',1),
	('https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/SPAIN/calcmenu/recipes/ES-recipes/general/ensalada-de-tomate-multicolor/main-header.jpg',CURRENT_TIMESTAMP,'Excelente comida','Ensalada de tomate','Pública',2),
	('https://www.herrera.es/export/sites/herrera/.galleries/Galeria-de-imagenes-de-Municipio/Plaza-iglesia.jpg',CURRENT_TIMESTAMP,'Iglesia de Santiago el Mayor','Iglesia de grandes dimensiones situada en el pueblo de Herrera.','Pública',3),
	('https://www.eluniverso.com/resizer/KlouBbtOZVOws9lt7tOR5TLXD6E=/1037x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QN423YKQ6VDZDCXRPIKHCWV3YI.jpg',CURRENT_TIMESTAMP,'Playa','Magnífica playa en Punta Cana con agua cristalina','Pública',4),
	('https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/04/siames-scaled.jpg?fit=1200%2C800&ssl=1',CURRENT_TIMESTAMP,'Amo a mi gato','Gato siamés posado sobre una mesa','Pública',5),
	('https://otroscaminos.es/wp-content/uploads/2012/10/106_Califato_bici_viajeros-600x460.jpg',CURRENT_TIMESTAMP,'De ruta','Paseo en bicicleta con mis amigos por el campo.','Pública',6);

INSERT INTO Ratings (dateP, punctuation, userId, photoId) VALUES
	-- 1
	
	('2020-10-28 20:15:41',2,9,7),
	('2020-09-11 15:54:52',5,9,10),
	('2020-08-18 17:43:34',5,9,9),
	('2020-07-10 15:21:55',2,9,3),
	('2020-05-04 19:43:15',4,9,8),
	('2020-04-28 19:12:52',5,9,4),
	('2020-03-28 23:09:28',1,8,4),
	('2020-03-28 21:03:19',3,8,1),
	('2020-03-28 16:54:36',2,8,2),
	
	-- 10
	
	(CURRENT_TIMESTAMP,2,2,22),
	(CURRENT_TIMESTAMP,5,3,23),
	(CURRENT_TIMESTAMP,5,4,24),
	(CURRENT_TIMESTAMP,2,5,25),
	(CURRENT_TIMESTAMP,4,6,26),
	(CURRENT_TIMESTAMP,5,7,27),
	(CURRENT_TIMESTAMP,1,8,24),
	(CURRENT_TIMESTAMP,3,9,25),
	(CURRENT_TIMESTAMP,5,1,26);
	
INSERT INTO Comments (txt,	dateP, userId, photoId) VALUES

	('Muy bonito, ojala algún día poder visitarlo','2020-12-15 18:12:42',8,1),
	('¡Es precioso!','2020-12-14 21:22:07',4,1),
	
	('La foto está un poco borrosa','2020-10-27 19:45:33',5,2),
	('Creo que esa crema no da buenos resultados','2020-10-27 22:54:04',2,7),
	('¡Increible! Soy un apasionado de la naturaleza, y me encanta esta foto','2020-05-03 17:04:00',4,8),
	('Qué pasada de zapatillas, aunque las prefiero rojas','2020-04-29 16:38:49',3,3),
	('Qué bonita es la foto, el búho es impresionante','2020-01-09 23:54:02',1,6),
	
	('¡Me encantaría tener uno igual!','2019-12-22 19:23:01',6,16),
	('¡Es precioso!','2019-12-21 20:43:54',8,16),
	
	-- 10
	
	('¡Es espectacular!',CURRENT_TIMESTAMP,2,22),
	('Impresionante',CURRENT_TIMESTAMP,3,22),
	
	('Qué buena pinta tiene',CURRENT_TIMESTAMP,6,23),
	('¿Subirás la receta para hacerla?',CURRENT_TIMESTAMP,7,23),
	
	('Ojalá poder visitarla',CURRENT_TIMESTAMP,4,24),
	('Nunca había visto una iglesia igual a esta',CURRENT_TIMESTAMP,5,24),
	
	('El agua es super clara',CURRENT_TIMESTAMP,8,25),
	('¿Cuántos años tiene?',CURRENT_TIMESTAMP,9,26),
	('Muy buenta foto',CURRENT_TIMESTAMP,1,27);

	

INSERT INTO Categories (NAME) VALUES
	 
	 -- 1
	('Moda'),
	('Publicitaria'),
	('Naturaleza'),
	('Submarina'),
	('Paisaje'),
	('Artística'),
	('Monumento'),
	
	-- 8
	('Aérea'),
	('Animal'),
	('Nocturna'),
	('Retrato');
	
INSERT INTO photoscategories (photoId, categoryId) VALUES
	(1,5),
	(2,7),
	(7,2),
	(8,3),
	(4,1),
	(6,3),
	(16,3),
	(16,9);
	
INSERT INTO UserUser (userId1, userId2) VALUES
	(1,5),
	(2,7),
	(7,2),
	(8,3),
	(4,1),
	(6,3),
	
	(7,1),
	(3,1),

	(1,8),
	(2,8),
	(4,8),
	(5,8),
	(6,8),

	(7,4),
	(8,4),
	(3,4),
	(6,4),
	(1,4),
	(2,4),
	
	(3,7),
	(4,7),
	
	(3,9),
	(6,9),
	(2,9),
	(5,9),
	(1,9),
	(4,9),	
	
	(9,7),
	(9,2),
	(9,6),
	(9,1),
	(9,3),
	(9,8);
		
INSERT INTO inappropriateWords (word) VALUES
	('cabrón'),
	('bastardo'),
	('imbécil'),
	('estúpido'),
	('idiota'),
	('cagón'),
	('asqueroso'),
	('huevón'),
	('miserable');