const listSkills = [
	{ 
    "id": 1, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/javascript.svg", 
    "darkImgSrc": "./assets/images/skills/darkmode-icons/javascript.svg",
    "text": "Javascript" 
  },
	{ 
    "id": 2, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/typescript.svg", 
    "darkImgSrc": "./assets/images/skills/darkmode-icons/typescript.svg",
    "text": "Typescript" 
  },
	{ 
    "id": 3, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/react.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/react.svg", 
    "text": "React" },
	{ 
    "id": 4, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/next.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/next.svg", 
    "text": "Next.js" 
  },
	{ 
    "id": 5, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/nodejs.svg", 
    "darkImgSrc": "./assets/images/skills/darkmode-icons/nodejs.svg",
    "text": "Node.js" 
  },
	{ 
    "id": 6, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/express.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/express.svg", 
    "text": "Express.js" },
	{ 
    "id": 7, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/nest.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/nest.svg", 
    "text": "Nest.js" 
  },
	{ 
    "id": 8, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/socket.svg", 
    "darkImgSrc": "./assets/images/skills/darkmode-icons/socket.svg",
    "text": "Socket.io" 
  },
	{ 
    "id": 9, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/postgreSQL.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/postgreSQL.svg", 
    "text": "PostgreSQL" 
  },
	{ 
    "id": 10, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/mongoDB.svg", 
    "darkImgSrc": "./assets/images/skills/darkmode-icons/mongoDB.svg",
    "text": "MongoDB" 
  },
	{ 
    "id": 11, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/sass.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/sass.svg", 
    "text": "Sass/Scss" 
  },
	{ 
    "id": 12, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/tailwindCss.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/tailwindCss.svg", 
    "text": "Tailwindcss" 
  },
	{ 
    "id": 13, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/figma.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/figma.svg",
    "text": "Figma" 
  },
	{ 
    "id": 14, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/cypress.svg", 
    "darkImgSrc": "./assets/images/skills/darkmode-icons/cypress.svg",
    "text": "Cypress" 
  },
	{ 
    "id": 15, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/storybook.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/storybook.svg", 
    "text": "StoryBook" 
  },
	{ 
    "id": 16, 
    "lightImgSrc": "./assets/images/skills/lightmode-icons/git.svg",
    "darkImgSrc": "./assets/images/skills/darkmode-icons/git.svg", 
    "text": "Git" 
  }
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

    updateSkillsIcons();
    toggleIconsVisibility();

    toggleClassAndStyle(elementsToToggle, 'dark-theme', { backgroundColor: 'rgba(31, 41, 55, 1)' }, { background: 'rgba(249, 250, 251, 1)' });
    toggleClassAndStyle(titleTexts, 'dark-theme', { color: 'rgba(249, 250, 251, 1)' }, { color: 'rgb(75, 85, 99)' });
    toggleClassAndStyle(document.querySelectorAll('p, li'), 'dark-theme', 
    { color: 'rgba(209, 213, 219, 1)' }, { color: 'rgb(75, 85, 99)' });
    toggleClassAndStyle(document.querySelectorAll('.skills_name span'), 'dark-theme', { color: 'rgba(209, 213, 219, 1)' }, { color: 'rgba(75, 85, 99, 1)' });

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

function updateSkillsIcons() {
  let languageSkills = document.getElementById('my-skills');
  languageSkills.innerHTML = ''; 

  listSkills.forEach(skill => {
    const imgSrc = body.classList.contains('dark-theme') ? skill.darkImgSrc : skill.lightImgSrc;
    const listHTML = `
      <div class="language" key=${skill.id}>
        <img src="${imgSrc}" alt="img">
        <span>${skill.text}</span>
      </div>
    `;
    languageSkills.insertAdjacentHTML('beforeend', listHTML);
  });
}
updateSkillsIcons();

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