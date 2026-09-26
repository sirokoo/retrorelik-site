function applyTheme(theme){
  document.documentElement.dataset.theme=theme==='dark'?'dark':'light';
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',theme==='dark'?'#1E1B18':'#EDE2CF');
}
function updateThemeButton(language){
  const button=document.getElementById('theme-toggle');
  if(!button)return;
  const dark=document.documentElement.dataset.theme==='dark';
  const labels={fr:['Mode sombre','Mode clair'],en:['Dark mode','Light mode'],de:['Dunkler Modus','Heller Modus'],es:['Modo oscuro','Modo claro'],ar:['الوضع الداكن','الوضع الفاتح']};
  const label=(labels[language]||labels.fr)[dark?1:0];
  button.setAttribute('aria-label',label);
  button.setAttribute('title',label);
  button.setAttribute('aria-pressed',String(dark));
  button.firstElementChild.textContent=dark?'☀':'☾';
}
let savedTheme='light';
try{savedTheme=localStorage.getItem('rr-theme')==='dark'?'dark':'light'}catch{}
applyTheme(savedTheme);
