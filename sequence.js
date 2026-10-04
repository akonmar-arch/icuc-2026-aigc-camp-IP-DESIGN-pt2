(() => {
  'use strict';
  const viewer=document.getElementById('viewer');
  let viewPage=1,toastTimer;
  const clamp=n=>Math.max(1,Math.min(50,n));
  const id=n=>'page-'+String(n).padStart(2,'0');
  const source=n=>'slides/slide-'+String(n).padStart(2,'0')+'.jpg';
  const fullscreenButton=document.getElementById('fullscreen-button');
  fullscreenButton.hidden=!document.fullscreenEnabled;
  fullscreenButton.onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('可按 F11 使用浏览器全屏');}};
  document.addEventListener('fullscreenchange',()=>{fullscreenButton.textContent=document.fullscreenElement?'退出全屏':'进入全屏';fullscreenButton.setAttribute('aria-pressed',String(!!document.fullscreenElement));});
  function showSlide(n){viewPage=clamp(n);renderViewer();if(!viewer.open)viewer.showModal();}
  function renderViewer(){const image=document.getElementById('viewer-image');image.src=source(viewPage);image.alt='原课件第'+viewPage+'页';document.getElementById('viewer-title').textContent='原课件 · 第 '+viewPage+' 页';document.getElementById('viewer-counter').textContent=viewPage+' / 50';document.getElementById('viewer-prev').disabled=viewPage===1;document.getElementById('viewer-next').disabled=viewPage===50;}
  document.getElementById('viewer-prev').onclick=()=>showSlide(viewPage-1);
  document.getElementById('viewer-next').onclick=()=>showSlide(viewPage+1);
  document.getElementById('close-viewer').onclick=()=>viewer.close();
  viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close();}});
  function toast(t){const e=document.getElementById('toast');e.textContent=t;e.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>e.classList.remove('show'),2200);}
  async function copy(text){try{if(navigator.clipboard&&isSecureContext){await navigator.clipboard.writeText(text);}else{const input=document.createElement('textarea');input.value=text;input.style.position='fixed';input.style.opacity='0';document.body.append(input);input.select();const ok=document.execCommand('copy');input.remove();if(!ok)throw Error('copy');}toast('提示词已复制');}catch{toast('请选中提示词手动复制');}}
  function readChecks(){try{return JSON.parse(localStorage.getItem('icuc-ip-source-order-checklist')||'{}');}catch{return {};}}
  function updateChecks(){const checked=document.querySelectorAll('[data-check]:checked').length;document.getElementById('homework-status').textContent='已核对 '+checked+' / 9 项';}
  document.querySelectorAll('[data-check]').forEach(c=>{c.checked=!!readChecks()[c.dataset.check];c.onchange=()=>{const values=readChecks();values[c.dataset.check]=c.checked;try{localStorage.setItem('icuc-ip-source-order-checklist',JSON.stringify(values));}catch{}updateChecks();};});
  updateChecks();
  document.getElementById('lesson').addEventListener('click',e=>{const slide=e.target.closest('[data-slide]'),copyButton=e.target.closest('[data-copy]');if(slide)showSlide(Number(slide.dataset.slide));if(copyButton)copy(document.getElementById(copyButton.dataset.copy).textContent);});
  document.getElementById('download-checklist').onclick=()=>{const items=Array.from(document.querySelectorAll('.homework-list label')).map(l=>l.innerText);const text='IP角色设计（下）· 作业与过程记录\n\n'+items.map((t,i)=>(i+1)+'. □ '+t).join('\n\n')+'\n\n工作流程\n人物与风格定位：\n参考来源与用途：\n每轮提示词与结果：\n选图理由：\n人工修改：\n一致性检查：\n最终文件清单：\n\n场景数量与尺寸按 Vincenzo 老师原任务执行。';const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='IP角色设计_作业与过程记录.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  document.addEventListener('keydown',e=>{if(!viewer.open||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;if(e.key==='ArrowLeft'){e.preventDefault();showSlide(viewPage-1);}if(e.key==='ArrowRight'){e.preventDefault();showSlide(viewPage+1);}});
  const requested=Number(location.hash.replace('#page-',''));
  if(requested>=1&&requested<=50)requestAnimationFrame(()=>document.getElementById(id(requested)).scrollIntoView({block:'start'}));
})();
