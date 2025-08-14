export default {
  ai: {
    grid: {
      description: '表格组件相关工具集合，包含滚动到指定行、表格全选等功能',
      scrollToRow: '滚动到指定行，需要传递需要滚动的行的数据，要求数据中包含"_RID"字段',
      getTableData: '获取表格数据',
      getColumns: '获取表格列配置,"property" 字段代表表格数据的字段属性,"title" 代表表格列的标题',
      setSelection: '选中或者选择表格一条数据，需要传递需要选中的数据，要求数据中包含"_RID"字段',
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
      getTreeData: '获取表格数据',
      setCurrentKey: '设置节点的选中状态,要求数据中包含"id"字段',
      expandHlNode: '设置节点的展开状态,要求数据中包含"id"字段',
      collapseHlNode: '设置节点的收起状态,要求数据中包含"id"字段',
      removeNode: '删除某个节点,要求数据中包含"id"字段',
      insertBefore: '在一个节点的前面增加一个节点,要求数据中包含"id"字段',
      insertAfter: '在一个节点的后面增加一个节点,要求数据中包含"id"字段'
    },
    form: {
      description: '表单组件相关工具集合，包含获取表单校验、重置表单等功能',
      resetFields: '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
      clearValidate:
        '移除表单项的校验结果，可传入待移除的表单项的 prop ，或者 prop 用逗号隔开，如不传则移除整个表单的校验结果',
      clearValidateAll: '移除整个表单的校验结果',
      validate:
        '对整个表单进行校验的方法，参数为一个回调函数（该回调函数会在校验结束后被调用，并传入两个参数：1、是否校验成功 2、未通过校验的字段）返回一个 Promise对象',
      validateField: '对指定字段进行校验，可传入待校验的表单项的 prop ，或者 prop 用逗号隔开'
    }
  }
}
