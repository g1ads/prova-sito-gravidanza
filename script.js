// Simulazione login semplice
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validazione di base
  if (email === "test@example.com" && password === "password") {
    alert("Login riuscito!");
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('tracker-section').style.display = 'block';
  } else {
    alert("Credenziali errate. Riprova.");
  }
});

// Calcolo giorni e mesi trascorsi
document.getElementById('tracker-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const startDate = new Date(document.getElementById('start-date').value);
  const today = new Date();

  if (startDate > today) {
    alert("La data di inizio gravidanza non può essere nel futuro!");
    return;
  }

  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);

  const resultText = `Sono trascorsi ${diffDays} giorni (${diffMonths} mesi) dalla data di inizio gravidanza.`;
  document.getElementById('elapsed-time').textContent = resultText;
  document.getElementById('result').classList.remove('hidden');
});

// Logout
document.getElementById('logout').addEventListener('click', function () {
  document.getElementById('tracker-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
});
