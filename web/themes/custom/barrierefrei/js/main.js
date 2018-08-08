/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.barrierefrei = {
    attach: function (context, settings) {
      $(document).ready(function() {

        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");

        });
      });
    }
  };

})(Drupal, jQuery);
