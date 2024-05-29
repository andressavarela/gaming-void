// Função para validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999') {
      return false;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let resto = 11 - (soma % 11);
  let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

  // Verifica o primeiro dígito verificador
  if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
      return false;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

  // Verifica o segundo dígito verificador
  if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
      return false;
  }

  return true;
}

// Função para verificar se as senhas coincidem
function checkPassword() {
  const password = document.getElementById('inputPassword').value;
  const checkPassword = document.getElementById('checkPassword').value;

  if (password === checkPassword) {
      document.getElementById('checkPassword').setCustomValidity('');
  } else {
      document.getElementById('checkPassword').setCustomValidity('As senhas não conferem');
  }
}

// Função para mostrar/ocultar a senha
function showHidePassword() {
  const passwordInput = document.getElementById('inputPassword');
  const checkPasswordInput = document.getElementById('checkPassword');
  const icon = document.getElementById('icon');

  if (passwordInput.type === 'password') {
      passwordInput.setAttribute('type', 'text');
      checkPasswordInput.setAttribute('type', 'text');
      icon.classList.add('hide');
  } else {
      passwordInput.setAttribute('type', 'password');
      checkPasswordInput.setAttribute('type', 'password');
      icon.classList.remove('hide');
  }
}

// Função para mostrar/ocultar a senha no login
function showHideLoginPassword() {
  const passwordInput = document.getElementById('inputLoginPassword');
  const icon = document.getElementById('icon');

  if (passwordInput.type === 'password') {
      passwordInput.setAttribute('type', 'text');
      icon.classList.add('hide');
  } else {
      passwordInput.setAttribute('type', 'password');
      icon.classList.remove('hide');
  }
}

// Função para formatar CPF enquanto o usuário digita
function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o primeiro ponto
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o segundo ponto
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere o traço
  return cpf;
}

// Adiciona evento de formatação do CPF enquanto o usuário digita
document.getElementById('inputDocument').addEventListener('input', function(event) {
  let cpfInput = event.target;
  cpfInput.value = formatarCPF(cpfInput.value);
});

// Funções para alternar entre os formulários
function showSignUpForm() {
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("forgotPasswordForm").style.display = "none"; // Oculta o formulário de redefinição de senha ao mudar para o formulário de cadastro
}

function showLoginForm() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("forgotPasswordForm").style.display = "none";
}

function showForgotPassword() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("forgotPasswordForm").style.display = "block";
}

// Adicionando o evento para verificar se as senhas coincidem ao campo de confirmação de senha
document.getElementById('checkPassword').addEventListener('input', checkPassword);

// Event listener para o botão "Esqueci minha senha"
document.getElementById('forgotPasswordButton').addEventListener('click', showForgotPassword);

// Event listener para o botão "Voltar ao Login" no formulário de redefinição de senha
document.getElementById('backToLoginButton').addEventListener('click', showLoginForm);

// Função para alternar visibilidade da senha no formulário de redefinição de senha
function showHideResetPassword() {
  const newPasswordInput = document.getElementById('inputNewPassword');
  const confirmNewPasswordInput = document.getElementById('inputConfirmNewPassword');
  const icon = document.getElementById('icon');

  if (newPasswordInput.type === 'password') {
      newPasswordInput.setAttribute('type', 'text');
      confirmNewPasswordInput.setAttribute('type', 'text');
      icon.classList.add('hide');
  } else {
      newPasswordInput.setAttribute('type', 'password');
      confirmNewPasswordInput.setAttribute('type', 'password');
      icon.classList.remove('hide');
  }
}
