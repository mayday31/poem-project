function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem here",
    autoStart: true,
  });
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
