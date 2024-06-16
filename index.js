function showSideBar() {
    const nav = document.getElementById("header-nav");
    nav.style.display = 'flex';
  }
  
  function hideSidebar() {
    const nav = document.getElementById("header-nav");
    nav.style.display = 'none';
  }

document.addEventListener('DOMContentLoaded', () => {

const listSkills = [
    {
        id: 1,
        img: './assets/skills/javascript.svg',
        text: 'Javascript',
    },
    {
        id: 2,
        img: './assets/skills/typescript.svg',
        text: 'Typescript',
    },
    {
        id: 3,
        img: './assets/skills/react.svg',
        text: 'React',
    },
    {
        id: 4,
        img: './assets/skills/next.svg',
        text: 'Next.js',
    },
    {
        id: 5,
        img: './assets/skills/nodejs.svg',
        text: 'Node.js',
    },
    {
        id: 6,
        img: './assets/skills/express.svg',
        text: 'Express.js',
    },
    {
        id: 7,
        img: './assets/skills/nest.svg',
        text: 'Nest.js',
    },
    {
        id: 8,
        img: './assets/skills/socket.svg',
        text: 'Socket.io',
    },
    {
        id: 9,
        img: './assets/skills/postgreSQL.svg',
        text: 'PostgreSQL',
    },
    {
        id: 10,
        img: './assets/skills/mongoDB.svg',
        text: 'MongoDB',
    },
    {
        id: 11,
        img: './assets/skills/sass.svg',
        text: 'Sass/Scss',
    },
    {
        id: 12,
        img: './assets/skills/tailwindCss.svg',
        text: 'Tailwindcss',
    },
    {
        id: 13,
        img: './assets/skills/figma.svg',
        text: 'Figma',
    }, 
    {
        id: 14,
        img: './assets/skills/cypress.svg',
        text: 'Cypress',
    },
    {
        id: 15,
        img: './assets/skills/storybook.svg',
        text: 'StoryBook',
    },
    {
        id: 16,
        img: './assets/skills/git.svg',
        text: 'Git',
    }
];


//   window.addEventListener('scroll', showSideBar);

let languageSkills = document.getElementById('my-skills');

listSkills.forEach(i => {
    const listHTML = `
			<div class="language" key=${i.id}>
				<img src="${i.img}" alt="img">
				<span>${i.text}</span>
			</div>
          `
		languageSkills.insertAdjacentHTML('beforeend', listHTML);
});
});