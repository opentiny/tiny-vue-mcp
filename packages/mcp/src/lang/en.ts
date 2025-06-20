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
      triggerClick: 'trigger button click,click self'
    },
    tree: {
      description: 'Collection of Tools Related to Tree Control Components',
      setCurrentKey: 'Please enter the ID value to set the current selected state of a node',
      expandHlNode: 'Please enter the ID value to set the current deployment status of a node',
      collapseHlNode: 'Please enter the ID value to set the collapsed state of a node',
      removeNode: 'Please enter the ID value to delete a node',
      insertBefore: 'Add a node in front of a node',
      insertAfter: 'Add a node after a node',
    }
  }
}
