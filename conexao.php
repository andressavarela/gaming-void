<?php
try {
    // Conectando ao banco de dados
    $conectar = new PDO("mysql:host=localhost;port=3306;dbname=gamingvoid", "root","");
    echo("Conectado com sucesso");
} catch (PDOException $e) {
    // Em caso de erro, exibe a mensagem de erro
    echo("Falha ao conectar. " . $e->getMessage());
}
?>
