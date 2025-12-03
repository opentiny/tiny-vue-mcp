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
    },
    alert: {
      description: '警告提示组件相关工具集合',
      close: '关闭警告提示',
      setType: '设置警告类型 (success, warning, error, info)',
      setTitle: '设置警告标题'
    },
    modal: {
      description: '模态框组件相关工具集合',
      open: '打开对话框',
      close: '关闭对话框',
      setTitle: '设置对话框标题',
      setContent: '设置对话框内容'
    },
    input: {
      description: '输入框组件相关工具集合',
      getValue: '获取输入框的值',
      setValue: '设置输入框的值',
      clear: '清空输入框',
      focus: '使输入框获得焦点'
    },
    select: {
      description: '选择框组件相关工具集合',
      openMenu: '打开下拉菜单',
      closeMenu: '关闭下拉菜单',
      getValue: '获取选中值',
      setValue: '设置选中值',
      getOptions: '获取所有选项',
      clearValue: '清空选中值'
    },
    checkbox: {
      description: '复选框组件相关工具集合',
      getValue: '获取复选框的勾选状态',
      setValue: '设置复选框的勾选状态',
      check: '勾选复选框',
      uncheck: '取消勾选复选框'
    },
    radio: {
      description: '单选框组件相关工具集合',
      getValue: '获取单选框的选中值',
      setValue: '设置单选框的选中值',
      select: '选中当前单选框'
    },
    table: {
      description: '表格组件相关工具集合',
      getTableData: '获取表格数据',
      getColumns: '获取表格列配置',
      getCurrentRow: '获取当前选中行',
      setCurrentRow: '设置当前选中行'
    },
    datePicker: {
      description: '日期选择组件相关工具集合',
      getValue: '获取选中的日期',
      setValue: '设置选中的日期',
      clear: '清空已选日期',
      openPicker: '打开日期选择器'
    },
    tabs: {
      description: '标签页组件相关工具集合',
      getCurrentTab: '获取当前激活的标签页',
      setCurrentTab: '设置当前激活的标签页',
      getTabsCount: '获取标签页总数'
    },
    upload: {
      description: '文件上传组件相关工具集合',
      getFileList: '获取文件列表',
      clearFileList: '清空文件列表',
      removeFile: '删除指定文件',
      submit: '提交上传'
    },
    drawer: {
      description: '抽屉组件相关工具集合',
      open: '打开抽屉',
      close: '关闭抽屉',
      setTitle: '设置抽屉标题'
    },
    dialogBox: {
      description: '对话框组件相关工具集合',
      open: '打开对话框',
      close: '关闭对话框',
      setTitle: '设置对话框标题',
      getVisible: '获取对话框是否显示'
    },
    steps: {
      description: '步骤条组件相关工具集合',
      getCurrentStep: '获取当前步骤',
      setCurrentStep: '设置当前步骤',
      nextStep: '下一步',
      prevStep: '上一步'
    },
    tooltip: {
      description: '文字提示组件相关工具集合',
      show: '显示提示信息',
      hide: '隐藏提示信息',
      setContent: '设置提示内容'
    },
    popover: {
      description: '气泡卡片组件相关工具集合',
      show: '显示气泡卡片',
      hide: '隐藏气泡卡片',
      setTitle: '设置气泡卡片标题',
      setContent: '设置气泡卡片内容'
    },
    progress: {
      description: '进度条组件相关工具集合',
      getProgress: '获取当前进度百分比',
      setProgress: '设置进度百分比 (0-100)'
    },
    collapse: {
      description: '折叠面板组件相关工具集合',
      getActiveNames: '获取当前活跃的折叠面板名称列表',
      setActiveNames: '设置活跃的折叠面板',
      expand: '展开指定的折叠面板',
      collapse: '折叠指定的折叠面板'
    },
    carousel: {
      description: '轮播图组件相关工具集合',
      getCurrentIndex: '获取当前轮播索引',
      setCurrentIndex: '设置轮播到指定索引',
      next: '切换到下一张',
      prev: '切换到上一张'
    },
    cascader: {
      description: '级联选择器组件相关工具集合',
      getValue: '获取当前选择的值',
      setValue: '设置级联选择器的值',
      clear: '清空级联选择器的值'
    },
    dateRange: {
      description: '日期范围组件相关工具集合',
      getValue: '获取当前选择的日期范围',
      setValue: '设置日期范围',
      clear: '清空日期范围选择'
    },
    timePicker: {
      description: '时间选择器组件相关工具集合',
      getValue: '获取当前选择的时间',
      setValue: '设置时间选择器的值',
      clear: '清空时间选择'
    },
    rate: {
      description: '评分组件相关工具集合',
      getValue: '获取当前评分值',
      setValue: '设置评分值',
      clear: '清除评分'
    },
    switch: {
      description: '开关组件相关工具集合',
      getValue: '获取当前开关状态',
      setValue: '设置开关状态',
      toggle: '切换开关状态'
    },
    slider: {
      description: '滑块组件相关工具集合',
      getValue: '获取当前滑块值',
      setValue: '设置滑块值',
      reset: '重置滑块值到最小值'
    },
    badge: {
      description: '徽标组件相关工具集合',
      getValue: '获取当前徽标值',
      setValue: '设置徽标值'
    },
    tag: {
      description: '标签组件相关工具集合',
      getType: '获取标签类型',
      setType: '设置标签类型',
      close: '关闭标签'
    },
    divider: {
      description: '分割线组件相关工具集合',
      getContent: '获取分割线内容',
      setContent: '设置分割线内容'
    },
    loading: {
      description: '加载组件相关工具集合',
      show: '显示加载状态',
      hide: '隐藏加载状态'
    },
    search: {
      description: '搜索组件相关工具集合',
      getValue: '获取当前搜索值',
      setValue: '设置搜索值',
      clear: '清除搜索值'
    },
    pager: {
      description: '分页组件相关工具集合',
      getCurrentPage: '获取当前页码',
      setCurrentPage: '设置当前页码',
      getPageSize: '获取页面大小',
      setPageSize: '设置页面大小'
    },
    image: {
      description: '图片组件相关工具集合',
      getSrc: '获取图片来源',
      setSrc: '设置图片来源'
    },
    fileUpload: {
      description: '文件上传组件相关工具集合',
      getFileList: '获取文件列表',
      clearFileList: '清空文件列表',
      removeFile: '删除指定文件'
    },
    calendar: {
      description: '日历组件相关工具集合',
      getValue: '获取当前选择的日期',
      setValue: '设置日历的日期',
      reset: '重置日历到当前日期'
    },
    breadcrumb: {
      description: '面包屑组件相关工具集合',
      getItems: '获取面包屑项目列表',
      setItems: '设置面包屑项目'
    },
    menu: {
      description: '菜单组件相关工具集合',
      getActiveIndex: '获取当前活跃的菜单项索引',
      setActiveIndex: '设置活跃的菜单项'
    },
    treeMenu: {
      description: '树形菜单组件相关工具集合',
      getSelectedNode: '获取当前选中的节点',
      setSelectedNode: '设置选中的节点'
    },
    navMenu: {
      description: '导航菜单组件相关工具集合',
      getActiveKey: '获取当前活跃的菜单键',
      setActiveKey: '设置活跃的菜单键'
    },
    pagination: {
      description: '分页组件相关工具集合',
      getCurrentPage: '获取当前页码',
      setCurrentPage: '设置当前页码',
      getPageSize: '获取页面大小',
      setPageSize: '设置页面大小'
    },
    layout: {
      description: '布局组件相关工具集合',
      getMode: '获取布局模式',
      setMode: '设置布局模式'
    },
    header: {
      description: '页头组件相关工具集合',
      getTitle: '获取页头标题',
      setTitle: '设置页头标题'
    },
    footer: {
      description: '页脚组件相关工具集合',
      getContent: '获取页脚内容',
      setContent: '设置页脚内容'
    },
    side: {
      description: '侧边栏组件相关工具集合',
      getCollapsed: '获取侧边栏是否折叠',
      setCollapsed: '设置侧边栏折叠状态',
      toggleCollapsed: '切换侧边栏折叠状态'
    },
    notification: {
      description: '通知组件相关工具集合',
      show: '显示通知',
      close: '关闭通知'
    },
    message: {
      description: '消息提示组件相关工具集合',
      show: '显示消息',
      close: '关闭消息'
    },
    messageBox: {
      description: '消息框组件相关工具集合',
      show: '显示消息框',
      confirm: '确认操作',
      cancel: '取消操作'
    },
    empty: {
      description: '空状态组件相关工具集合',
      getDescription: '获取空状态描述',
      setDescription: '设置空状态描述'
    },
    skeleton: {
      description: '骨架屏组件相关工具集合',
      getLoading: '获取加载状态',
      setLoading: '设置加载状态'
    },
    result: {
      description: '结果组件相关工具集合',
      getStatus: '获取结果状态',
      setStatus: '设置结果状态'
    },
    avatar: {
      description: '头像组件相关工具集合',
      getSrc: '获取头像来源',
      setSrc: '设置头像来源'
    },
    link: {
      description: '链接组件相关工具集合',
      getHref: '获取链接地址',
      setHref: '设置链接地址'
    },
    spin: {
      description: '旋转加载组件相关工具集合',
      getSpinning: '获取旋转加载状态',
      setSpinning: '设置旋转加载状态'
    },
    watermark: {
      description: '水印组件相关工具集合',
      getText: '获取水印文本',
      setText: '设置水印文本'
    },
    transfer: {
      description: '穿梭框组件相关工具集合',
      getLeftItems: '获取左侧项目',
      getRightItems: '获取右侧项目',
      move: '移动项目'
    },
    treeSelect: {
      description: '树形选择器组件相关工具集合',
      getValue: '获取选中值',
      setValue: '设置选中值',
      getSelectedNodes: '获取选中节点',
      expandNode: '展开节点'
    },
    virtualTree: {
      description: '虚拟树形组件相关工具集合',
      getSelectedNodes: '获取选中节点',
      expandAll: '展开所有节点',
      collapseAll: '折叠所有节点',
      selectNode: '选中节点'
    },
    colorPicker: {
      description: '颜色选择器组件相关工具集合',
      getColor: '获取选中颜色',
      setColor: '设置颜色',
      getFormats: '获取支持的格式',
      clearColor: '清除颜色'
    },
    richTextEditor: {
      description: '富文本编辑器组件相关工具集合',
      getContent: '获取编辑器内容',
      setContent: '设置编辑器内容',
      insertText: '插入文本',
      clearContent: '清除内容'
    },
    popconfirm: {
      description: '气泡确认框组件相关工具集合',
      show: '显示确认框',
      hide: '隐藏确认框',
      confirm: '确认操作',
      cancel: '取消操作'
    },
    filterPanel: {
      description: '过滤面板组件相关工具集合',
      getFilters: '获取过滤条件',
      addFilter: '添加过滤条件',
      removeFilter: '移除过滤条件',
      clearFilters: '清除所有过滤条件'
    },
    monthTable: {
      description: '月份表格组件相关工具集合',
      getSelectedMonth: '获取选中月份',
      setSelectedMonth: '设置选中月份',
      getYear: '获取年份',
      nextYear: '跳转到下一年'
    },
    yearTable: {
      description: '年份表格组件相关工具集合',
      getSelectedYear: '获取选中年份',
      setSelectedYear: '设置选中年份',
      getYearRange: '获取年份范围',
      nextDecade: '跳转到下一个十年'
    },
    cardGroup: {
      description: '卡片组合组件相关工具集合',
      getCards: '获取所有卡片',
      addCard: '添加卡片',
      removeCard: '移除卡片',
      getLayout: '获取布局类型'
    },
    card: {
      description: '卡片组件相关工具集合',
      getTitle: '获取卡片标题',
      setTitle: '设置卡片标题',
      getContent: '获取卡片内容',
      setContent: '设置卡片内容'
    },
    cardTemplate: {
      description: '卡片模板组件相关工具集合',
      getTemplate: '获取模板',
      setTemplate: '设置模板',
      getData: '获取模板数据',
      render: '渲染模板'
    },
    timeRange: {
      description: '时间范围选择器组件相关工具集合',
      getRange: '获取时间范围',
      setRange: '设置时间范围',
      getStartTime: '获取开始时间',
      setStartTime: '设置开始时间'
    },
    timeSelect: {
      description: '时间选择器组件相关工具集合',
      getSelectedTime: '获取选中时间',
      setSelectedTime: '设置选中时间',
      getOptions: '获取时间选项',
      clearSelection: '清除选择'
    },
    formItem: {
      description: '表单项组件相关工具集合',
      getLabel: '获取表单项标签',
      setLabel: '设置表单项标签',
      validate: '验证表单项',
      getError: '获取错误信息'
    },
    optionGroup: {
      description: '选项组组件相关工具集合',
      getLabel: '获取分组标签',
      setLabel: '设置分组标签',
      getOptions: '获取分组内选项',
      addOption: '添加选项'
    },
    flowchart: {
      description: '流程图组件相关工具集合',
      getNodes: '获取所有节点',
      addNode: '添加节点',
      connectNodes: '连接节点',
      getLayout: '获取布局类型'
    },
    mindMap: {
      description: '思维导图组件相关工具集合',
      getNodes: '获取所有节点',
      addNode: '添加节点',
      expandAll: '展开所有节点',
      collapseAll: '折叠所有节点'
    },
    queryBuilder: {
      description: '查询构建器组件相关工具集合',
      getQuery: '获取查询字符串',
      setQuery: '设置查询字符串',
      addCondition: '添加查询条件',
      executeQuery: '执行查询'
    },
    imageViewer: {
      description: '图片查看器组件相关工具集合',
      getImages: '获取所有图片',
      setImages: '设置图片列表',
      goToImage: '跳转到指定图片',
      zoom: '缩放图片'
    },
    dropdown: {
      description: '下拉菜单组件相关工具集合',
      open: '打开下拉菜单',
      close: '关闭下拉菜单',
      getItems: '获取菜单项列表',
      selectItem: '选择菜单项'
    },
    dropdownItem: {
      description: '下拉菜单项组件相关工具集合',
      getLabel: '获取菜单项标签',
      setLabel: '设置菜单项标签',
      isDisabled: '检查菜单项是否禁用',
      setDisabled: '设置菜单项禁用状态'
    },
    dropdownMenu: {
      description: '下拉菜单集合组件相关工具集合',
      open: '打开下拉菜单',
      close: '关闭下拉菜单',
      getItems: '获取菜单项列表',
      addItem: '添加菜单项'
    },
    datePanel: {
      description: '日期选择面板组件相关工具集合',
      getDate: '获取当前选中日期',
      setDate: '设置选中日期',
      nextMonth: '切换到下一个月',
      previousMonth: '切换到上一个月'
    },
    dateTable: {
      description: '日期表格组件相关工具集合',
      getSelectedDate: '获取选中的日期',
      setSelectedDate: '设置选中日期',
      getMonth: '获取当前月份',
      getDates: '获取日期列表'
    },
    timePanel: {
      description: '时间选择面板组件相关工具集合',
      getTime: '获取当前时间',
      setTime: '设置时间',
      getHour: '获取小时',
      setHour: '设置小时'
    },
    timeSpinner: {
      description: '时间调整器组件相关工具集合',
      getTime: '获取当前时间',
      setTime: '设置时间',
      increment: '增加指定单位',
      decrement: '减少指定单位'
    },
    richText: {
      description: '富文本编辑器组件相关工具集合',
      getContent: '获取内容',
      setContent: '设置内容',
      getText: '获取纯文本',
      getLength: '获取内容长度'
    },
    scrollText: {
      description: '滚动文本组件相关工具集合',
      getText: '获取文本',
      setText: '设置文本',
      start: '开始滚动',
      stop: '停止滚动'
    },
    selectDropdown: {
      description: '选择下拉菜单组件相关工具集合',
      open: '打开下拉菜单',
      close: '关闭下拉菜单',
      getOptions: '获取选项列表',
      selectOption: '选择选项'
    },
    dynamicScroller: {
      description: '动态滚动器组件相关工具集合',
      getItems: '获取项目列表',
      scrollToItem: '滚动到指定项目',
      refresh: '刷新滚动器',
      getScrollPosition: '获取滚动位置'
    },
    recycleScroller: {
      description: '回收滚动器组件相关工具集合',
      getItems: '获取项目列表',
      scrollToItem: '滚动到指定项目',
      reset: '重置滚动器',
      getFirstVisibleIndex: '获取第一个可见项的索引'
    },
    virtualScrollBox: {
      description: '虚拟滚动容器组件相关工具集合',
      getItems: '获取项目列表',
      scrollTo: '滚动到指定位置',
      getViewportHeight: '获取视口高度',
      setViewportHeight: '设置视口高度'
    },
    scrollBar: {
      description: '滚动条组件相关工具集合',
      getPosition: '获取滚动位置',
      setPosition: '设置滚动位置',
      getSize: '获取滚动条大小',
      scroll: '滚动指定距离'
    },
    statistic: {
      description: '统计信息组件相关工具集合',
      getValue: '获取统计值',
      setValue: '设置统计值',
      getTitle: '获取标题',
      getPrefix: '获取前缀'
    },
    space: {
      description: '空间间隔布局组件相关工具集合',
      getDirection: '获取方向',
      setDirection: '设置方向',
      getSize: '获取间隔大小',
      setSize: '设置间隔大小'
    },
    split: {
      description: '分割面板组件相关工具集合',
      getDividerPosition: '获取分割线位置',
      setDividerPosition: '设置分割线位置',
      getMode: '获取分割模式',
      setMode: '设置分割模式'
    },
    sticky: {
      description: '粘性定位元素组件相关工具集合',
      getOffset: '获取偏移量',
      setOffset: '设置偏移量',
      isSticky: '检查是否粘性定位',
      getZIndex: '获取z-index'
    },
    checkboxButton: {
      description: '复选框按钮组件相关工具集合',
      getValue: '获取选中状态',
      setValue: '设置选中状态',
      toggle: '切换选中状态',
      getLabel: '获取标签'
    },
    checkboxGroup: {
      description: '复选框组组件相关工具集合',
      getValues: '获取选中的所有值',
      setValues: '设置选中的值',
      selectAll: '选中所有项',
      clearSelection: '清除选中'
    }
  }
}
