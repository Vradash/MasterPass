CREATE TABLE `test`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
);

INSERT INTO `test`.`users`(`username`,`email`,`password`) VALUES('Vikram','asdf','qwer')