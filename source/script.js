function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let enterRequest = document.querySelector("#user-request");
  let apiKey = "86d11b15bf79a84309ce4be6o80tad43";
  let prompt = `User instructions: Generate a haiku poem about ${enterRequest.value}`;
  let context =
    "You are excellent at making thoughtful, heartfelt haiku poems. Make sure to follow user instructions, and follow traditional haiku poem structure. Use basic HTML, and separate each line with a <br />.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poem = document.querySelector("#poem");
  poem.classList.remove("hide");
  poem.innerHTML = `Generating a poem about ${enterRequest.value}...`;

  axios.get(apiUrl).then(showPoem);
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
