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
      removeRow:
        'Remove the specified row in the table,need to get the table data first,then remove the corresponding data according to the index of the data in the table data'
    },
    baseSelect: {
      description: 'Base select component related tool set, including opening the drop-down panel',
      openMenu: 'Open the drop-down panel',
      selectByLabel: 'update select value by label'
    },
     button: {
      description: 'Button component related tool set',
      triggerClick: 'trigger button click,click self'
    },
  }
}
