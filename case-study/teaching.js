window.TEACHING = {
  method: [
    ['01','先确定这轮比较哪张图','写下基准文件、要解决的角色问题、允许改动与必须保留的特征。探索阶段允许比较不同方向；定版后的局部修正要缩小范围。','早期鼻口练习以当轮原图为基准；后续角色扩展则按用户指定的 PS 母版，不混用不同阶段。'],
    ['02','把角色问题写成可观察的关系','用轮廓、头身比例、鼻口体积、耳朵连接、尾巴落点与色块边界描述问题，避免只写“更可爱”。','例如：鼻口变短后，侧面突出长度与正面体积是否对应？不要只检查最大的一张主图。'],
    ['03','把母版变成实际输入','记录准确文件名、尺寸、版本与确认状态；每轮带入同一基准，并把派生图与原图分开保存。','char-30 记录用户指定 cumi-master-ps-v2.png；同名文件可能是不同尺寸与内容，不能只凭文件名相同判断。'],
    ['04','区分想改什么与实际改了什么','每轮记录目标变化、实际变化、意外变化和下一轮选择。提出一个修改要求，不等于结果只改变一个变量。','发现腮红、配色或绒感也变化时，先记下来，再回到需求判断是否允许；不要因为目标局部改善就直接换母版。'],
    ['05','局部合理还要逐视图核对','正面、侧面、背面与剪影共同检查同一特征的体积、位置、连接与颜色分区。','鼻口要看突出长度，耳朵要分内外侧，尾巴要看身体连接；圈出部位比只写“一致性不足”更有用。'],
    ['06','把范围保持与结构正确分别验收','先检查保护区域是否被误改，再检查修改部位的形体与连接是否成立。这两项都通过，才考虑采用候选。','char-27 的局部范围检查通过后，用户仍指出尾巴不对；范围正确不能替代造型判断。'],
    ['07','给每次选择留下理由和回退点','标出采用、继续修正、放弃或待核验；说明代价，并保留基准与候选的对应关系。','助手保存某版、项目进入下一阶段，都不自动等于用户逐项批准；课堂记录也要保留这个区别。'],
    ['08','把检查项带回自己的角色作业','提交少量关键对照：基准、候选、问题标注和下一轮选择，让每张图证明一个设计判断。','这些是本轮教学补强的方法建议；原始历史图片、当时记录与“教学补绘”标记保持不变。']
  ],
  exercises: [
    {title:'练习一：先看图，再核对历史记录',minutes:'10 分钟',question:'回到“先独立诊断”练习，对比基准 A 与候选 B。分别写出本轮目标变化、实际变化、意外变化和下一轮选择，再展开核对依据。',answer:'先记录自己看到的部位与理由，再区分图像观察、原记录与自己的建议。鼻口练习使用 char-19 第一张修改图；不要把针对它的反馈直接套到第二张 v2。'},
    {title:'练习二：写出局部修改与保护规则',minutes:'10 分钟',question:'若只调整 CUMI 的尾巴连接，你会怎样指定基准与必须保持的角色结构？',answer:'指定准确母版与版本，圈出尾巴和必要的连接区域；保护头身比例、五官、呆毛、耳朵、色块与绒感。分别检查区域外有无误改，以及尾巴的落点、体积和连接阴影是否合理。'},
    {title:'练习三：把一张主图的判断带到其他视图',minutes:'10 分钟',question:'正面鼻口已经缩短，侧面和背面还应检查什么？请在图上指出，而不是只写“保持一致”。',answer:'比较鼻口的突出长度与面部连接，再检查相关面颊体积。正面修改不要求背面凭空出现鼻子变化，但应核对头部整体体积与其他保护特征；不确定的内容标为待核验。'},
    {title:'练习四：决定采用、继续修正还是回退',minutes:'15 分钟',question:'候选的尾巴更圆，却同时改变了原色和绒感。你会采用、继续局部修正还是回退？至少说明一项代价。',answer:'答案不唯一。先比较偏离是否影响已确认的角色身份，再说明目标与保护条件的优先级。可回到基准缩小修改范围，也可在有依据时保留候选；必须留下对照和理由，不能把“更精致”作为唯一依据。'}
  ],
  prompt:'本轮角色问题：\n只解决［一个明确的造型或结构问题］。\n\n输入基准：\n以［准确文件名、尺寸、版本与确认状态］为准；参考图只用于［指定关系］。\n\n允许修改：\n［具体部位、体积、连接或色块边界］。\n\n必须保持：\n［轮廓、头身比例、五官、识别特征、其他视图结构、配色与材质，逐项列出］。\n\n本轮对照记录：\n目标变化：\n实际变化：\n意外变化：\n下一轮选择与理由：\n\n交付与验收：\n保留基准，另存候选；同尺度比较，并标注问题位置。\n先检查保护区域，再检查修改部位的形体与连接。\n采用、继续修正、放弃或待核验分别标清，不把候选自动称为定稿。'
};

// A classroom exercise using unchanged historical images; the archive remains intact.
(() => {
  function mountDiagnosis() {
    const target = document.getElementById('character-design');
    if (!target || document.getElementById('character-diagnosis')) return;
    target.insertAdjacentHTML('afterbegin', `
      <div id="character-diagnosis" class="character-diagnosis">
        <p class="eyebrow">课堂练习 / 先独立诊断 再查看复盘</p>
        <h3>这一轮，真的只改了目标吗？</h3>
        <p class="lead">先看两张保留的历史图，不先读后面的结论。任务是把鼻口改得更短、更平：请比较主图、正面小图与侧面小图，指出具体变化。</p>
        <p class="intro-note">这是对现有图像与记录的课堂编排。A 是当轮原图，B 是鼻口修改第一张；两张都不是后来的 PS 定版母版，原图没有改动。</p>
        <div class="diagnosis-grid">
          <figure><button class="image-open" data-image="assets/p-334a750bcf59.webp" data-caption="练习基准 A · 当轮原图 · 历史图像保持原样" aria-label="放大基准 A"><img src="assets/p-334a750bcf59.webp" alt="练习基准 A：当轮角色原图，含主图与多个视图" loading="lazy"><span>放大比较 ↗</span></button><figcaption>基准 A · 当轮原图</figcaption></figure>
          <figure><button class="image-open" data-image="assets/p-d1d211ef068c.webp" data-caption="练习候选 B · 鼻口修改第一张 · 历史图像保持原样" aria-label="放大候选 B"><img src="assets/p-d1d211ef068c.webp" alt="练习候选 B：鼻口修改第一张，含主图与多个视图" loading="lazy"><span>放大比较 ↗</span></button><figcaption>候选 B · 鼻口修改第一张</figcaption></figure>
        </div>
        <div class="diagnosis-notes">
          <label>本轮目标变化<textarea rows="3" placeholder="原本想解决哪个部位的什么问题？"></textarea></label>
          <label>实际变化<textarea rows="3" placeholder="圈出至少两个可见变化，说明在哪个视图。"></textarea></label>
          <label>意外变化<textarea rows="3" placeholder="哪些伴随变化需要回到需求核验？不确定可写待核验。"></textarea></label>
          <label>下一轮选择<textarea rows="3" placeholder="采用、继续修正、放弃或回退；写出理由与要保护的部位。"></textarea></label>
        </div>
        <p class="intro-note">输入框用于当前页面的课堂草稿，刷新不会保留；请将四项判断整理到自己的对照页。</p>
        <details class="diagnosis-review"><summary>写完四项判断后，查看核对依据</summary>
          <p><b>原记录：</b>本轮围绕鼻口缩短、变平继续修改。用户贴回的是 B 这张第一结果，指出侧视图似乎没有变化；该反馈不能直接套到随后保存的第二张 v2。<a href="#char-19">查看 char-19 原记录 ↗</a></p>
          <p><b>图像观察：</b>B 的主图与正面小图鼻口更平，侧面仍有明显突出；脸颊色块也缩小。后者是需要记下的伴随变化，是否允许要回到需求核验。</p>
          <p><b>课堂建议：</b>先标出鼻口突出长度、面部连接与脸颊边界，再决定下一轮保护和修改的范围。局部修改要同时检查相关视图，不把单一主图改善当作全部通过。</p>
          <p><b>后续母版：</b>这次对照不代替最终基准。后续角色扩展按用户指定的 <a href="#char-30">cumi-master-ps-v2.png 记录</a>核对；char-27 还保留了“区域外未变，但尾巴仍不对”的反例。</p>
        </details>
        <a class="diagnosis-homework" href="../index.html#character-homework">把四项判断接入角色作业 ↗</a>
      </div>`);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountDiagnosis, { once: true });
  else mountDiagnosis();
})();
