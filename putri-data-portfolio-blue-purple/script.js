(() => {
  const intro = document.getElementById('intro');
  const word = document.getElementById('introWord');
  const progress = document.getElementById('progressFill');
  const counter = document.getElementById('introProgress');
  const words = ['QUESTIONING.', 'CLEANING.', 'CONNECTING.', 'CLARIFYING.'];
  let timers = [];
  function clearTimers(){ timers.forEach(clearTimeout); timers=[]; }
  function hideIntro(){ clearTimers(); intro.classList.add('is-gone'); intro.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
  function startIntro(){
    clearTimers(); intro.classList.remove('is-gone'); intro.removeAttribute('aria-hidden'); document.body.style.overflow='hidden';
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){ hideIntro(); return; }
    words.forEach((w,i)=>timers.push(setTimeout(()=>{word.textContent=w; counter.textContent=String(i+1).padStart(2,'0')+' / 04';progress.style.width=(25*(i+1))+'%';},i*620)));
    timers.push(setTimeout(hideIntro,words.length*620+330));
  }
  document.getElementById('skipIntro').addEventListener('click',hideIntro);
  document.getElementById('replayIntro').addEventListener('click',()=>{window.scrollTo({top:0,behavior:'instant'}); startIntro();});
  document.querySelectorAll('.case-toggle').forEach(button=>button.addEventListener('click',()=>{
    const panel=document.getElementById(button.getAttribute('aria-controls'));
    const shouldOpen=panel.hidden;
    panel.hidden=!shouldOpen; button.setAttribute('aria-expanded',String(shouldOpen));
    button.firstChild.textContent=shouldOpen?'Close case study ':'Read case study ';
  }));
  document.getElementById('year').textContent=new Date().getFullYear();
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});},{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
  startIntro();
})();
