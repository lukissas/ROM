document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle_button');
  const navMobile = document.querySelector('.nav_mobile');

  
  toggleButton.addEventListener('click', function() {
    navMobile.classList.toggle('show');
  });
});


function copiarCVU() {
  var cvu = "0170084840000047898378"; 
  navigator.clipboard.writeText(cvu).then(function() {
  }, function(err) {
      console.error('Error al copiar CVU: ', err);
  });
}

function copiarALIAS() {
  var alias = "OGRO.PIBE.HORA"; 
  navigator.clipboard.writeText(alias).then(function() {
  }, function(err) {
      console.error('Error al copiar ALIAS: ', err);
  });
}
