-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Transaction` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`type` varchar(191) NOT NULL,
	`amount` int NOT NULL,
	`userEmail` varchar(191) NOT NULL,
	`category` varchar(191) NOT NULL,
	`remarks` varchar(191),
	`date` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)));
--> statement-breakpoint
CREATE TABLE `catgoryBudgets` (
	`id` varchar(191) PRIMARY KEY NOT NULL,
	`category` varchar(191) NOT NULL,
	`type` varchar(191) NOT NULL,
	`budget` int NOT NULL DEFAULT 1000,
	`userEmail` varchar(191) NOT NULL);
--> statement-breakpoint
CREATE TABLE `transaction_details` (
	`id` varchar(255) PRIMARY KEY NOT NULL DEFAULT (uuid()),
	`type` tinytext NOT NULL,
	`amount` int NOT NULL,
	`userEmail` varchar(255) NOT NULL,
	`category` tinytext NOT NULL,
	`remarks` text,
	`dateTs` date);

*/