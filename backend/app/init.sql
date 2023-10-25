-- backend/app/init.sql
CREATE DATABASE IF NOT EXISTS db;

USE db;

CREATE TABLE IF NOT EXISTS device_table (
    pri_key CHAR(36) PRIMARY KEY,
    equip_inst_id INT,
    status VARCHAR(255),
    category VARCHAR(255),
    vendor VARCHAR(255),
    model VARCHAR(255),
    sanitize_model_id INT,
    description TEXT,
    shelf VARCHAR(255),
    hostname VARCHAR(255),
    ip_address_v4 VARCHAR(15),
    netmask_v4 VARCHAR(15),
    ip_address_v6 VARCHAR(39),
    netmask_v6 VARCHAR(39),
    created_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Your insert statements remain the same.



-- inserting into table 
-- Inserting random data into device_table
INSERT INTO device_table (
    pri_key,
    equip_inst_id,
    status,
    category,
    vendor,
    model,
    sanitize_model_id,
    description,
    shelf,
    hostname,
    ip_address_v4,
    netmask_v4,
    ip_address_v6,
    netmask_v6,
    created_timestamp,
    last_updated_timestamp
)
VALUES
    (UUID(), 1, 'Active', 'Router', 'Cisco', 'Model A', 1001, 'Description 1', 'Shelf 1', 'Host 1', '192.168.1.1', '255.255.255.0', '2001:0db8:85a3:0000:0000:8a2e:0370:7334', 'ffff:ffff:ffff:ffff:0000:0000:0000:0000', '2023-10-09 12:00:00', '2023-10-09 12:30:00'),
    (UUID(), 2, 'Inactive', 'Switch', 'HP', 'Model B', 1002, 'Description 2', 'Shelf 2', 'Host 2', '192.168.1.2', '255.255.255.0', '2001:0db8:85a3:0000:0000:8a2e:0370:7335', 'ffff:ffff:ffff:ffff:0000:0000:0000:0000', '2023-10-09 13:00:00', '2023-10-09 13:30:00'),
    (UUID(), 3, 'Active', 'Firewall', 'Juniper', 'Model C', 1003, 'Description 3', 'Shelf 3', 'Host 3', '192.168.1.3', '255.255.255.0', '2001:0db8:85a3:0000:0000:8a2e:0370:7336', 'ffff:ffff:ffff:ffff:0000:0000:0000:0000', '2023-10-09 14:00:00', '2023-10-09 14:30:00'),
    (UUID(), 4, 'Active', 'Router', 'Cisco', 'Model D', 1004, 'Description 4', 'Shelf 4', 'Host 4', '192.168.1.4', '255.255.255.0', '2001:0db8:85a3:0000:0000:8a2e:0370:7337', 'ffff:ffff:ffff:ffff:0000:0000:0000:0000', '2023-10-09 15:00:00', '2023-10-09 15:30:00'),
    (UUID(), 5, 'Inactive', 'Switch', 'HP', 'Model E', 1005, 'Description 5', 'Shelf 5', 'Host 5', '192.168.1.5', '255.255.255.0', '2001:0db8:85a3:0000:0000:8a2e:0370:7338', 'ffff:ffff:ffff:ffff:0000:0000:0000:0000', '2023-10-09 16:00:00', '2023-10-09 16:30:00'),
    (UUID(), 6, 'Active', 'Firewall', 'Juniper', 'Model F', 1006, 'Description 6', 'Shelf 6', 'Host 6', '192.168.1.6', '255.255.255.0', '2001:0db8:85a3:0000:0000:8a2e:0370:7339', 'ffff:ffff:ffff:ffff:0000:0000:0000:0000', '2023-10-09 17:00:00', '2023-10-09 17:30:00'),
    (UUID(), 7, 'Active', 'Router', 'Cisco', 'Model G', 1007, 'Description 7', 'Shelf 7', 'Host 7', '192.168.1.7', '255.255.255.0', '2001:0db8:85a3:0000:0000:8a2e:0370:7340', 'ffff:ffff:ffff:ffff:0000:0000:0000:0000', '2023-10-09 18:00:00', '2023-10-09 18:30:00'),
    (UUID(), 8, 'Inactive', 'Switch', 'HP', 'Model H', 1008, 'Description 8', 'Shelf 8', 'Host 8', '192.168.1.8', '255.255.255.0', '2001:0db8:85a3:0000:0000:8a2e:0370:7341', 'ffff:ffff:ffff:ffff:0000:0000:0000:0000', '2023-10-09 19:00:00', '2023-10-09 19:30:00');


CREATE TABLE IF NOT EXISTS Item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT
);

-- Inserting the first record
INSERT INTO Item (name, description) VALUES ('Item 1', 'Description of Item 1');

-- Inserting the second record
INSERT INTO Item (name, description) VALUES ('Item 2', 'Description of Item 2');

-- Inserting the third record
INSERT INTO Item (name, description) VALUES ('Item 3', 'Description of Item 3');

-- Inserting the fourth record
INSERT INTO Item (name, description) VALUES ('Item 4', 'Description of Item 4');

-- Inserting the fifth record
INSERT INTO Item (name, description) VALUES ('Item 5', 'Description of Item 5');
