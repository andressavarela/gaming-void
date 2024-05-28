<?php
// Inclua o arquivo de conexão com o banco de dados
include_once 'conexao.php';

// Verifique se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtenha os dados do formulário
    $nome = $_POST['fName'];
    $email = $_POST['fEmail'];
    $nasc = $_POST['fBirth'];
    $cpf = $_POST['fDocument'];
    $senha = $_POST['fPassword']; // Criptografa a senha

    // Prepare a declaração SQL
    $sql = $conectar->prepare("INSERT INTO membros (cpf, nome, email, nasc, senha) VALUES (:cpf, :nome, :email, :nasc, :senha)");

    if ($sql) {
        // Vincule os parâmetros
        $sql->bindParam(':cpf', $cpf);
        $sql->bindParam(':nome', $nome);
        $sql->bindParam(':email', $email);
        $sql->bindParam(':nasc', $nasc);
        $sql->bindParam(':senha', $senha);

        // Execute a declaração
        try {
            $sql->execute();
            echo "Registro inserido com sucesso!";
        } catch (PDOException $e) {
            echo "Erro ao inserir registro: " . $e->getMessage();
        }
    } else {
        echo "Erro ao preparar a declaração: " . $conectar->error;
    }

    // Feche a conexão
    $conectar = null;
} else {
    echo "Método de requisição inválido.";
    echo "Método inválido: " . $_SERVER["REQUEST_METHOD"];
}
?>
