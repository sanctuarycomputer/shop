var sc = {
  _init: function() {
    if (!document.querySelectorAll('.shopify-buy__btn').length) return;

    console.log(document.querySelectorAll('.shopify-buy__btn').length);
    clearInterval(sc._interval);
  },

  _addUI: function() {

  },

  _selectSize: function() {

  },
};

(function() {
  sc._interval = setInterval(function() {
    console.log('running');
    sc._init();
  }, 50);
})();
