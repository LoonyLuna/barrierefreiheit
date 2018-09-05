/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.barrierefreiNavBurger = {
    attach: function (context, settings) {
      // Check for click events on the navbar burger icon
      $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

      });
    }
  };

  Drupal.behaviors.barrierefreiHorizontalTabs = {
    attach: function (context, settings) {

      $('.paragraph--type--tab-item').hide();
      $('.paragraph--type--tab-item').first().show();
      $('.paragraphs--horizontal-tabs--navigation__item').first().addClass('is-active-tab');

      var sourceId;
      $('.paragraphs--horizontal-tabs--navigation__item').once('paragraphs--horizontal-tabs--navigation').click(function () {
        sourceId = $(this).attr('data-tab-item-source');
        $('.paragraph--type--tab-item').hide();
        $('.is-active-tab').removeClass('is-active-tab');
        $(this).addClass('is-active-tab');
        $('[data-tab-item="' + sourceId + '"]').fadeIn();
      });

    }
  };

})(Drupal, jQuery);
