export default {
  ai: {
    grid: {
      description:
        'Grid component related tool set, including scrolling to specified row, table full selection and other functions',
      scrollToRow:
        'Scroll to specified row, need to pass the data of the row to scroll to, requirement: the data must contain the "_RID" field',
      getTableData: 'Get table data',
      getColumns:
        'Get table column configuration, "property" field represents the field property of table data, "title" represents the column title',
      setSelection:
        'Select a row in the table, need to pass the data to be selected, requirement: scroll to the row before selecting, requirement: the data must contain the "_RID" field',
      setAllSelection: 'Set table full selection status, true: select all, false: cancel all selection',
      insertRow:
        'Insert or add a row of data, need to get table data first, then add corresponding data according to the table data format',
      updateRow:
        'Update specified row data in the table, need to pass the data to be updated, requirement: the data must contain the "_RID" field',
      removeRow:
        'Remove specified row in the table, need to pass the data to be removed, requirement: the data must contain the "_RID" field'
    },
    baseSelect: {
      description:
        'Dropdown component related tool set, including getting dropdown data, selecting dropdown data, clearing selected value and other functions',
      openMenu: 'Open dropdown panel',
      selectByLabel: 'Select dropdown data by label',
      clearValue: 'Clear dropdown value',
      getOptions: 'Query all option values of the dropdown select'
    },
    button: {
      description: 'Button component related tool set',
      triggerClick: 'Button click, click the button'
    },
     form: {
      resetFields: 'Reset the entire form, resetting all field values to their initial values and removing validation results',
      clearValidate: 'Remove the validation results of the form item, you can pass in the prop of the form item to be removed, or an array of props, if not passed in, the validation results of the entire form will be removed',
      clearValidateAll: 'Remove the validation results of the entire form',
      validate: 'Validate the entire form, the parameter is a callback function (the callback function will be called after the validation is completed and passed two parameters: 1, whether the validation is successful 2, the fields that failed validation) returns a Promise object',
      validateField: 'Validate the specified field by passing in the prop of the form item to be validated, or separating the props with commas'
    }
  }
}
