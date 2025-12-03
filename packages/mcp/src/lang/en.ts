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
        'Select a row in the table, need to pass the data to be selected, requirement: the data must contain the "_RID" field',
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
    tree: {
      description: 'Collection of Tools Related to Tree Control Components',
      getTreeData: 'Obtain table data',
      setCurrentKey: 'Please enter the ID value to set the current selected state of a node',
      expandHlNode: 'Please enter the ID value to set the current deployment status of a node',
      collapseHlNode: 'Please enter the ID value to set the collapsed state of a node',
      removeNode: 'Please enter the ID value to delete a node',
      insertBefore: 'Add a node in front of a node',
      insertAfter: 'Add a node after a node'
    },
    form: {
      description:
        'Form component related tool set, including getting form validation, resetting form and other functions',
      resetFields:
        'Reset the entire form, resetting all field values to their initial values and removing validation results',
      clearValidate:
        'Remove the validation results of the form item, you can pass in the prop of the form item to be removed, or an array of props, if not passed in, the validation results of the entire form will be removed',
      clearValidateAll: 'Remove the validation results of the entire form',
      validate:
        'Validate the entire form, the parameter is a callback function (the callback function will be called after the validation is completed and passed two parameters: 1, whether the validation is successful 2, the fields that failed validation) returns a Promise object',
      validateField:
        'Validate the specified field by passing in the prop of the form item to be validated, or separating the props with commas'
    },
    alert: {
      description: 'Alert component tool set',
      close: 'Close the alert message',
      setType: 'Set alert type (success, warning, error, info)',
      setTitle: 'Set alert title'
    },
    modal: {
      description: 'Modal component tool set',
      open: 'Open the dialog box',
      close: 'Close the dialog box',
      setTitle: 'Set dialog box title',
      setContent: 'Set dialog box content'
    },
    input: {
      description: 'Input component tool set',
      getValue: 'Get the value of the input box',
      setValue: 'Set the value of the input box',
      clear: 'Clear the input box',
      focus: 'Make the input box gain focus'
    },
    select: {
      description: 'Select component tool set',
      openMenu: 'Open the dropdown menu',
      closeMenu: 'Close the dropdown menu',
      getValue: 'Get the selected value',
      setValue: 'Set the selected value',
      getOptions: 'Get all options',
      clearValue: 'Clear the selected value'
    },
    checkbox: {
      description: 'Checkbox component tool set',
      getValue: 'Get the checked state of the checkbox',
      setValue: 'Set the checked state of the checkbox',
      check: 'Check the checkbox',
      uncheck: 'Uncheck the checkbox'
    },
    radio: {
      description: 'Radio component tool set',
      getValue: 'Get the selected value of the radio button',
      setValue: 'Set the selected value of the radio button',
      select: 'Select the current radio button'
    },
    table: {
      description: 'Table component tool set',
      getTableData: 'Get table data',
      getColumns: 'Get table column configuration',
      getCurrentRow: 'Get the currently selected row',
      setCurrentRow: 'Set the currently selected row'
    },
    datePicker: {
      description: 'DatePicker component tool set',
      getValue: 'Get the selected date',
      setValue: 'Set the selected date',
      clear: 'Clear the selected date',
      openPicker: 'Open the date picker'
    },
    tabs: {
      description: 'Tabs component tool set',
      getCurrentTab: 'Get the currently activated tab',
      setCurrentTab: 'Set the currently activated tab',
      getTabsCount: 'Get the total number of tabs'
    },
    upload: {
      description: 'Upload component tool set',
      getFileList: 'Get the file list',
      clearFileList: 'Clear the file list',
      removeFile: 'Remove the specified file',
      submit: 'Submit the upload'
    },
    drawer: {
      description: 'Drawer component tool set',
      open: 'Open the drawer',
      close: 'Close the drawer',
      setTitle: 'Set the drawer title'
    },
    dialogBox: {
      description: 'DialogBox component tool set',
      open: 'Open the dialog box',
      close: 'Close the dialog box',
      setTitle: 'Set the dialog box title',
      getVisible: 'Get whether the dialog box is displayed'
    },
    steps: {
      description: 'Steps component tool set',
      getCurrentStep: 'Get the current step',
      setCurrentStep: 'Set the current step',
      nextStep: 'Next step',
      prevStep: 'Previous step'
    },
    tooltip: {
      description: 'Tooltip component tool set',
      show: 'Show the tooltip message',
      hide: 'Hide the tooltip message',
      setContent: 'Set the tooltip content'
    },
    popover: {
      description: 'Popover component tool set',
      show: 'Show the popover',
      hide: 'Hide the popover',
      setTitle: 'Set the popover title',
      setContent: 'Set the popover content'
    },
    progress: {
      description: 'Progress component tool set',
      getProgress: 'Get the current progress percentage',
      setProgress: 'Set the progress percentage (0-100)'
    },
    collapse: {
      description: 'Collapse component tool set',
      getActiveNames: 'Get the list of currently active accordion panel names',
      setActiveNames: 'Set active accordion panels',
      expand: 'Expand a specified accordion panel',
      collapse: 'Collapse a specified accordion panel'
    },
    carousel: {
      description: 'Carousel component tool set',
      getCurrentIndex: 'Get the current carousel index',
      setCurrentIndex: 'Set carousel to a specified index',
      next: 'Move to the next slide',
      prev: 'Move to the previous slide'
    },
    cascader: {
      description: 'Cascader component tool set',
      getValue: 'Get the currently selected value',
      setValue: 'Set the value of the cascader',
      clear: 'Clear the cascader value'
    },
    dateRange: {
      description: 'DateRange component tool set',
      getValue: 'Get the currently selected date range',
      setValue: 'Set the date range',
      clear: 'Clear the date range selection'
    },
    timePicker: {
      description: 'TimePicker component tool set',
      getValue: 'Get the currently selected time',
      setValue: 'Set the time picker value',
      clear: 'Clear the time selection'
    },
    rate: {
      description: 'Rate component tool set',
      getValue: 'Get the current rating value',
      setValue: 'Set the rating value',
      clear: 'Clear the rating'
    },
    switch: {
      description: 'Switch component tool set',
      getValue: 'Get the current switch state',
      setValue: 'Set the switch state',
      toggle: 'Toggle the switch state'
    },
    slider: {
      description: 'Slider component tool set',
      getValue: 'Get the current slider value',
      setValue: 'Set the slider value',
      reset: 'Reset the slider to minimum value'
    },
    badge: {
      description: 'Badge component tool set',
      getValue: 'Get the current badge value',
      setValue: 'Set the badge value'
    },
    tag: {
      description: 'Tag component tool set',
      getType: 'Get the tag type',
      setType: 'Set the tag type',
      close: 'Close the tag'
    },
    divider: {
      description: 'Divider component tool set',
      getContent: 'Get the divider content',
      setContent: 'Set the divider content'
    },
    loading: {
      description: 'Loading component tool set',
      show: 'Show the loading state',
      hide: 'Hide the loading state'
    },
    search: {
      description: 'Search component tool set',
      getValue: 'Get the current search value',
      setValue: 'Set the search value',
      clear: 'Clear the search value'
    },
    pager: {
      description: 'Pager component tool set',
      getCurrentPage: 'Get the current page number',
      setCurrentPage: 'Set the current page number',
      getPageSize: 'Get the page size',
      setPageSize: 'Set the page size'
    },
    image: {
      description: 'Image component tool set',
      getSrc: 'Get the image source',
      setSrc: 'Set the image source'
    },
    fileUpload: {
      description: 'FileUpload component tool set',
      getFileList: 'Get the file list',
      clearFileList: 'Clear the file list',
      removeFile: 'Remove a specified file'
    },
    calendar: {
      description: 'Calendar component tool set',
      getValue: 'Get the currently selected date',
      setValue: 'Set the calendar date',
      reset: 'Reset the calendar to the current date'
    },
    breadcrumb: {
      description: 'Breadcrumb component tool set',
      getItems: 'Get the list of breadcrumb items',
      setItems: 'Set breadcrumb items'
    },
    menu: {
      description: 'Menu component tool set',
      getActiveIndex: 'Get the index of the currently active menu item',
      setActiveIndex: 'Set the active menu item'
    },
    treeMenu: {
      description: 'TreeMenu component tool set',
      getSelectedNode: 'Get the currently selected node',
      setSelectedNode: 'Set the selected node'
    },
    navMenu: {
      description: 'NavMenu component tool set',
      getActiveKey: 'Get the currently active menu key',
      setActiveKey: 'Set the active menu key'
    },
    pagination: {
      description: 'Pagination component tool set',
      getCurrentPage: 'Get the current page number',
      setCurrentPage: 'Set the current page number',
      getPageSize: 'Get the page size',
      setPageSize: 'Set the page size'
    },
    layout: {
      description: 'Layout component tool set',
      getMode: 'Get the layout mode',
      setMode: 'Set the layout mode'
    },
    header: {
      description: 'Header component tool set',
      getTitle: 'Get the page header title',
      setTitle: 'Set the page header title'
    },
    footer: {
      description: 'Footer component tool set',
      getContent: 'Get the page footer content',
      setContent: 'Set the page footer content'
    },
    side: {
      description: 'Side component tool set',
      getCollapsed: 'Get whether the sidebar is collapsed',
      setCollapsed: 'Set the sidebar collapsed state',
      toggleCollapsed: 'Toggle the sidebar collapsed state'
    },
    notification: {
      description: 'Notification component tool set',
      show: 'Show notification',
      close: 'Close notification'
    },
    message: {
      description: 'Message component tool set',
      show: 'Show message',
      close: 'Close message'
    },
    messageBox: {
      description: 'MessageBox component tool set',
      show: 'Show message box',
      confirm: 'Confirm action',
      cancel: 'Cancel action'
    },
    empty: {
      description: 'Empty component tool set',
      getDescription: 'Get the empty state description',
      setDescription: 'Set the empty state description'
    },
    skeleton: {
      description: 'Skeleton component tool set',
      getLoading: 'Get the loading state',
      setLoading: 'Set the loading state'
    },
    result: {
      description: 'Result component tool set',
      getStatus: 'Get the result status',
      setStatus: 'Set the result status'
    },
    avatar: {
      description: 'Avatar component tool set',
      getSrc: 'Get the avatar source',
      setSrc: 'Set the avatar source'
    },
    link: {
      description: 'Link component tool set',
      getHref: 'Get the link address',
      setHref: 'Set the link address'
    },
    spin: {
      description: 'Spin component tool set',
      getSpinning: 'Get the spinning loading state',
      setSpinning: 'Set the spinning loading state'
    },
    watermark: {
      description: 'Watermark component tool set',
      getText: 'Get the watermark text',
      setText: 'Set the watermark text'
    },
    transfer: {
      description: 'Transfer component tool set',
      getLeftItems: 'Get left items',
      getRightItems: 'Get right items',
      move: 'Move items'
    },
    treeSelect: {
      description: 'TreeSelect component tool set',
      getValue: 'Get selected value',
      setValue: 'Set selected value',
      getSelectedNodes: 'Get selected nodes',
      expandNode: 'Expand node'
    },
    virtualTree: {
      description: 'VirtualTree component tool set',
      getSelectedNodes: 'Get selected nodes',
      expandAll: 'Expand all nodes',
      collapseAll: 'Collapse all nodes',
      selectNode: 'Select node'
    },
    colorPicker: {
      description: 'ColorPicker component tool set',
      getColor: 'Get selected color',
      setColor: 'Set color',
      getFormats: 'Get supported formats',
      clearColor: 'Clear color'
    },
    richTextEditor: {
      description: 'RichTextEditor component tool set',
      getContent: 'Get editor content',
      setContent: 'Set editor content',
      insertText: 'Insert text',
      clearContent: 'Clear content'
    },
    popconfirm: {
      description: 'Popconfirm component tool set',
      show: 'Show confirmation dialog',
      hide: 'Hide confirmation dialog',
      confirm: 'Confirm action',
      cancel: 'Cancel action'
    },
    filterPanel: {
      description: 'FilterPanel component tool set',
      getFilters: 'Get filter conditions',
      addFilter: 'Add filter condition',
      removeFilter: 'Remove filter condition',
      clearFilters: 'Clear all filters'
    },
    monthTable: {
      description: 'MonthTable component tool set',
      getSelectedMonth: 'Get selected month',
      setSelectedMonth: 'Set selected month',
      getYear: 'Get year',
      nextYear: 'Jump to next year'
    },
    yearTable: {
      description: 'YearTable component tool set',
      getSelectedYear: 'Get selected year',
      setSelectedYear: 'Set selected year',
      getYearRange: 'Get year range',
      nextDecade: 'Jump to next decade'
    },
    cardGroup: {
      description: 'CardGroup component tool set',
      getCards: 'Get all cards',
      addCard: 'Add card',
      removeCard: 'Remove card',
      getLayout: 'Get layout type'
    },
    card: {
      description: 'Card component tool set',
      getTitle: 'Get card title',
      setTitle: 'Set card title',
      getContent: 'Get card content',
      setContent: 'Set card content'
    },
    cardTemplate: {
      description: 'CardTemplate component tool set',
      getTemplate: 'Get template',
      setTemplate: 'Set template',
      getData: 'Get template data',
      render: 'Render template'
    },
    timeRange: {
      description: 'TimeRange component tool set',
      getRange: 'Get time range',
      setRange: 'Set time range',
      getStartTime: 'Get start time',
      setStartTime: 'Set start time'
    },
    timeSelect: {
      description: 'TimeSelect component tool set',
      getSelectedTime: 'Get selected time',
      setSelectedTime: 'Set selected time',
      getOptions: 'Get time options',
      clearSelection: 'Clear selection'
    },
    formItem: {
      description: 'FormItem component tool set',
      getLabel: 'Get form item label',
      setLabel: 'Set form item label',
      validate: 'Validate form item',
      getError: 'Get error message'
    },
    optionGroup: {
      description: 'OptionGroup component tool set',
      getLabel: 'Get group label',
      setLabel: 'Set group label',
      getOptions: 'Get group options',
      addOption: 'Add option'
    },
    flowchart: {
      description: 'Flowchart component tool set',
      getNodes: 'Get all nodes',
      addNode: 'Add node',
      connectNodes: 'Connect nodes',
      getLayout: 'Get layout type'
    },
    mindMap: {
      description: 'MindMap component tool set',
      getNodes: 'Get all nodes',
      addNode: 'Add node',
      expandAll: 'Expand all nodes',
      collapseAll: 'Collapse all nodes'
    },
    queryBuilder: {
      description: 'QueryBuilder component tool set',
      getQuery: 'Get query string',
      setQuery: 'Set query string',
      addCondition: 'Add query condition',
      executeQuery: 'Execute query'
    },
    imageViewer: {
      description: 'ImageViewer component tool set',
      getImages: 'Get all images',
      setImages: 'Set image list',
      goToImage: 'Jump to image',
      zoom: 'Zoom image'
    },
    dropdown: {
      description: 'Dropdown menu component tool set',
      open: 'Open dropdown menu',
      close: 'Close dropdown menu',
      getItems: 'Get menu items list',
      selectItem: 'Select menu item'
    },
    dropdownItem: {
      description: 'DropdownItem component tool set',
      getLabel: 'Get menu item label',
      setLabel: 'Set menu item label',
      isDisabled: 'Check if menu item is disabled',
      setDisabled: 'Set menu item disabled state'
    },
    dropdownMenu: {
      description: 'DropdownMenu component tool set',
      open: 'Open dropdown menu',
      close: 'Close dropdown menu',
      getItems: 'Get menu items list',
      addItem: 'Add menu item'
    },
    datePanel: {
      description: 'DatePanel component tool set',
      getDate: 'Get currently selected date',
      setDate: 'Set selected date',
      nextMonth: 'Switch to next month',
      previousMonth: 'Switch to previous month'
    },
    dateTable: {
      description: 'DateTable component tool set',
      getSelectedDate: 'Get selected date',
      setSelectedDate: 'Set selected date',
      getMonth: 'Get current month',
      getDates: 'Get date list'
    },
    timePanel: {
      description: 'TimePanel component tool set',
      getTime: 'Get current time',
      setTime: 'Set time',
      getHour: 'Get hour',
      setHour: 'Set hour'
    },
    timeSpinner: {
      description: 'TimeSpinner component tool set',
      getTime: 'Get current time',
      setTime: 'Set time',
      increment: 'Increase specified unit',
      decrement: 'Decrease specified unit'
    },
    richText: {
      description: 'RichText editor component tool set',
      getContent: 'Get content',
      setContent: 'Set content',
      getText: 'Get plain text',
      getLength: 'Get content length'
    },
    scrollText: {
      description: 'ScrollText component tool set',
      getText: 'Get text',
      setText: 'Set text',
      start: 'Start scrolling',
      stop: 'Stop scrolling'
    },
    selectDropdown: {
      description: 'SelectDropdown component tool set',
      open: 'Open dropdown menu',
      close: 'Close dropdown menu',
      getOptions: 'Get options list',
      selectOption: 'Select option'
    },
    dynamicScroller: {
      description: 'DynamicScroller component tool set',
      getItems: 'Get items list',
      scrollToItem: 'Scroll to specified item',
      refresh: 'Refresh scroller',
      getScrollPosition: 'Get scroll position'
    },
    recycleScroller: {
      description: 'RecycleScroller component tool set',
      getItems: 'Get items list',
      scrollToItem: 'Scroll to specified item',
      reset: 'Reset scroller',
      getFirstVisibleIndex: 'Get first visible item index'
    },
    virtualScrollBox: {
      description: 'VirtualScrollBox component tool set',
      getItems: 'Get items list',
      scrollTo: 'Scroll to specified position',
      getViewportHeight: 'Get viewport height',
      setViewportHeight: 'Set viewport height'
    },
    scrollBar: {
      description: 'ScrollBar component tool set',
      getPosition: 'Get scroll position',
      setPosition: 'Set scroll position',
      getSize: 'Get scrollbar size',
      scroll: 'Scroll specified distance'
    },
    statistic: {
      description: 'Statistic component tool set',
      getValue: 'Get statistic value',
      setValue: 'Set statistic value',
      getTitle: 'Get title',
      getPrefix: 'Get prefix'
    },
    space: {
      description: 'Space layout component tool set',
      getDirection: 'Get direction',
      setDirection: 'Set direction',
      getSize: 'Get spacing size',
      setSize: 'Set spacing size'
    },
    split: {
      description: 'Split panel component tool set',
      getDividerPosition: 'Get divider position',
      setDividerPosition: 'Set divider position',
      getMode: 'Get split mode',
      setMode: 'Set split mode'
    },
    sticky: {
      description: 'Sticky positioning component tool set',
      getOffset: 'Get offset',
      setOffset: 'Set offset',
      isSticky: 'Check if sticky positioning',
      getZIndex: 'Get z-index'
    },
    checkboxButton: {
      description: 'CheckboxButton component tool set',
      getValue: 'Get checked state',
      setValue: 'Set checked state',
      toggle: 'Toggle checked state',
      getLabel: 'Get label'
    },
    checkboxGroup: {
      description: 'CheckboxGroup component tool set',
      getValues: 'Get all selected values',
      setValues: 'Set selected values',
      selectAll: 'Select all items',
      clearSelection: 'Clear selection'
    },
    colorSelectPanel: {
      description: 'Color select panel component tool set',
      getColor: 'Get selected color',
      setColor: 'Set color',
      open: 'Open panel'
    },
    company: {
      description: 'Company selector tool set',
      getCompany: 'Get current company',
      setCompany: 'Set company'
    },
    country: {
      description: 'Country selector tool set',
      getCountry: 'Get selected country',
      setCountry: 'Set country'
    },
    crop: {
      description: 'Image crop tool set',
      getImage: 'Get original image',
      setImage: 'Set image to crop',
      crop: 'Execute crop operation'
    },
    currency: {
      description: 'Currency tool set',
      getValue: 'Get currency value',
      setValue: 'Set currency value'
    },
    dept: {
      description: 'Department selector tool set',
      getDept: 'Get current department',
      setDept: 'Set department'
    },
    dialogSelect: {
      description: 'Dialog select tool set',
      open: 'Open dialog',
      close: 'Close dialog',
      getSelected: 'Get selected items'
    },
    dropRoles: {
      description: 'Role dropdown tool set',
      getSelected: 'Get selected roles',
      setSelected: 'Set selected roles'
    },
    dropTimes: {
      description: 'Time dropdown tool set',
      getTime: 'Get selected time',
      setTime: 'Set time'
    },
    espace: {
      description: 'Enterprise space tool set',
      getInformation: 'Get space information',
      setInformation: 'Set space information'
    },
    exception: {
      description: 'Exception display tool set',
      getCode: 'Get exception code',
      setCode: 'Set exception code'
    },
    fallMenu: {
      description: 'Falldown menu tool set',
      open: 'Open menu',
      close: 'Close menu'
    },
    floatButton: {
      description: 'Floating button tool set',
      show: 'Show button',
      hide: 'Hide button',
      click: 'Click button'
    },
    floatbar: {
      description: 'Floatbar tool set',
      position: 'Set position',
      getPosition: 'Get current position'
    },
    fluentEditor: {
      description: 'Fluent editor tool set',
      getContent: 'Get editor content',
      setContent: 'Set editor content'
    },
    fullscreen: {
      description: 'Fullscreen tool set',
      enter: 'Enter fullscreen',
      exit: 'Exit fullscreen'
    },
    gridSelect: {
      description: 'Grid select dialog tool set',
      open: 'Open grid dialog',
      getSelected: 'Get selected rows'
    },
    guide: {
      description: 'Guide tool set',
      start: 'Start guide',
      next: 'Go to next step'
    },
    hrapprover: {
      description: 'HR approver selector tool set',
      getApprovers: 'Get approver list',
      addApprover: 'Add approver'
    },
    infiniteScroll: {
      description: 'Infinite scroll tool set',
      loadMore: 'Load more items',
      reset: 'Reset scroll'
    },
    ipAddress: {
      description: 'IP address input tool set',
      getAddress: 'Get IP address',
      setAddress: 'Set IP address'
    },
    linkMenu: {
      description: 'Link menu tool set',
      getItems: 'Get links list',
      addItem: 'Add link'
    },
    locales: {
      description: 'Localization tool set',
      getCurrentLocale: 'Get current locale',
      setLocale: 'Set locale'
    },
    logonUser: {
      description: 'Logon user tool set',
      getUser: 'Get current user',
      setUser: 'Set user'
    },
    logout: {
      description: 'Logout tool set',
      logout: 'Execute logout'
    },
    milestone: {
      description: 'Milestone tool set',
      getCurrent: 'Get current milestone',
      setCurrent: 'Set current milestone'
    },
    notify: {
      description: 'Notifications tool set',
      show: 'Show notification',
      close: 'Close notification'
    },
    numberAnimation: {
      description: 'Number animation tool set',
      start: 'Start animation',
      stop: 'Stop animation'
    },
    numeric: {
      description: 'Numeric input tool set',
      getValue: 'Get numeric value',
      setValue: 'Set numeric value'
    },
    popUpload: {
      description: 'Popup upload tool set',
      upload: 'Upload file',
      getFiles: 'Get uploaded files'
    },
    popeditor: {
      description: 'Popup editor tool set',
      open: 'Open editor',
      close: 'Close editor'
    },
    qrCode: {
      description: 'QR code tool set',
      generate: 'Generate QR code',
      getCode: 'Get QR code'
    },
    roles: {
      description: 'Role selection tool set',
      getSelected: 'Get selected roles',
      setSelected: 'Set selected roles'
    },
    selectWrapper: {
      description: 'Select wrapper tool set',
      getValue: 'Get value',
      setValue: 'Set value'
    },
    tagGroup: {
      description: 'Tag group tool set',
      getTags: 'Get tag list',
      addTag: 'Add tag'
    },
    textPopup: {
      description: 'Text popup tool set',
      show: 'Show popup',
      hide: 'Hide popup'
    },
    timeLine: {
      description: 'Timeline tool set',
      getItems: 'Get timeline items',
      addItem: 'Add timeline item'
    },
    toggleMenu: {
      description: 'Toggle menu tool set',
      toggle: 'Toggle menu',
      isOpen: 'Check menu state'
    },
    user: {
      description: 'User selection tool set',
      getUser: 'Get current user',
      setUser: 'Set user'
    },
    userAccount: {
      description: 'User account tool set',
      getAccount: 'Get account',
      setAccount: 'Set account'
    },
    userContact: {
      description: 'User contact tool set',
      getContact: 'Get contact info',
      setContact: 'Set contact info'
    },
    userHead: {
      description: 'User avatar tool set',
      getAvatar: 'Get avatar',
      setAvatar: 'Set avatar'
    },
    userLink: {
      description: 'User link tool set',
      getLink: 'Get link',
      setLink: 'Set link'
    },
    wizard: {
      description: 'Wizard tool set',
      getCurrentStep: 'Get current step',
      nextStep: 'Go to next step',
      prevStep: 'Go to previous step'
    }
  }
}
