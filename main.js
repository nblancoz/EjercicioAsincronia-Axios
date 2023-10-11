// Ejecicio
let users = [];
const btn = document.getElementById("btn");
const text = document.getElementById("text") || [];

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log((users = res.data)))
  .catch((err) => console.err(err));
console.log(users);
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    users.forEach((users = res.data) => {
      console.log(users.name);
    });
  })
  .catch((err) => console.err(err));

const showUsers = () => {
  text.innerHTML = "";
  users.forEach((users = res.data) => {
    const nombres = `Nombre del usuario: ${users.name}. <br>`;
    text.innerHTML += nombres;
  });
};
console.log(users);

btn.addEventListener("click", showUsers);

// Extra
// Punto 1
axios
  .get("https://dog.ceo/api/breeds/list/all")
  .then((res) => console.log(res.data.message))
  .catch((err) => console.err(err));

// Punto 2
axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then((res) => console.log(res.data.message))
  .catch((err) => console.err(err));

// Punto 3
axios
  .get("https://dog.ceo/api/breed/hound/images")
  .then((res) => console.log(res.data.message))
  .catch((err) => console.err(err));
