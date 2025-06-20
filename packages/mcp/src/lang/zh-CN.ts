export default {
  ai: {
    grid: {
      description: '表格组件相关工具集合，包含滚动到指定行、表格全选等功能',
      scrollToRow: '滚动到指定行，需要传递需要滚动的行的数据，要求数据中包含"_RID"字段',
      getTableData: '获取表格数据',
      getColumns: '获取表格列配置,"property" 字段代表表格数据的字段属性,"title" 代表表格列的标题',
      setSelection:
        '选中或者选择表格一条数据，需要传递需要选中的数据，要求：选中之前先滚动到选中行，要求数据中包含"_RID"字段',
      setAllSelection: '用来设置表格全选状态,true:全选,false:取消全选',
      insertRow: '插入或者新增一行数据，需要先获取表格数据，根据表格数据的格式新增对应的数据',
      updateRow: '更新修改表格中指定行数据，需要传递需要更新的数据，要求数据中包含"_RID"字段',
      removeRow: '删除表格中指定行，需要传递需要删除的数据，要求数据中包含"_RID"字段'
    },
    baseSelect: {
      description: '下拉组件相关工具集合，包含获取下拉数据、选中下拉数据，清除选中值等功能',
      openMenu: '打开下拉面板',
      selectByLabel: '根据标签选中下拉数据',
      clearValue: '清除下拉值',
      getOptions: '查询下拉选择的所有选项值'
    },
    button: {
      description: '按钮组件相关工具集合',
      triggerClick: '按钮点击，点击按钮'
    },
    tree: {
      description: '树形控件组件相关工具集合',
      setCurrentKey: '请输入id值设置某个节点的当前选中状态',
      expandHlNode: '请输入id值设置某个节点的展开状态',
      collapseHlNode: '请输入id值设置某个节点的收起状态',
      removeNode: '请输入id值删除某个节点',
      insertBefore: '在一个节点的前面增加一个节点',
      insertAfter: '在一个节点的后面增加一个节点',
    }
  }
}
