import { workList } from "../data/work.js";

export function updateWorkListIcons(isDarkTheme) {
	const projectsContainer = document.getElementById('projects');
	projectsContainer.innerHTML = ''; 
  
	workList.forEach((project, index) => {
	  const itemsHTML = project.skills.map(skill => `<span>${skill}</span>`).join(' ');
	  const imgSrc = isDarkTheme ? 
	  project.darkImgSrc || project.imgSrc : 
	  project.lightImgSrc || project.imgSrc;
  
	  const itemHTML = `
		<div id="${index}" class="projects_column_row">
		  <div class="project_image">
			<img src="${imgSrc}" alt="${project.altText}">
		  </div>
		  <div class="projects_text">
			<h2>${project.title}</h2>
			<p>${project.description}</p>
			<div class="project_description">${itemsHTML}</div>
			<button class="project_skills-icon">
			  <img src="${project.skillImgSrc}" alt="skill">
			</button>
		  </div>
		</div>
	  `;
  
	  projectsContainer.insertAdjacentHTML('beforeend', itemHTML);
	});
  }