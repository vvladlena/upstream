(function () {
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('animation');
        }
      });
    });
  
    const arrAnimatedObjects = document.querySelectorAll('.animated-object')
  
    arrAnimatedObjects.forEach(i => {
        observer.observe(i)})

  })();


