// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menuOptions = document.querySelector('.menu-options');
const menu = document.getElementById('menu');

// Open menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
});
// Close menu
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});
// Close the menu if any link it's clicked
menuOptions.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.style.display = 'none';
  }
});

// --------- Speakers Data ------------------------------
const speakersData = [
  {
    name: 'Andrew Ng',
    img: 'img/Andrew-Ng.png',
    review: 'Computer scientist and AI expert who co-founded Google Brain',
    description:
      'Founded Coursera, an online learning platform, and has been involved in various AI startups.',
  },
  {
    name: 'Yoshua Bengio',
    img: 'img/Yoshua-Bengio.png',
    review: 'Computer scientist and professor at the University of Montreal',
    description:
      'He has made significant contributions to the field of deep learning. Co-recipient of the Turing Award, which is often referred to as the Nobel Prize of Computing.',
  },
  {
    name: 'Fei-Fei Li',
    img: 'img/Fei-Fei Li.png',
    review: 'Computer scientist and professor at Stanford University',
    description:
      'Co-founder of AI4ALL, a nonprofit organization that aims to increase diversity and inclusivity in the field of artificial intelligence.',
  },
  {
    name: 'Elon Musk',
    img: 'img/Elon Musk.png',
    review:
      'Entrepreneur and CEO of Tesla, SpaceX, Neuralink, and The Boring Company',
    description:
      'Musk has been vocal about his concerns regarding the potential dangers of AI and has advocated for the development of ethical and responsible AI.',
  },
  {
    name: 'Demis Hassabis',
    img: 'img/Demis Hassabis.png',
    review: 'Computer scientist and co-founder of DeepMind',
    description:
      'DeepMind has made significant breakthroughs in areas such as reinforcement learning, game playing, and healthcare, and was acquired by Google in 2015.',
  },
  {
    name: 'Geoffrey Hinton',
    img: 'img/Geoffrey Hinton.png',
    review: 'Computer scientist and professor at the University of Toronto',
    description:
      'He is considered one of the pioneers of deep learninga and also is a co-recipient of the Turing Award.',
  },
];

function renderSpeakersSection() {
  const speakersSection = document.getElementById('speakers');
  speakersSection.classList.add('speakers-section', 'p-3', 'p-lg-5', 'h-100', 'bg-white');

  const speakersContent = `<h2 class="text-center">Featured Speakers</h2>
  <div class="guide-bar"></div>
  <div class="articles-container"></div>`;

  if (speakersSection.nodeType === Node.ELEMENT_NODE) {
    speakersSection.insertAdjacentHTML('afterbegin', speakersContent);
  }

  const articlesContainer = document.querySelector('.articles-container');

  if (articlesContainer.nodeType === Node.ELEMENT_NODE) {
    speakersData.forEach((speaker) => articlesContainer.insertAdjacentHTML(
      'afterbegin',
      `<article class="d-flex gap-2">
    <img
      class="p-0"
      src="${speaker.img}"
      alt="speaker photo"
      width="150px"
      height="130px"
    />
    <div class="d-flex flex-column speaker gap-2">
      <h4 class="fw-bold m-0">${speaker.name}</h4>
      <p class="m-0">
        ${speaker.review}
      </p>
      <div class="little-guide-bar m-0"></div>
      <p class="fw-bold">
        ${speaker.description}
      </p>
    </div>
  </article>`,
    ));
  }
}

renderSpeakersSection();