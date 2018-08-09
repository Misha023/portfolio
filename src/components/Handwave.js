var wave = document.querySelector('.waveemoji');

wave.addEventListener('click', function() {
	var $this = this;

  $this.classList.add('js-wave');

  setTimeout(function() {
  	$this.classList.remove('js-wave');
  }, 1000);
})