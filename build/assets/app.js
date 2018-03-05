(function() {

  var config = {
    transition: 400,
  };

  var elems = {
    $body: document.getElementById('site'),
    $openOverlay: document.getElementById('open-overlay'),
    $closeOverlay: document.getElementById('close-overlay'),
    $overlay: document.getElementById('overlay'),
  };

  var sc = {
    _overlayOpen: function() {
      elems.$overlay.style.display = 'block';
      elems.$body.style.overflow = 'hidden';
      setTimeout(function() {
        elems.$overlay.classList.add('active');
      }, 0);
    },

    _overlayClose: function() {
      elems.$overlay.classList.remove('active');
      elems.$body.style.overflow = 'auto';
      setTimeout(function() {
        elems.$overlay.style.display = 'none';
      }, config.transition);
    },
  };

  elems.$openOverlay.addEventListener('click', function(e) {
    sc._overlayOpen();
  });

  elems.$closeOverlay.addEventListener('click', function(e) {
    sc._overlayClose();
  });
})();
