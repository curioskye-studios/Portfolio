
export function updateBackgroundGradient(makeBackgroundVisible = false) {
  const skyGradient = `      
    linear-gradient(180deg, #4A8FBF 0%, #6BADD4 60%, #82BAD5 100%)
  `;

  const opacityCSS = makeBackgroundVisible ? `opacity: 0.6` : `opacity: 1`;

  let bg = document.getElementById('fixed-bg');
  if (!bg) {
    bg = document.createElement('div');
    bg.id = 'fixed-bg';
    bg.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      ${opacityCSS}
    `;
    document.body.appendChild(bg);
  }

  bg.style.background = skyGradient;
  document.body.style.backgroundImage = '';
}

export function resetBackgroundGradient() {    
  const bg = document.getElementById('fixed-bg');
  if (bg) bg.remove();

  document.body.style.backgroundColor = '#6199C7';
  document.body.style.backgroundImage = "url('/blue-background-image.webp')";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
}


export function updateBackgroundImage() {

  let bg = document.getElementById('fixed-bg');
  if (!bg) {
    bg = document.createElement('div');
    bg.id = 'fixed-bg';
    bg.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background-image: url('/blue-background-image.webp');
      background-repeat: no-repeat;
      background-size: cover;
    `;
    document.body.appendChild(bg);
  }

  // bg.style.background = skyGradient;
  document.body.style.backgroundImage = '';
}

export function resetBackgroundImage() {    
  const bg = document.getElementById('fixed-bg');
  if (bg) bg.remove();

  document.body.style.backgroundColor = '#6199C7';
  document.body.style.backgroundImage = "url('/blue-background-image.webp')";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
}