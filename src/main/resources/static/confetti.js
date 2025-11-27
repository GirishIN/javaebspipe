// Simple confetti wrapper using canvas-confetti CDN.
// Keeps the same name startConfetti() so the page can call it.

(function(){
  // load canvas-confetti library dynamically if not present
  function loadScript(src, cb){
    const s = document.createElement('script');
    s.src = src;
    s.onload = cb;
    s.onerror = cb;
    document.head.appendChild(s);
  }

  const CDN = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";

  function fire() {
    // left + right bursts
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { x: 0.1, y: 0.2 }
    });
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { x: 0.9, y: 0.2 }
    });
    // small center fountain
    confetti({
      particleCount: 60,
      startVelocity: 30,
      ticks: 150,
      origin: { x: 0.5, y: 0.35 }
    });
  }

  window.startConfetti = function(durationMs = 1800){
    if (typeof confetti === 'undefined'){
      loadScript(CDN, function(){
        try { fire(); } catch (e){ console.warn('confetti failed', e); }
      });
    } else {
      fire();
    }
  };

  // automatic gentle burst on load for visual feedback
  window.addEventListener('load', function(){
    setTimeout(()=> {
      try { window.startConfetti(1200); } catch(e){}
    }, 600);
  });

})();
