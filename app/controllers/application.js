import Controller from "@ember/controller";

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.options = ['one', 'two', 'three', 'four', 'five'];
  }
});
