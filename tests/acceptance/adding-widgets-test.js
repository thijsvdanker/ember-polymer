import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-dash/tests/helpers/start-app';

var application;

module('Acceptance | adding widgets', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('I see an add widget button.', function(assert) {
  visit('/');

  andThen(function() {
      var add_button = find('.add_widget_btn');
      assert.equal(add_button.length, 1);
  });
});
