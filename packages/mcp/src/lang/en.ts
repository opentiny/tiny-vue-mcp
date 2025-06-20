export default {
  ai: {
    grid: {
      description:
        'Grid component related tool set, including scrolling to the specified row, table full selection, etc.',
      scrollToRow:
        'Scroll to the specified row,need to get the table data first,then scroll to the row according to the index of the data in the table data',
      getTableData: 'Get the table data',
      setSelection:
        'Select the specified row,need to get the table data first,then select the data according to the index of the data in the table data,requirement:scroll to the selected row before selecting',
      setAllSelection:
        'Set the table all selection status,true:all selection,false:cancel all selection,requirement:scroll to the selected row before selecting',
      insertRow:
        'Insert or add a row of data,need to get the table data first,then add the corresponding data according to the format of the table data',
      updateRow:
        'Update the specified row data in the table,need to get the table data first,then update the corresponding data according to the index of the data in the table data,requirement:the index of the data in the table data is passed in as the "tiny_mcp_index" field',
      removeRow:
        'Remove the specified row in the table,need to get the table data first,then remove the corresponding data according to the index of the data in the table data'
    },
    baseSelect: {
      description:
        'Base select component related tool set, including opening the drop-down panel,set selected value or clear selected value and get selected options',
      openMenu: 'Open the drop-down panel',
      selectByLabel: 'update select value by label',
      clearValue: 'clear select value,remove value',
      getOptions: 'get all options of the select component'
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
