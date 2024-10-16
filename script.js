let toDoArray = "";
let i = 1;

const toDoName = document.getElementById("to-do-name");

const funzioneSumbmit = function (e) {
  e.preventDefault();

  toDoArray = toDoName.value;

  let divisore = document.createElement("div");
  let stringa = String(i);
  divisore.id = "divisore-" + stringa;

  divisore.classList.add("to-do-list-card");

  divisore.innerHTML = `
        <p>${stringa + ". " + toDoArray}</p>
        <button class='bottone'>X</button>
      `;

  const savedSection = document.getElementById("saved-to-do");
  savedSection.appendChild(divisore);

  let paragrafo = document.querySelectorAll("p");

  paragrafo.forEach(function (paragrafo) {
    paragrafo.addEventListener("click", function () {
      paragrafo.style.textDecoration = "line-through";
    });
  });

  let bottoni = document.getElementsByClassName("bottone");

  Array.from(bottoni).forEach(function (bottone) {
    bottone.addEventListener("click", function () {
      let divisoreDaRimuovere = document.getElementById("divisore-" + stringa);
      if (divisoreDaRimuovere) {
        divisoreDaRimuovere.remove();
      }
    });
  });

  nameForm.reset();
  i++;
};

const nameForm = document.getElementById("form");

nameForm.addEventListener("submit", funzioneSumbmit);
