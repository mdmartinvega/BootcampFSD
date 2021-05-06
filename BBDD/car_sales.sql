-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-05-2021 a las 13:52:30
-- Versión del servidor: 8.0.23-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `car_sales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `customer_id` int NOT NULL,
  `details` varchar(256) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `address` varchar(64) DEFAULT NULL,
  `phone_number` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`customer_id`, `details`, `name`, `address`, `phone_number`) VALUES
(1, 'Cliente repetidor', 'Carlos', 'Hortaleza 25', 651234578),
(2, 'Nuevo cliente', 'Patricia', 'Carreterías 2', 789456123),
(3, 'Cliente VIP', 'Michel', 'Larios 1', 654123789),
(4, 'Cliente relacionado con 3', 'Sarah', 'Calle Z', 6012312),
(5, 'Amigo staff', 'Martha', 'Calle K', 7012312);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deliveries`
--

CREATE TABLE `deliveries` (
  `delivery_id` int NOT NULL,
  `sale_id` int DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `other_details` varchar(264) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `deliveries`
--

INSERT INTO `deliveries` (`delivery_id`, `sale_id`, `delivery_date`, `other_details`) VALUES
(4, 1, '2015-12-01', 'Entregar en puerta'),
(5, 2, '2019-01-01', 'Entregar al portero'),
(6, 3, '2012-01-01', 'Envío urgente'),
(7, 4, '2020-05-30', 'Envío urgente'),
(8, 5, '2015-01-01', 'Entregar al vecino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ref_model_types`
--

CREATE TABLE `ref_model_types` (
  `model_type_code` varchar(16) NOT NULL,
  `parent_model_type_code` varchar(16) DEFAULT NULL,
  `model_type_name` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `ref_model_types`
--

INSERT INTO `ref_model_types` (`model_type_code`, `parent_model_type_code`, `model_type_name`) VALUES
('M', 'V', 'Mini Van'),
('MV', 'V', 'Mini Van'),
('SC', NULL, 'Sport Car'),
('SS', 'SC', 'Super Sport'),
('V', NULL, 'Van');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `sale_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `vehicle_id` int DEFAULT NULL,
  `sale_date` date DEFAULT NULL,
  `other_details` varchar(256) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`sale_id`, `customer_id`, `vehicle_id`, `sale_date`, `other_details`, `price`) VALUES
(1, 1, 1, '2021-01-01', '', 20000),
(2, 1, 3, '2011-01-01', '', 10000),
(3, 2, 2, '2012-01-01', '', 70000),
(4, 3, 4, '2013-01-01', '', 3000),
(5, 4, 5, '2021-01-01', '', 300000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicles`
--

CREATE TABLE `vehicles` (
  `vehicle_id` int NOT NULL,
  `model_type_code` varchar(16) DEFAULT NULL,
  `vehicle_name` varchar(128) DEFAULT NULL,
  `launch_date` date DEFAULT NULL,
  `other_details` varchar(264) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `vehicles`
--

INSERT INTO `vehicles` (`vehicle_id`, `model_type_code`, `vehicle_name`, `launch_date`, `other_details`) VALUES
(1, 'MV', 'Volkswagen California', '2018-01-01', ''),
(2, 'MV', 'Minivan 1', '2010-05-05', ''),
(3, 'SC', 'Audi Q7', '2020-01-01', ''),
(4, 'MV', 'Mercedes Vito', '2008-01-01', ''),
(5, 'SS', 'Ferrari', '2010-06-15', ''),
(7, 'M', 'Porsche Panamera', '2020-10-01', ''),
(8, 'SS', 'Lamborghini Aventador', '2019-01-01', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indices de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`delivery_id`),
  ADD KEY `sale_id` (`sale_id`);

--
-- Indices de la tabla `ref_model_types`
--
ALTER TABLE `ref_model_types`
  ADD PRIMARY KEY (`model_type_code`),
  ADD KEY `parent_model_type_code` (`parent_model_type_code`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sale_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Indices de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vehicle_id`),
  ADD KEY `model_type_code` (`model_type_code`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `delivery_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `sale_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `vehicle_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `deliveries_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`sale_id`);

--
-- Filtros para la tabla `ref_model_types`
--
ALTER TABLE `ref_model_types`
  ADD CONSTRAINT `ref_model_types_ibfk_1` FOREIGN KEY (`parent_model_type_code`) REFERENCES `ref_model_types` (`model_type_code`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`);

--
-- Filtros para la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`model_type_code`) REFERENCES `ref_model_types` (`model_type_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
