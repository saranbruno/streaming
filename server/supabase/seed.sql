
INSERT INTO users (name, mail, biography)
VALUES ('Bruno', 'saranbruno@gmail.com', 'Sou o desenvolvedor dessa aplicação');

INSERT INTO videos (name, description, uploading_user_id)
VALUES (
        'como abrir franquia',
        'esse eh um tutorial',
        (
            SELECT
                id
            FROM users
            LIMIT 1
        )
       );