const listSkills = [
	{ "id": 1, "img": "./assets/images/skills/javascript.svg", "text": "Javascript" },
	{ "id": 2, "img": "./assets/images/skills/typescript.svg", "text": "Typescript" },
	{ "id": 3, "img": "./assets/images/skills/react.svg", "text": "React" },
	{ "id": 4, "img": "./assets/images/skills/next.svg", "text": "Next.js" },
	{ "id": 5, "img": "./assets/images/skills/nodejs.svg", "text": "Node.js" },
	{ "id": 6, "img": "./assets/images/skills/express.svg", "text": "Express.js" },
	{ "id": 7, "img": "./assets/images/skills/nest.svg", "text": "Nest.js" },
	{ "id": 8, "img": "./assets/images/skills/socket.svg", "text": "Socket.io" },
	{ "id": 9, "img": "./assets/images/skills/postgreSQL.svg", "text": "PostgreSQL" },
	{ "id": 10, "img": "./assets/images/skills/mongoDB.svg", "text": "MongoDB" },
	{ "id": 11, "img": "./assets/images/skills/sass.svg", "text": "Sass/Scss" },
	{ "id": 12, "img": "./assets/images/skills/tailwindCss.svg", "text": "Tailwindcss" },
	{ "id": 13, "img": "./assets/images/skills/figma.svg", "text": "Figma" },
	{ "id": 14, "img": "./assets/images/skills/cypress.svg", "text": "Cypress" },
	{ "id": 15, "img": "./assets/images/skills/storybook.svg", "text": "StoryBook" },
	{ "id": 16, "img": "./assets/images/skills/git.svg", "text": "Git" }
];


const data = {
    "work": [
        {
            "id": 1,
            "imgSrc": "../assets/images/work/work.png",
            "altText": "work_img",
            "title": "Fiskil",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            "skills": ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
            "skillImgSrc": "../assets/images/work/skill.svg"
        },
        {
            "id": 2,
            "imgSrc": "../assets/images/work/work.png",
            "altText": "work_img",
            "title": "Fiskil",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
						"skills": ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
            "skillImgSrc": "../assets/images/work/skill.svg"
        },
        {
            "id": 3,
            "imgSrc": "../assets/images/work/work.png",
            "altText": "work_img",
            "title": "Fiskil",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            "skills": ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Storybook", "Git"],
            "skillImgSrc": "../assets/images/work/skill.svg"
        }
    ]
};

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

function showSideBar() {
    const nav = document.getElementById("header-nav");
    nav.style.display = 'flex';
}
  
function hideSidebar() {
  const nav = document.getElementById("header-nav");
  nav.style.display = 'none';
}

let toggleIcons  = document.querySelectorAll("#icon");
const body = document.querySelector('body');
const desktopLightModeDiv = document.getElementById('desktopLightMode');
const desktopDarkModeDiv = document.getElementById('desktopDarkMode');
const mobileLightModeDiv = document.getElementById('mobileLightMode');
const mobileDarkModeDiv = document.getElementById('mobileDarkMode');
const lightIcons = document.querySelectorAll('.header_light-icon.theme-icon');
const darkIcons = document.querySelectorAll('.header_dark-icon.theme-icon');
const elementsToToggle = document.querySelectorAll(
  '.changed-background, .testimionals_row_piece, .projects_text, .mobile-nav', '.columns', '.columns_piece', '.project_image', '.projects_text'
);
const titleTexts = document.querySelectorAll('h3, a');
const allSpans = document.querySelectorAll('span');


const toggleIconsVisibility = () => {
  lightIcons.forEach(icon => icon.style.display = body.classList.contains('dark-theme') ? 'flex' : 'none');
  darkIcons.forEach(icon => icon.style.display = body.classList.contains('dark-theme') ? 'none' : 'flex');
};

const toggleClassAndStyle = (elements, className, darkStyle, lightStyle) => {
  elements.forEach(element => {
    if (body.classList.contains('dark-theme')) {
      element.classList.add(className);
      Object.assign(element.style, darkStyle);
    } else {
      element.classList.remove(className);
      Object.assign(element.style, lightStyle);
    }
  });
};

toggleIcons.forEach(toggle => {
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    toggleClassAndStyle(elementsToToggle, 'dark-theme', { backgroundColor: 'rgba(31, 41, 55, 1)' }, { background: 'rgba(249, 250, 251, 1)' });
    toggleClassAndStyle(titleTexts, 'dark-theme', { color: 'rgba(249, 250, 251, 1)' }, { color: 'rgb(75, 85, 99)' });
    toggleClassAndStyle(document.querySelectorAll('p, li'), 'dark-theme', 
    { color: 'rgba(209, 213, 219, 1)' }, { color: 'rgb(75, 85, 99)' })
    toggleClassAndStyle(allSpans, 'dark-theme', { color: 'rgba(209, 213, 219, 1)', background: 'rgba(55, 65, 81, 1)' }, { color: 'rgba(75, 85, 99, 1)', background: 'rgba(229, 231, 235, 1)' });
    toggleClassAndStyle(document.querySelectorAll('.work span'), 'dark-theme', { color: 'rgba(209, 213, 219, 1)', background: 'rgba(55, 65, 81, 1)' }, { color: 'rgba(75, 85, 99, 1)', background: 'rgba(229, 231, 235, 1)' });
    toggleClassAndStyle(document.querySelectorAll('.columns_piece'), 'dark-theme', { background: 'rgba(17, 24, 39, 1)', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.15)' }, { background: 'rgba(255, 255, 255, 1)' })
    toggleClassAndStyle(document.querySelectorAll('.project_image'), 'dark-theme', { background: 'rgba(55, 65, 81, 1)' }, { background: 'rgb(243, 244, 246)' })
    toggleClassAndStyle(document.querySelectorAll('.projects_text'), 'dark-theme', { background: 'rgba(31, 41, 55, 1)' }, { background: 'rgb(255, 255, 255)' })


    toggleIconsVisibility();

    if (body.classList.contains('dark-theme')) {
      desktopLightModeDiv.style.display = 'none';
      desktopDarkModeDiv.style.display = 'flex';
      mobileLightModeDiv.style.display = 'none';
      mobileDarkModeDiv.style.display = 'flex';
    }  else {
      desktopLightModeDiv.style.display = 'flex';
      desktopDarkModeDiv.style.display = 'none';
      mobileLightModeDiv.style.display = 'flex';
      mobileDarkModeDiv.style.display = 'none';
    }
  });
  
});
toggleIconsVisibility();

document.addEventListener('DOMContentLoaded', () => {

let languageSkills = document.getElementById('my-skills');

listSkills.forEach(i => {
    const listHTML = `
			<div class="language" key=${i.id}>
				<img src="${i.img}" alt="img">
				<span>${i.text}</span>
			</div>
          `;
		languageSkills.insertAdjacentHTML('beforeend', listHTML);
});

});

const projectsContainer = document.getElementById('projects');

data.work.forEach((project, index) => {

  const itemsHTML = project.skills.map(skill => `<span>${skill}</span>`).join(' ')
	const itemHTML = `
	<div id="${project.id}" class="projects_column_row">
		<div class="project_image">
			<img src="${project.imgSrc}" alt="${project.altText}">
		</div>
		<div class="projects_text">
			<h2>${project.title}</h2>
			<p>${project.description}</p>
			<div class="project_description">${itemsHTML}</div>
			<div class="project_skills-icon">
				<img src="${project.skillImgSrc}" alt="skill">
			</div>
		</div>
	</div>
	`

	projectsContainer.insertAdjacentHTML('beforeend', itemHTML);
});