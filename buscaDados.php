<?php
// Inclua o arquivo de conexão com o banco de dados
include_once 'conexao.php';

// Verifique se os dados foram enviados via GET
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Obtenha os dados do formulário
    $email = $_GET['fEmail'];
    $senha = $_GET['fPassword'];

    // Prepare a declaração SQL para buscar o email e a senha
    $sql = $conectar->prepare("SELECT * FROM membros WHERE email = :email AND senha = :senha");

    if ($sql) {
        // Vincule os parâmetros
        $sql->bindParam(':email', $email);
        $sql->bindParam(':senha', $senha);

        // Execute a declaração
        try {
            $sql->execute();

            // Verifique se o usuário foi encontrado
            if ($sql->rowCount() > 0) {
                echo json_encode(['status' => 'success']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Usuário não encontrado ou senha incorreta.']);
            }
        } catch (PDOException $e) {
            echo json_encode(['status' => 'error', 'message' => 'Erro ao buscar dados: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Erro ao preparar a declaração: ' . $conectar->error]);
    }

    // Feche a conexão
    $conectar = null;
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método de requisição inválido.']);
}
?>