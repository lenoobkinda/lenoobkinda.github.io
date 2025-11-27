    const win = document.getElementById('window');
    const mainf = document.getElementById('MainF');
    const musicf = document.getElementById('MusicF');
    const otherf = document.getElementById('OtherF');
    const close = document.getElementById('close');

    musicf.addEventListener('click', () => {
        var p = document.getElementById('mainpara');
        var header = document.getElementById('mainheader');
        var title = document.getElementById('windowtitle'); 
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.remove();
        }
        title.textContent = 'Music Info';
        header.textContent = 'Music';
        var toolbar = document.querySelector('.toolbar');
        p.textContent = 'I produce beats and music whenever i have free time.';
        p.innerHTML += '<br><br> <a href="https://hyperfollow.com/ProdHaine" style="text-decoration: underline;">Link for all links related to my music</a>';
        const iframeHtml = '<iframe id="ytplayer" title="YouTube video player" width="420" height="345" src="https://www.youtube.com/embed/NoLTZXlkzVI?rel=0&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay;  web-share; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        const headerEl = document.getElementById('mainheader');
        if (headerEl) {
          const next = headerEl.nextElementSibling;
          if (next && next.tagName && next.tagName.toLowerCase() === 'iframe') next.remove();
          headerEl.insertAdjacentHTML('afterend', iframeHtml);
        } else if (toolbar) {
          const next = toolbar.nextElementSibling;
          if (next && next.tagName && next.tagName.toLowerCase() === 'iframe') next.remove();
          toolbar.insertAdjacentHTML('afterend', iframeHtml);
        }
    })
    otherf.addEventListener('click', () => {
        var p = document.getElementById('mainpara');
        var header = document.getElementById('mainheader');
        var title = document.getElementById('windowtitle'); 
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.remove();
        }

        title.textContent = 'About Me';
        header.textContent = 'About Me';
        p.textContent = 'Currently studying in web programming'
        p.innerHTML += '<br><br>Prog and Markup Languages: C#, JS, C++, PHP, HTML, CSS, Python<br><br>Tools: VS Code, VS, MySQL, VmWare, VBox, Putty (SSH), Packet Tracer<br><br>Operating Systems: Windows, Debian Linux, Ubuntu Linux<br><br><a href="https://github.com/lenoobkinda" style="text-decoration: underline;">Link to my GitHub</a>';
    })

    mainf.addEventListener('click', () => {
        var p = document.getElementById('mainpara');
        var header = document.getElementById('mainheader');
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.remove();
        }

        var title = document.getElementById('windowtitle'); 
        title.textContent = 'Main Info';
        header.textContent = 'Main';
        p.textContent = "Just a website for info about me and my projects"
    })
    max.addEventListener('click', () => {
      max.classList.add('fake-pressed');
      setTimeout(()=> max.classList.remove('fake-pressed'), 150);
    });
    close.addEventListener('click', () => {
      close.classList.add('fake-pressed');
      setTimeout(()=> close.classList.remove('fake-pressed'), 150);
      win.style.transform = 'scale(0.92)';
      win.style.opacity = '0.0';
      setTimeout(()=> win.style.display = 'none', 220);
    });
    (function(){
      const titlebar = document.getElementById('titlebar');
      let dragging = false;
      let offset = {x:0,y:0};

      titlebar.addEventListener('pointerdown', (e)=>{
        if(win.dataset.maxed) return; 
        dragging = true;
        const rect = win.getBoundingClientRect();
        offset.x = e.clientX - rect.left;
        offset.y = e.clientY - rect.top;
        win.style.transition = 'none';
        win.style.position = 'fixed';
        win.style.left = rect.left + 'px';
        win.style.top = rect.top + 'px';
      });

      window.addEventListener('pointermove', (e)=>{
        if(!dragging) return;
        win.style.left = (e.clientX - offset.x) + 'px';
        win.style.top = (e.clientY - offset.y) + 'px';
      });

      window.addEventListener('pointerup', ()=>{
        dragging = false;
        win.style.transition = '';
      });
    })();

(function(){
  const firstDockBtn = document.querySelector('.dock .dock-item');
  if (!firstDockBtn) return;
  firstDockBtn.addEventListener('click', () => {
    const winEl = document.getElementById('window');
    if (!winEl) return;
    const cs = window.getComputedStyle(winEl);
    const isHidden = cs.display === 'none' || cs.opacity === '0';
    if (isHidden) {
      winEl.style.display = '';
      winEl.style.transform = '';
      winEl.style.opacity = '1';
      winEl.style.zIndex = '';
    } else {
      winEl.style.transform = 'scale(0.92)';
      winEl.style.opacity = '0';
      setTimeout(()=> winEl.style.display = 'none', 220);
    }
  });
})();
    (function(){
  const dock = document.getElementById('dock');
  if (!dock) return;
  const items = Array.from(dock.querySelectorAll('.dock-item'));

  dock.addEventListener('mousemove', (e) => {
    const rect = dock.getBoundingClientRect();
    const mouseX = e.clientX;
    items.forEach((btn) => {
      const bRect = btn.getBoundingClientRect();
    
      const centerX = bRect.left + bRect.width / 2;
      const dist = Math.abs(mouseX - centerX);
      const maxDist = 120; 
      const normalized = Math.max(0, 1 - (dist / maxDist)); 
      const scale = 1 + normalized * 0.9; 
      btn.style.transform = `translateY(${-(normalized*8)}px) scale(${scale})`;
      btn.style.zIndex = Math.round(100 + normalized * 100);
    });
  });

  dock.addEventListener('mouseleave', () => {
    items.forEach((btn) => {
      btn.style.transform = '';
      btn.style.zIndex = '';
    });
  });

  items.forEach(btn => {
    btn.addEventListener('click', () => {
      items.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const app = btn.dataset.app;
      if (app === 'music') {
        window.open('https://hyperfollow.com/ProdHaine', '_blank');
      } else if (app === 'finder') {
        const mainBtn = document.getElementById('MainF');
        if (mainBtn) mainBtn.click();
      } else if (app === 'browser') {
        window.open('https://github.com/lenoobkinda', '_blank');
      }
    });
  });

})();
