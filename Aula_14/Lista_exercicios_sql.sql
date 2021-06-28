SELECT f.nome, f.sobrenome, f.email FROM funcionarios f 

SELECT f.nome, f.sobrenome, f.email FROM funcionarios f WHERE  f.cargo LIKE 'Sales%'

SELECT DISTINCT f.cargo FROM funcionarios f 

SELECT DISTINCT l.cidade FROM lojas l 

SELECT f.nome, f.sobrenome, f.email, l.cidade, l.pais, l.telefone 
FROM funcionarios f JOIN lojas l 
ON f.cargo ='President' WHERE f.codloja = l.codloja 

SELECT * FROM produtos p ORDER BY precosugerido DESC LIMIT 1

SELECT * FROM produtos p ORDER BY precosugerido LIMIT 1

SELECT * FROM produtos p ORDER by qtdestoque LIMIT 1

SELECT * FROM produtos p ORDER by qtdestoque DESC LIMIT 1

SELECT d.quantidadepedida 
FROM detalhespedidos d WHERE d.codproduto = (SELECT p.codproduto FROM produtos p ORDER BY precosugerido DESC LIMIT 1)

SELECT d.quantidadepedida 
FROM detalhespedidos d WHERE d.codproduto = (SELECT p.codproduto FROM produtos p ORDER BY precosugerido LIMIT 1)

SELECT d.quantidadepedida 
FROM detalhespedidos d WHERE d.codproduto = (SELECT p.codproduto FROM produtos p ORDER by qtdestoque LIMIT 1)

SELECT d.quantidadepedida 
FROM detalhespedidos d WHERE d.codproduto = (SELECT p.codproduto FROM produtos p ORDER by qtdestoque DESC LIMIT 1)

SELECT c.nomecliente, c.nomecontato, c.sobrenomecontato, c.cidade, c.estado, COUNT(p.numpedido)
FROM clientes c JOIN pedidos p
ON c.numcliente = p.numcliente 
GROUP BY c.nomecliente , c.nomecontato , c.sobrenomecontato , c.cidade , c.estado

SELECT p.descricaoproduto , p.linhaproduto , p.precosugerido , COUNT(d.codproduto) 
FROM produtos p JOIN detalhespedidos d 
ON d.codproduto = p.codproduto 
GROUP BY p.descricaoproduto , p.linhaproduto , p.precosugerido






