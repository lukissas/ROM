function mostrarFormulario() {
  document.querySelector(".Comprar").style.display = "none";
  document.querySelector(".Formulario").style.display = "block";
}

function borrarCampos() {
  // Obtener los campos de entrada por sus identificadores
  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const direccionInput = document.getElementById('direccion');
  const emailInput = document.getElementById('email');
  const tarjetaInput = document.getElementById('tarjeta');
  // Otros campos de entrada aquí

  // Restablecer los valores de los campos de entrada
  nombreInput.value = '';
  apellidoInput.value = '';
  direccionInput.value = '';
  emailInput.value = '';
  tarjetaInput.value = '';
  // Otros campos de entrada aquí
}




// Simulación de inicio de sesión (Para fines de demostración)
function login() {
  const username = prompt("Ingrese su nombre de usuario:");
  if (username) {
    document.getElementById("user_info").innerText = "Bienvenido, " + username;
  }
}

// Función para cerrar sesión
function logout() {
  document.getElementById("user_info").innerText = "";
}

// Evento para el botón de inicio de sesión
const loginButton = document.getElementById("login_button");
if (loginButton) {
  loginButton.addEventListener("click", login);
}

// Evento para el botón de cerrar sesión (opcional, dependiendo de tu implementación)
const logoutButton = document.getElementById("logout_button");
if (logoutButton) {
  logoutButton.addEventListener("click", logout);
}




/*registro*/
function handleRegister(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    return false;
  }

  // Simulamos el proceso de registro exitoso.
  // En una aplicación real, aquí enviaríamos los datos al servidor y recibiríamos una respuesta.
  // Si el registro es exitoso, podemos mostrar el mensaje de éxito.
  showSuccessMessage();

  // En un caso real, aquí redirigiríamos al usuario a la página de inicio de sesión o donde sea necesario.
  // window.location.href = "index.html";

  return false;
}

function showSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.remove("hidden");
}

function goToIndex() {
  window.location.href = "index.html";
}

document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Simulamos un registro exitoso (Aquí es donde llamarías a tu backend para el registro real)
  // Mostramos el mensaje de registro exitoso
  document.getElementById("successMessage").style.display = "block";
  // Ocultamos el formulario de registro
  document.getElementById("registerForm").style.display = "none";
  // Mostramos el botón de volver
  document.getElementById("returnButton").style.display = "block";
});