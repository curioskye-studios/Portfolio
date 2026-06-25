
export function updateBackgroundGradient(makeBackgroundVisible = false) {
  const skyGradient = `      
    linear-gradient(180deg, #4A8FBF 0%, #6BADD4 60%, #82BAD5 100%)
  `;

  const opacityCSS = makeBackgroundVisible ? `opacity: 0.6` : `opacity: 1`;

  let bg = document.getElementById('fixed-bg');

  if (!bg) {
    bg = document.createElement('div');
    bg.id = 'fixed-bg';
    bg.style.cssText = 
      `
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        ${opacityCSS}
      `;
    document.body.appendChild(bg);
  }

  bg.style.background = skyGradient;
}

export function resetBackgroundGradient() {    
  const bg = document.getElementById('fixed-bg');

  if (bg) bg.remove();
}