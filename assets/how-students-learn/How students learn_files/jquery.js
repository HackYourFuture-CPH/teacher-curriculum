/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */
/***********************************************************************************************
 ********                    U N I S A    C O D E    H E A D E R                       *********
 ***********************************************************************************************
 *                                                                                             *
 *  File Name :  weblib.php                                                                    *
 *  Location  :  moodle/lib/                                                                   *
 *                                                                                             *
 *  Work Item   Modified By      Date        Description                                       *
 *  ----------  ---------------  ----------  ------------------------------------------------- *
 *  4973        Michael Lewis    17-10-2014  Lazy loading of images.                           *
 ***********************************************************************************************/

;(function($) {

  $.fn.unveil = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina? "data-src-retina" : "data-src",
        images = this,
        loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
        $e.show();
        /**************************************
        ***  4973 - BEGIN MODIFICATION
        **************************************/
        //if ($e.is(":hidden")) return;
        /**************************************
        ***  4973 - END MODIFICATION
        **************************************/

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);
