const semesters = [
  ["1st Semester","Foundation subjects"],["2nd Semester","Core pharmacy basics"],
  ["3rd Semester","Pharmaceutical sciences"],["4th Semester","Advanced core"],
  ["5th Semester","Professional subjects"],["6th Semester","Clinical & industrial"],
  ["7th Semester","Advanced pharmacy"],["8th Semester","Final-year focus"]
];
const grid=document.getElementById("semesterGrid");
if(grid){
  grid.innerHTML=semesters.map((s,i)=>`<a class="semester-card" data-search="${s[0]} ${s[1]}" href="semesters/semester-${i+1}.html"><div class="semester-number">SEMESTER ${i+1}</div><h3>${s[0]}</h3><p>${s[1]}</p><span class="semester-arrow">Open →</span></a>`).join("");
}
const search=document.getElementById("search"), noResults=document.getElementById("noResults");
if(search) search.addEventListener("input",()=>{const q=search.value.toLowerCase().trim();let count=0;document.querySelectorAll(".semester-card").forEach(c=>{const ok=c.dataset.search.toLowerCase().includes(q);c.style.display=ok?"block":"none";if(ok)count++});if(noResults)noResults.hidden=count!==0});
const themeBtn=document.getElementById("themeBtn");
const saved=localStorage.getItem("aju-theme");
if(saved==="light")document.body.classList.add("light");
function theme(){document.body.classList.toggle("light");localStorage.setItem("aju-theme",document.body.classList.contains("light")?"light":"dark");}
if(themeBtn)themeBtn.addEventListener("click",theme);
const menuBtn=document.getElementById("menuBtn");
if(menuBtn)menuBtn.addEventListener("click",()=>{const n=document.querySelector(".nav-links");n.style.display=n.style.display==="flex"?"none":"flex";n.style.position="absolute";n.style.top="76px";n.style.left="0";n.style.right="0";n.style.padding="20px";n.style.background="var(--bg)";n.style.flexDirection="column";});
