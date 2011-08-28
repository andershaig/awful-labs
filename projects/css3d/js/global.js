// Start
function id(el) {
	return document.getElementById(el)
}

// Floating Sphere

function floatMotion() {
	morpheus(id('sphere'), {
      duration: 5000,
      easing: easings.sinusoidal,
      bezier: [[0, -20], [0, 0]],
      complete: function () {
      	floatMotion();
      }
	})
}
