export class bar {
  constructor() {
    console.log("Oi amigo!");
  }
}

export const changeTitle = text => {
  const title = document.getElementsByTagName("h1")[0];

  console.log(title);

  debugger;

  // Adiciono um texto no H1 just for fun 🙈
  title.innerHTML = title.innerHTML + "<br>" + text;
};
