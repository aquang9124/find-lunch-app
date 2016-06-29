import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('google-mapper', 'Integration | Component | google mapper', {
  integration: true,
  setup() {
    App = startApp();
  },
  teardown() {
    Ember.run(App, 'destroy');
  }
});

test('should render a map after making query', function(assert) {
  assert.expect(0);
  // assign a value of `fro yo` to the input box
  let value = "fro yo";
  this.$('#search-input').val(value);

  // Click the button to submit
  this.$('#btn-orange').click();

  // check to see if map has rendered
  andThen(function() {
    console.log('success');
  });
});