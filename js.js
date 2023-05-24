<script>
// Obtém o elemento do ícone de email
var emailIcon = document.querySelector('.email-icon');

// Adiciona um ouvinte de eventos para o clique no ícone
emailIcon.addEventListener('click', function() {
  // Obtém o elemento de input de email
  var emailInput = document.querySelector('.email-input');

  // Seleciona o conteúdo do input
  emailInput.select();
  emailInput.setSelectionRange(0, 99999); // Para dispositivos móveis

  // Copia o conteúdo do input
  document.execCommand('copy');

  // Exibe a mensagem de "copiado" temporariamente
  var copyMessage = document.querySelector('.copy-message');
  copyMessage.textContent = 'Copiado';
  setTimeout(function() {
    copyMessage.textContent = 'Copiar';
  }, 2000); // Tempo em milissegundos para exibir a mensagem
});
</script>

