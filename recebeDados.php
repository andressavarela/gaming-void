<?php
// Incluindo o arquivo de conexão
include_once "conexao.php";

try {
    // Recuperando os dados do formulário
    $nome = $_POST["fName"];
    $email = $_POST["fEmail"];
    $nasc = $_POST["fBirth"];
    $cpf = $_POST["fDocument"];
    $senha = $_POST["fPassword"];

    // Preparando a inserção dos dados na tabela usuarios
    $sql = $conectar->prepare("INSERT INTO gamingvoid.membros (nome, email, nasc, cpf, senha) VALUES ('$nome', '$email', '$nasc', '$cpf', '$senha')");
    // $sql->bindParam(1, $nome);
    // $sql->bindParam(2, $email);
    // $sql->bindParam(3, $nasc);
    // $sql->bindParam(4, $cpf);
    // $sql->bindParam(5, $senha);

    // Executando a query
    $sql->execute();

    // Verificando se a inserção foi bem-sucedida
    if ($sql->rowCount() > 0) {
        echo "Registro inserido com sucesso!";
    } else {
        echo "Erro ao inserir registro!";
    }

} catch (PDOException $e) {
    // Em caso de erro, exibe a mensagem de erro
    echo("Falha ao gravar dados. " . $e->getMessage());
}

// Fechando a conexão
$conectar = null;
?>
