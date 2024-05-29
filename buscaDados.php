<?php
// Inclua o arquivo de conexão com o banco de dados
include_once 'conexao.php';

// Verifique se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtenha os dados do formulário
    $email = $_POST['fEmail'];
    $senha = $_POST['fPassword'];

    // Prepare a declaração SQL para buscar o email e a senha
    $sql = $conectar->prepare("SELECT * FROM membros WHERE email = :email AND senha = :senha");

    if ($sql) {
        // Vincule os parâmetros
        $sql->bindParam(':email', $email);
        $sql->bindParam(':senha', $senha);

        try {
            // Execute a declaração
            $sql->execute();

            // Verifique se o usuário foi encontrado
            if ($sql->rowCount() > 0) {
                echo "<script>alert('Sua conta já existe!'); 
                    location = '/gaming-void-develop/#register';</script>";
                exit();
            } else {
                echo "<script>alert('Sua conta não existe! Se registre, por favor'); 
                location = '/gaming-void-develop/#register';</script>";
                exit();
            }

        } catch (PDOException $e) {
            echo "<script>alert('Erro ao confirmar conta!'); 
            location = './index.html';</script>";
        }
    } else {
        echo "<script>alert('Erro ao preparar a declaração'); 
            location = './index.html';</script>";
    }

    // Feche a conexão
    $conectar = null;
} else {
    echo "<script>alert('Método de requisição inválido.'); 
        location = './index.html';</script>";
}
?>
