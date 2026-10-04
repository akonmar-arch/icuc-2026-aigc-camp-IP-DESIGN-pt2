window.renderCourse = function(D,esc,gallery,sources,quotes,list){
 const characterSection=`<div id="character-design" class="character-integrated"><section class="character-intro"><p class="eyebrow">角色设计 / 最初的选择与修改</p><h3>现在的 CUMI，<br>是怎么选出来的？</h3><p class="lead">先试不同方向，再选定一张原图，最后一处一处改细节。下面按时间查看30次尝试、选择和修改。看完往下，就是第三步的六套造型。</p><div class="route-overview"><span>找方向</span><b>→</b><span>画候选</span><b>→</b><span>选原图</span><b>→</b><span>改细节</span><b>→</b><span>定标准</span></div><p class="intro-note">编号表示本页的阅读顺序，不是当时的文件版本号。明确选中的图、被否定的图和仍在尝试的图，会分别写清楚。</p><div id="character-jump" class="character-jump"></div></section><section id="character-route" class="character-route" aria-label="逐版角色设计过程"></section><section id="version-index" class="version-section"><h3>“第一版”“第二张”和 v2，<br>不一定指同一件事。</h3><p>用户说的图片顺序、文件名里的版本号、后续修图编号要分开看。下面保留能查回原文件的对应关系。</p><details><summary>展开版本编号对照</summary><div id="version-table" class="table-wrap"></div></details><div id="character-notes" class="character-notes"></div><div class="download-row"><a href="character-evolution.json" download>下载角色设计逐版记录 ↓</a></div></section></div>`;
 const chapters=window.COURSE?.chapters||[];
 const picks=[
  [['aug-02',-1],['aug-03',-1]],
  [['aug-04',0],['aug-06',0]],
  [['aug-07',0],['aug-09',-1]],
  [['aug-08',-1],['aug-14',-1]],
  [['aug-10',1],['september-08',0],['september-08',1]],
  [['september-03',0],['september-06',1]],
  [['september-01',-1],['september-02',1]],
  [['september-09',1],['september-07',-1],['september-10',1]],
  [['september-12',0],['september-12',-1]]
 ];
 const details=(s,i)=>`<article class="history-step" id="${esc(s.id)}"><p class="history-date">${esc(s.date)}</p><h4>${esc(s.title)}</h4><p>${esc(s.summary)}</p>${gallery(s.images)}<ol class="history-actions">${s.steps.map(x=>`<li>${esc(x.text)}</li>`).join('')}</ol><div class="problem-pair"><div><h4>当时的问题</h4>${list(s.problems)}</div><div><h4>下次的办法</h4>${list(s.prevention)}</div></div>${s.quotes?.length?`<details class="quoted-records"><summary>看当时具体怎样纠正</summary>${quotes(s.quotes)}</details>`:''}${sources(s.sources)}</article>`;
 return {nav:chapters.map((c,i)=>`<a href="#${esc(c.id)}"><span>${String(i+1).padStart(2,'0')}</span>${esc(c.title)}</a>`).join(''),html:chapters.map((c,i)=>{
  const stageIds=c.stageIds||[];const all=stageIds.map(id=>D.stages.find(s=>s.id===id)).filter(Boolean);
  const ims=picks[i].map(([id,n])=>D.stages.find(s=>s.id===id)?.images.at(n)).filter(Boolean);
  return `<article class="stage chapter" id="${esc(c.id)}"><div class="chapter-top"><span class="chapter-number">${String(i+1).padStart(2,'0')}</span><div><p class="chapter-start">${esc(c.before)}</p><h3>${esc(c.title)}</h3></div></div><p class="chapter-goal">${esc(c.goal)}</p>${gallery(ims)}${i===0?'<a class="character-entry" href="#character-design"><span>角色设计逐版记录</span><b>试过哪些方向？选了哪张图？后来改了哪里？ →</b><small>本页向下查看30次尝试、选择和细节修改</small></a>':''}<div class="chapter-story"><div><span>① 这一轮怎么做</span><ol>${c.steps.map(t=>`<li>${esc(t)}</li>`).join('')}</ol></div><div><span>② 最关键的决定</span><p>${esc(c.decision)}</p><span>③ 最后得到什么</span><p>${esc(c.result)}</p></div></div><div class="chapter-lesson"><span>记住这一句</span><p>${esc(c.lesson)}</p></div><details class="chapter-details"><summary>展开这一步的完整过程 <small>${all.length} 个阶段 · 更多过程图与当时的修改</small></summary>${all.map(details).join('')}</details></article>${i===1?characterSection:''}`;
 }).join('')};
};
