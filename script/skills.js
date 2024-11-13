import { listSkills } from "../data/list.js";

export function updateSkillsIcons(isDarkTheme) {
    let languageSkills = document.getElementById('my-skills');
    languageSkills.innerHTML = ''; 
  
    listSkills.forEach(skill => {
      const imgSrc = isDarkTheme  ? skill.darkImgSrc : skill.lightImgSrc;
      const listHTML = `
        <div class="language" key=${skill.id}>
          <img src="${imgSrc}" alt="img">
          <span>${skill.text}</span>
        </div>
      `;
      languageSkills.insertAdjacentHTML('beforeend', listHTML);
    });
}
