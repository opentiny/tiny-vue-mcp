export default {
  ai: {
    grid: {
      description: '表格组件相关工具集合，包含滚动到指定行、表格全选等功能',
      scrollToRow: '滚动到指定行，要先获取表格数据，然后根据表格数据中的索引确定滚动行',
      getTableData: '获取表格数据',
      setSelection:
        '选中表格一条数据，需要先获取表格数据，然后根据表格数据中的索引选中数据，要求：选中之前先滚动到选中行',
      setAllSelection: '用来设置表格全选状态,true:全选,false:取消全选'
    },
    baseSelect: {
      description: '下拉组件相关工具集合，包含获取下拉数据、选中下拉数据等功能',
      openMenu: '打开下拉面板'
    }
  }
}
