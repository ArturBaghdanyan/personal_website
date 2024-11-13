import { updateSkillsIcons } from "./script/skills.js";
import { updateWorkListIcons } from "./script/workList.js";

const navLinks = document.querySelectorAll('.nav > a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    this.classList.add('active');
  });
});

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


let toggleIcons  = document.querySelectorAll("#icon");
export const body = document.querySelector('body');
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
  const isDarkTheme = body.classList.contains('dark-theme');
  elements.forEach(element => {
    element.classList.toggle(className, isDarkTheme);
    Object.assign(element.style, isDarkTheme ? darkStyle : lightStyle);
  });
};

const toggleTheme = () => {
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');

    const toggleThemeForListItems = (elementsToToggle, isDarkTheme) => {
      const skillsContainer = document.querySelector('.skills');
      const projectsContainer = document.querySelector('.work');
      const contact = document.querySelector('.contact');
      const personal = document.querySelector('.personal');
      
      elementsToToggle.forEach(listItem => {
        listItem.classList.toggle('dark-theme', isDarkTheme);
      });
    
      const backgroundColor = isDarkTheme ? 'rgba(31, 41, 55, 1)' : 'rgba(249, 250, 251, 1)';
      
      skillsContainer.style.backgroundColor = backgroundColor;
      projectsContainer.style.backgroundColor = backgroundColor;
      contact.style.backgroundColor = backgroundColor;
      personal.style.backgroundColor = backgroundColor;
    };
    
    toggleThemeForListItems(elementsToToggle, isDarkTheme);
    

    updateSkillsIcons(isDarkTheme);
    updateWorkListIcons(isDarkTheme);
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
    
    if (isDarkTheme) {
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
  
  }
  toggleIcons.forEach(toggle => toggle.addEventListener('click', toggleTheme))


