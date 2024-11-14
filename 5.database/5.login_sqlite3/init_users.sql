CREATE TABLE
 IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT.
    username TEXT,
    password TEXT,
    email TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, --기본값은 현재 시간
    role TEXT DEFAULT 'user'
 );

 --초기 사용자 추가
 INSERT INTO users (username,password, email, role )VALUES
 ('admin', 'sfhk#fa2@'),
 ('user1', 'password1');

 INSERT INTO users(username,password,email)VALUES
 ('user2','password2'),
 ('user3','password3')