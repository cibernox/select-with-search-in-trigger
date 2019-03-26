import Component from '@ember/component';

export default Component.extend({
  actions: {
    onChange(selection, select) {
      this.onchange(...arguments);
      select.actions.search('');
    }
  }
});
