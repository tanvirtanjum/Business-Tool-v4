-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2020 at 12:18 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `businesstool_v4`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `MSG_ID` int(11) NOT NULL,
  `DATE` datetime NOT NULL DEFAULT current_timestamp(),
  `SUB` varchar(250) DEFAULT NULL,
  `SENDER` varchar(15) NOT NULL,
  `TEXT` longtext NOT NULL,
  `ATTACHMENT` varchar(300) DEFAULT NULL,
  `RECEIVER` varchar(15) NOT NULL,
  `STATUS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cusid` varchar(15) NOT NULL,
  `name` varchar(100) NOT NULL,
  `design` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `reg_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmpID` varchar(15) NOT NULL,
  `E_NAME` varchar(50) NOT NULL,
  `DID` int(1) NOT NULL,
  `SAL` double(10,2) NOT NULL,
  `E_MOB` varchar(14) NOT NULL,
  `E_MAIL` varchar(50) NOT NULL,
  `JOIN_DATE` datetime NOT NULL DEFAULT current_timestamp(),
  `ADDED_BY` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `emp_image`
--

CREATE TABLE `emp_image` (
  `IEmpID` varchar(15) DEFAULT NULL,
  `EmpIMG` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `log_in`
--

CREATE TABLE `log_in` (
  `LID` varchar(15) NOT NULL,
  `SID` int(1) NOT NULL,
  `PASS` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `note`
--

CREATE TABLE `note` (
  `NoteID` int(255) NOT NULL,
  `NoteName` varchar(50) NOT NULL,
  `OwnerID` varchar(10) NOT NULL,
  `Text` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `noticeID` int(254) NOT NULL,
  `noteSub` varchar(100) NOT NULL,
  `noticetext` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderlist`
--

CREATE TABLE `orderlist` (
  `orderid` int(254) NOT NULL,
  `prodid` varchar(15) NOT NULL,
  `quant` int(15) NOT NULL,
  `ammout` double(10,2) NOT NULL,
  `stat` varchar(50) NOT NULL,
  `ord_date` datetime DEFAULT current_timestamp(),
  `deliveryby` varchar(15) DEFAULT NULL,
  `orderby` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `PID` varchar(15) NOT NULL,
  `P_NAME` varchar(50) NOT NULL,
  `TYPE` varchar(20) NOT NULL,
  `AVAILABILITY` varchar(20) NOT NULL DEFAULT 'AVAILABLE',
  `QUANTITY` int(15) NOT NULL,
  `BUY_PRICE` double(10,2) NOT NULL,
  `SELL_PRICE` double(10,2) NOT NULL,
  `MOD_BY` varchar(15) NOT NULL,
  `Add_PDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `SLID` int(254) NOT NULL,
  `PID` varchar(15) NOT NULL,
  `QUANT` int(15) NOT NULL,
  `OB_AMMOUNT` double(10,2) NOT NULL,
  `PROFIT` double(10,2) NOT NULL,
  `C_NAME` varchar(25) NOT NULL,
  `C_MOB` varchar(14) NOT NULL,
  `SOLD_BY` varchar(15) NOT NULL,
  `Sell_SDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `SID` int(1) NOT NULL,
  `DESIGNATION` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`SID`, `DESIGNATION`) VALUES
(1, 'ADMIN'),
(5, 'CUSTOMER'),
(4, 'DELIVERYMAN'),
(2, 'MANAGER'),
(0, 'RESTRICT'),
(3, 'SALESMAN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`MSG_ID`),
  ADD KEY `SENDER` (`SENDER`),
  ADD KEY `RECEIVER` (`RECEIVER`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cusid`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmpID`),
  ADD UNIQUE KEY `E_MOB` (`E_MOB`),
  ADD UNIQUE KEY `E_MAIL` (`E_MAIL`),
  ADD KEY `D_ID` (`DID`),
  ADD KEY `ADDED_BY` (`ADDED_BY`);

--
-- Indexes for table `emp_image`
--
ALTER TABLE `emp_image`
  ADD KEY `IEmpID` (`IEmpID`);

--
-- Indexes for table `log_in`
--
ALTER TABLE `log_in`
  ADD PRIMARY KEY (`LID`),
  ADD KEY `SID` (`SID`);

--
-- Indexes for table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`NoteID`),
  ADD KEY `OwnerID` (`OwnerID`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`noticeID`);

--
-- Indexes for table `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`orderid`),
  ADD KEY `deliveryby` (`deliveryby`),
  ADD KEY `prodid` (`prodid`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`PID`),
  ADD KEY `MOD_BY` (`MOD_BY`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`SLID`),
  ADD KEY `PID` (`PID`),
  ADD KEY `SOLD_BY` (`SOLD_BY`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`SID`),
  ADD UNIQUE KEY `DESIGNATION` (`DESIGNATION`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `MSG_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `note`
--
ALTER TABLE `note`
  MODIFY `NoteID` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `noticeID` int(254) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderlist`
--
ALTER TABLE `orderlist`
  MODIFY `orderid` int(254) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `SLID` int(254) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `chat_ibfk_1` FOREIGN KEY (`SENDER`) REFERENCES `log_in` (`LID`),
  ADD CONSTRAINT `chat_ibfk_2` FOREIGN KEY (`RECEIVER`) REFERENCES `log_in` (`LID`);

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`cusid`) REFERENCES `log_in` (`LID`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`DID`) REFERENCES `status` (`SID`),
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`ADDED_BY`) REFERENCES `log_in` (`LID`),
  ADD CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`EmpID`) REFERENCES `log_in` (`LID`);

--
-- Constraints for table `emp_image`
--
ALTER TABLE `emp_image`
  ADD CONSTRAINT `emp_image_ibfk_1` FOREIGN KEY (`IEmpID`) REFERENCES `employee` (`EmpID`);

--
-- Constraints for table `log_in`
--
ALTER TABLE `log_in`
  ADD CONSTRAINT `log_in_ibfk_1` FOREIGN KEY (`SID`) REFERENCES `status` (`SID`);

--
-- Constraints for table `note`
--
ALTER TABLE `note`
  ADD CONSTRAINT `note_ibfk_1` FOREIGN KEY (`OwnerID`) REFERENCES `log_in` (`LID`);

--
-- Constraints for table `orderlist`
--
ALTER TABLE `orderlist`
  ADD CONSTRAINT `orderlist_ibfk_1` FOREIGN KEY (`deliveryby`) REFERENCES `log_in` (`LID`),
  ADD CONSTRAINT `orderlist_ibfk_2` FOREIGN KEY (`prodid`) REFERENCES `product` (`PID`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`MOD_BY`) REFERENCES `log_in` (`LID`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `product` (`PID`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`SOLD_BY`) REFERENCES `log_in` (`LID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
