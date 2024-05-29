<?php
// Inclua o arquivo de conexão com o banco de dados
include_once 'conexao.php';

// Verifique se os dados foram enviados via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtenha os dados do formulário
    $email = $_POST['fEmail'];
    $novaSenha = $_POST['fNewPassword'];

    // Verifique se o email existe no banco de dados
    $sql = $conectar->prepare("SELECT * FROM membros WHERE email = :email");
    $sql->bindParam(':email', $email);
    $sql->execute();
    
    if ($sql->rowCount() > 0) {
        // O email existe no banco de dados, então redefina a senha
        // Atualize a senha no banco de dados
        $sqlUpdate = $conectar->prepare("UPDATE membros SET senha = :novaSenha WHERE email = :email");
        $sqlUpdate->bindParam(':novaSenha', $novaSenha);
        $sqlUpdate->bindParam(':email', $email);
        $sqlUpdate->execute();

        // Mostrar alerta de sucesso
        echo "<script>alert('Senha redefinida com sucesso!'); 
                    location = '/gaming-void-develop/#register';</script>";
                exit();
    } else {
        // O email não está cadastrado, mostrar alerta de erro
        echo "<script>alert('Esse email não está cadastrado.'); 
                    location = '/gaming-void-develop/#register';</script>";
                exit();
    }
} else {
    // Se os dados não foram enviados via POST, erro
    echo "<script>alert('Método de requisição inválido.'); 
        location = './index.html';</script>";
    exit();
}
?>
