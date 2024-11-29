/* Importiamo i font */
@import url('https://fonts.googleapis.com/css2?family=Bookman+Old+Style:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');

/* Generali */
body {
  font-family: 'Bookman Old Style', serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

header {
  background-color: #FF69B4; /* Rosa */
  color: white;
  text-align: center;
  padding: 1rem;
}

header h1 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
}

main {
  max-width: 600px;
  margin: 20px auto;
  background: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

h1, h2 {
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, button {
  padding: 10px;
  font-size: 16px;
  font-family: 'Bookman Old Style', serif;
}

button {
  background-color: #FF69B4; /* Rosa */
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #FF85C1; /* Rosa più chiaro */
}

footer {
  text-align: center;
  margin-top: 20px;
  color: #555;
}

.hidden {
  display: none;
}

/* Link */
a {
  color: #FF69B4;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

