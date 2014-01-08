var Mengenlehreuhr = function(dom) {
  this.dom = $(dom);
  this.update();
}

Mengenlehreuhr.prototype.update = function(d) {
  var d = d || new Date()

  this.setSecond(d.getSeconds());
  this.setMinutes(d.getMinutes());
  this.setHours(d.getHours());
}

Mengenlehreuhr.prototype.setSecond = function(s) {
  this.dom.find('.second-row > div').toggleClass('on', (s % 2 === 1));
}

Mengenlehreuhr.prototype.setHours = function(h) {
  var h2 = h % 5;
  var h1 = (h - h2) / 5;

  this.dom.find('.hour-top.row > div').each(function(i) {
    $(this).toggleClass('on', (--h1 >= 0));
  });

  this.dom.find('.hour-bottom.row > div').each(function(i) {
    $(this).toggleClass('on', (--h2 >= 0));
  });
}

Mengenlehreuhr.prototype.setMinutes = function(m) {
  var m2 = m % 5;
  var m1 = (m - m2) / 5;

  this.dom.find('.minute-top.row > div').each(function(i) {
    $(this).toggleClass('on', (--m1 >= 0));
  });

  this.dom.find('.minute-bottom.row > div').each(function(i) {
    $(this).toggleClass('on', (--m2 >= 0));
  });
}

