import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createEmployee: function() {
      console.log(this.get('employee.name'));
      var newEmployee = this.store.createRecord('employee', {
        name: this.get('employee.name'),
        title: this.get('employee.title')
      });
      newEmployee.save();
    }
  }
});
