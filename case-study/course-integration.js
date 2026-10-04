(() => {
  'use strict';
  const initialHash=location.hash;
  const alignHeader=()=>{
    const header=document.querySelector('.topbar');
    if(header)document.documentElement.style.scrollPaddingTop=Math.ceil(header.getBoundingClientRect().height+12)+'px';
  };
  window.addEventListener('resize',alignHeader);
  if(initialHash!=='#character-design')return;
  window.addEventListener('load',()=>{
    const ready=document.fonts?document.fonts.ready:Promise.resolve();
    ready.then(()=>requestAnimationFrame(()=>{
      alignHeader();
      const target=document.getElementById('character-design');
      if(target&&location.hash===initialHash)target.scrollIntoView({block:'start',behavior:'instant'});
    }));
  },{once:true});
})();
