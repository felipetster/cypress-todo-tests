
-- Query 1: Buscar usuário por ID

SELECT id, name, email, username
FROM users
WHERE id = 1;

-- Resultado esperado:
-- id | name          | email               | username
-- 1  | Leanne Graham | Sincere@april.biz   | Bret


-- Query 2: Validar que email é único

SELECT email, COUNT(*) as total
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- Resultado esperado: 0 linhas

-- Query 3: Listar posts de um usuário

SELECT p.id, p.title, u.username
FROM post p 
INNER JOIN users u ON p.userID = u.id
WHERE u.id = 1
ORDER BY p.id;