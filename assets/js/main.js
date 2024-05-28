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
  const passwordInput = document.getElementById('checkPassword');
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

function showSignUpForm() {
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
}

function showLoginForm() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function showHideLoginPassword() {
  const passwordInput = document.getElementById('inputLoginPassword')
  const icon = document.getElementById('icon')

  if (passwordInput.type === 'password') {
      passwordInput.setAttribute('type', 'text')
      icon.classList.add('hide')
  } else {
      passwordInput.setAttribute('type', 'password')
      icon.classList.remove('hide')
  }
}

// // Função para enviar formulários via Fetch API
// function submitForm(event, formId, url) {
//   event.preventDefault();
//   const form = document.getElementById(formId);
//   const formData = new FormData(form);
  
//   fetch(url, {
//       method: 'GET', // Altere para 'POST' se o seu script PHP usar POST
//       body: formData
//   })
//   .then(response => response.json())
//   .then(data => {
//       console.log('Success:', data);
//       if (data.status === 'success' && formId === 'loginForm') {
//           showPopup();
//       } else {
//           alert(data.message || 'Formulário enviado com sucesso!');
//       }
//       form.reset();
//   })
//   .catch((error) => {
//       console.error('Error:', error);
//       alert('Erro ao enviar o formulário.');
//   });
// }

// function showPopup() {
//   const popup = document.getElementById('successPopup');
//   popup.style.display = 'block';
// }

// function closePopup() {
//   const popup = document.getElementById('successPopup');
//   popup.style.display = 'none';
// }