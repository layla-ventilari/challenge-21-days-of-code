function changeMode() {
    changeClasses();
    changeText();
  }
  
  function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
  }
  
  function changeText() {
    const lightMode = "Light";
    const darkMode = "Dark";
  
    if (body.classList.contains(darkModeClass)) {
      button.innerHTML = lightMode;
      h1.innerHTML = darkMode + " ON";
    } else {
      button.innerHTML = darkMode;
      h1.innerHTML = lightMode + " ON";
    }
  }
  
  const darkModeClass = 'dark-mode';
  const button = document.getElementById('mode-selector');
  const h1 = document.getElementById('page-title');
  const body = document.getElementsByTagName('body')[0];
  const footer = document.getElementsByTagName('footer')[0];
  
  button.addEventListener('click', function() {
    button.classList.toggle('large');
  });
  
  button.addEventListener('click', changeMode);
  