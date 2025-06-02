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
        'Set the table all selection status,true:all selection,false:cancel all selection,requirement:scroll to the selected row before selecting'
    },
    baseSelect: {
      description: 'Base select component related tool set, including opening the drop-down panel',
      openMenu: 'Open the drop-down panel'
    }
  }
}
