 CREATE TABLE players (
 id SERIAL PRIMARY KEY,
 name VARCHAR(255) NOT NULL
 );
 -- Insert some sample data into the table
 INSERT INTO players (name) VALUES ('Nguyen Vu Nguyen');
 INSERT INTO players (name) VALUES ('Minh Cao');
 INSERT INTO players (name) VALUES ('Dang Nguyen');
 INSERT INTO players (name) VALUES ('Andy Tran');
 INSERT INTO players (name) VALUES ('Kyle Du');
 INSERT INTO players (name) VALUES ('Hoang Ly');
 INSERT INTO players (name) VALUES ('Harry Tran');
 INSERT INTO players (name) VALUES ('Hoang Huynh');
 INSERT INTO players (name) VALUES ('Khoa Pham');
 INSERT INTO players (name) VALUES ('Nhan Chau');
 INSERT INTO players (name) VALUES ('Trung Nguyen');
 INSERT INTO players (name) VALUES ('Nhat Nguyen');
 INSERT INTO players (name) VALUES ('Trieu Vo');
 INSERT INTO players (name) VALUES ('Thanh Thu Tieu');
 INSERT INTO players (name) VALUES ('Khoa Anh Tran');
 INSERT INTO players (name) VALUES ('Vu Nguyen');

INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (1, 1, 9, 154, 3);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (2, 1, 9, 158, 4);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (3, 1, 9, 189, 9);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (4, 1, 10, 193, 6);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (5, 1, 10, 183, 5);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (6, 1, 9, 163, 5);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (7, 1, 9, 161, 6);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (8, 1, 9, 161, 3);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (9, 1, 9, 157, 5);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (10, 1, 9, 156, 5);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (11, 1, 9, 156, 4);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (12, 1, 6, 102, 3);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (13, 1, 3, 50, 2);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (14, 1, 8, 127, 2);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (15, 1, 6, 85, 2);
INSERT INTO player_statistics (player_id, season_id, game_count, point_count, win_count) VALUES (16, 1, 9, 127, 2);