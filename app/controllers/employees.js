import Ember from 'ember';

export default Ember.ArrayController.extend({
  employee: Ember.Object.create(),

  actions: {
    createEmployee: function() {
      console.log(this.get('employee.name'));
      var newEmployee = this.store.createRecord('employee', {
        name: this.get('employee.name'),
        jobTitle: this.get('employee.title')
      });
      newEmployee.save();
    }
  }
});
