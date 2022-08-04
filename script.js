async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

const btnRandom = document.getElementById("btn-random");
const userCard = document.getElementById("div-user-card");
const loadCard = document.getElementById("div-loading-card");
const imgPro = document.querySelector("#img-profile");
const p1 = document.getElementById("p-name");
const p2 = document.getElementById("p-email");
const p3 = document.getElementById("p-address");

const resp = await axios.get("https://randomuser.me/api");

btnRandom.onclick = async () => {
  userCard.element.style.display = "none";
  loadCard.element.style.display = "";

  imgPro.src = resp.data.message;
};

imgPro.onload = () => {
  userCard.element.style.display = "";
  loadCard.element.style.display = "none";
  p1.innerText = resp.data.name;

  imgPro.innerText = setTimeout(() => {
    imgPro.className = "";
  }, 1000);
};
