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
<<<<<<< HEAD
  const passwordInput = document.getElementById('checkPassword')
  const icon = document.getElementById('icon')

  if (passwordInput.type === 'password') {
      passwordInput.setAttribute('type', 'text')
      icon.classList.add('hide')
  } else {
      passwordInput.setAttribute('type', 'password')
      icon.classList.remove('hide')
  }
}

// Função para mostrar/ocultar a senha
function showHideLoginPassword() {
  const passwordInput = document.getElementById('inputLoginPassword')
  const icon = document.getElementById('icon')
=======
  const passwordInput = document.getElementById('checkPassword');
  const icon = document.getElementById('icon');
>>>>>>> a7e6b16a67b58c2ddf596172319b6af7dbaf8544

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

// Adiciona evento de envio do formulário
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Valida o CPF
  let cpf = document.getElementById('inputDocument').value;
  if (!validarCPF(cpf)) {
      alert('CPF inválido!');
      return;
  }

  // Verifica se as senhas coincidem
  checkPassword();

  // Substitua isso por seu código para enviar o formulário ou realizar outras ações
  alert('Formulário enviado com sucesso!');
});

// Adiciona evento de formatação do CPF enquanto o usuário digita
document.getElementById('inputDocument').addEventListener('input', function(event) {
<<<<<<< HEAD
  let cpfInput = event.target
  cpfInput.value = formatarCPF(cpfInput.value)
})

// Código salvador (Andressa)
function showSignUpForm() {
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
}

function showLoginForm() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}
=======
  let cpfInput = event.target;
  cpfInput.value = formatarCPF(cpfInput.value);
});

function validaEmail() {
  const input = document.querySelector('#email');
  //arrow function
  input.addEventListener('blur', () => {
      usuario = input.value.substring(0, input.value.indexOf("@"));
      dominio = input.value.substring(input.value.indexOf("@") + 1, input.value.length);
      //retorno -1 significa que não encontrou nada
      /* Tamanho de usuário maior ou igual a 1 caracter e
          Tamanho do domínio maior ou igual a 3 caracteres E
          Usuário não pode conter o @.
          Domínio não pode conter o @.
          Usuário não pode conter o “ ” espaço em branco.
          Domínio não pode conter o “ ” espaço em branco.
          Domínio tem que possuir “.” Ponto.
          A posição do primeiro ponto tem que ser maior ou igual a 1, lembrando a posição 0 deve ser ocupado por algum caracter após o @.
          A posição do ultimo ponto tem que ser menor que o ultimo caracter, deve ser finalizado o domínio por um caracter. */

      if ((usuario.length >= 1) &&
          (dominio.length >= 3) &&
          (usuario.search("@") == -1) &&
          (dominio.search("@") == -1) &&
          (usuario.search(" ") == -1) &&
          (dominio.search(" ") == -1) &&
          (dominio.search(".") != -1) &&
          (dominio.indexOf(".") >= 1) &&
          (dominio.lastIndexOf(".") < dominio.length - 1)) {
          //alert("E-mail valido");
      }
      else {
          //alert("E-mail invalido");
          document.getElementById("email").value = "";
          document.getElementById("email").focus();

      }
  })
}

// Variável para guardar o estado atual do formulário (cadastro ou login)
let isRegisterForm = true; // true para cadastro, false para login

// Função para alternar entre os formulários
function toggleForm() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const showRegisterButton = document.getElementById('showRegisterForm');

    if (isRegisterForm) {
        // Esconde o formulário de cadastro e mostra o de login
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        showRegisterButton.innerText = 'Cadastrar'; // Atualiza o texto do botão
    } else {
        // Esconde o formulário de login e mostra o de cadastro
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        showRegisterButton.innerText = 'Voltar ao Cadastro'; // Atualiza o texto do botão
    }

    // Inverte o estado do formulário
    isRegisterForm = !isRegisterForm;
}

// Adiciona um evento de clique ao botão
document.getElementById('showRegisterForm').addEventListener('click', toggleForm);
>>>>>>> a7e6b16a67b58c2ddf596172319b6af7dbaf8544
