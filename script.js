const movies = {
  id: "movies",
  logo: "Meaningful Movies",
  button: "Watch",
  cards: [
    {
      title: "Youth",
      sub: "2015",
      text: "A retired orchestra conductor is on vacation with his daughter and his film director best friend in the Alps when he receives an invitation from Queen Elizabeth II to perform for Prince Philip's birthday.",
    },
    {
      title: "American Honey",
      sub: "2016",
      text: "A teenage girl with nothing to lose joins a traveling magazine sales crew, and gets caught up in a whirlwind of hard partying, law bending and young love as she criss-crosses the Midwest with a band of misfits.",
    },
    {
      title: "Blue is the warmest color",
      sub: "2013",
      text: "Adèle's life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire and to assert herself as a woman and as an adult. In front of others, Adèle grows, seeks herself, loses herself, and ultimately finds herself through love and loss.",
    },
    {
      title: "Moonrise Kingdom",
      sub: "2012",
      text: "A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.",
    },
    {
      title: "Howl's Moving Castle",
      sub: "2004",
      text: "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    },
    {
      title: "Three Billboards Outside Ebbing, Missouri",
      sub: "2017",
      text: "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
    },
    {
      title: "Loro",
      sub: "2018",
      text: "An escort service owner uses his girls to get close to politician/PM and media mogul, Silvio Berlusconi. But in 2006, he's preoccupied with his shaky marriage and losing an election.",
    },
    {
      title: "Parasite",
      sub: "2019",
      text: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
  ],
};

console.log(movies.cards.length);

const root = document.querySelector("#app");
const container = document.querySelector("#CardContainer");

const generateHeader = () => {
  const createHeader = document.createElement("header");

  const header = `
      <span class="Logo">${movies.logo.toUpperCase()}</span>
      <span class="material-symbols-outlined Menu">menu</span>
`;

  createHeader.innerHTML = header;

  root.appendChild(createHeader);
};

const generateCards = () => {
  for (let i = 0; i < movies.cards.length; i++) {
    const createCard = document.createElement("div");
    createCard.setAttribute("class", "Card");
    const Card = `
    <div class="NumberSection">
     <div class="NumberContainer">${i + 1}</div>
    </div>
    
     <div class="titleSection">
     <span class="Title">${movies.cards[i].title}</span>
     <span class="Sub">${movies.cards[i].sub}</span>
     <hr>
     </div>
     <div class="textSection">
     <p class="text">
     ${movies.cards[i].text}
     </p>
     </div>
     <div class="buttonSection">
     <button class="Button">${movies.button}</button>
     </div>
    `;

    createCard.innerHTML = Card;

    container.appendChild(createCard);
  }
  return true;
};
generateHeader();
generateCards();
