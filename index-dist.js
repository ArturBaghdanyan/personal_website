const listSkills=[{id:1,img:"./assets/images/skills/javascript.svg",text:"Javascript"},{id:2,img:"./assets/images/skills/typescript.svg",text:"Typescript"},{id:3,img:"./assets/images/skills/react.svg",text:"React"},{id:4,img:"./assets/images/skills/next.svg",text:"Next.js"},{id:5,img:"./assets/images/skills/nodejs.svg",text:"Node.js"},{id:6,img:"./assets/images/skills/express.svg",text:"Express.js"},{id:7,img:"./assets/images/skills/nest.svg",text:"Nest.js"},{id:8,img:"./assets/images/skills/socket.svg",text:"Socket.io"},{id:9,img:"./assets/images/skills/postgreSQL.svg",text:"PostgreSQL"},{id:10,img:"./assets/images/skills/mongoDB.svg",text:"MongoDB"},{id:11,img:"./assets/images/skills/sass.svg",text:"Sass/Scss"},{id:12,img:"./assets/images/skills/tailwindCss.svg",text:"Tailwindcss"},{id:13,img:"./assets/images/skills/figma.svg",text:"Figma"},{id:14,img:"./assets/images/skills/cypress.svg",text:"Cypress"},{id:15,img:"./assets/images/skills/storybook.svg",text:"StoryBook"},{id:16,img:"./assets/images/skills/git.svg",text:"Git"}],data={work:[{id:1,imgSrc:"../assets/images/work/work_img.png",altText:"work_img",title:"Fiskil",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",skills:["React","Next.js","Typescript","Nest.js","PostgreSQL","Tailwindcss","Figma","Cypress","Storybook","Git"],skillImgSrc:"../assets/images/work/skill.svg"},{id:2,imgSrc:"../assets/images/work/work_img.png",altText:"work_img",title:"Fiskil",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",skills:["React","Next.js","Typescript","Nest.js","PostgreSQL","Tailwindcss","Figma","Cypress","Storybook","Git"],skillImgSrc:"../assets/images/work/skill.svg"},{id:3,imgSrc:"../assets/images/work/work_img.png",altText:"work_img",title:"Fiskil",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",skills:["React","Next.js","Typescript","Nest.js","PostgreSQL","Tailwindcss","Figma","Cypress","Storybook","Git"],skillImgSrc:"../assets/images/work/skill.svg"}]};function showSideBar(){document.getElementById("header-nav").style.display="flex"}function hideSidebar(){document.getElementById("header-nav").style.display="none"}let toggleIcons=document.querySelectorAll("#icon");const body=document.querySelector("body"),lightModeDiv=document.getElementById("lightMode"),darkModeDiv=document.getElementById("darkMode"),lightIcon=document.getElementById("light-icon"),darkIcon=document.getElementById("dark-icon"),about=document.querySelector(".about");toggleIcons.forEach((s=>{s.addEventListener("click",(function(){body.classList.toggle("dark-theme"),body.classList.contains("dark-theme")?(lightModeDiv.style.display="none",darkModeDiv.style.display="flex",lightIcon.style.display="flex",darkIcon.style.display="none"):(lightModeDiv.style.display="flex",darkModeDiv.style.display="none",darkIcon.style.display="flex")}))})),document.addEventListener("DOMContentLoaded",(()=>{let s=document.getElementById("my-skills");listSkills.forEach((t=>{const e=`\n\t\t\t<div class="language" key=${t.id}>\n\t\t\t\t<img src="${t.img}" alt="img">\n\t\t\t\t<span>${t.text}</span>\n\t\t\t</div>\n          `;s.insertAdjacentHTML("beforeend",e)}))}));const projectsContainer=document.getElementById("projects");data.work.forEach(((s,t)=>{const e=s.skills.map((s=>`<span>${s}</span>`)).join(" "),i=`\n\t<div id="${s.id}" class="projects_column_row">\n\t\t<div class="project_image">\n\t\t\t<img src="${s.imgSrc}" alt="${s.altText}">\n\t\t</div>\n\t\t<div class="projects_text">\n\t\t\t<h2>${s.title}</h2>\n\t\t\t<p>${s.description}</p>\n\t\t\t<div class="project_description">${e}</div>\n\t\t\t<div>\n\t\t\t\t<img src="${s.skillImgSrc}" alt="skill">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t`;projectsContainer.insertAdjacentHTML("beforeend",i)}));