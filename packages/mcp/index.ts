import { defineTool } from './src/utils/defineTool'
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import type { Business, ComponentMcpConfig } from './src/utils/defineTool'
import zhCN from './src/lang/zh-CN'
import enUS from './src/lang/en'
import { getGridConfig } from './src/grid'
import { getTreeConfig } from './src/tree'
import { getBaseSelectConfig } from './src/base-select'
import { i18n } from './src/utils/locale'
import { getButtonConfig } from './src/button'
import { getFormConfig } from './src/form'
import { getAlertConfig } from './src/alert'
import { getModalConfig } from './src/modal'
import { getInputConfig } from './src/input'
import { getSelectConfig } from './src/select'
import { getCheckboxConfig } from './src/checkbox'
import { getRadioConfig } from './src/radio'
import { getTableConfig } from './src/table'
import { getDatePickerConfig } from './src/date-picker'
import { getTabsConfig } from './src/tabs'
import { getUploadConfig } from './src/upload'
import { getDrawerConfig } from './src/drawer'
import { getDialogBoxConfig } from './src/dialog-box'
import { getStepsConfig } from './src/steps'
import { getTooltipConfig } from './src/tooltip'
import { getPopoverConfig } from './src/popover'
import { getProgressConfig } from './src/progress'
import { getCollapseConfig } from './src/collapse'
import { getCarouselConfig } from './src/carousel'
import { getCascaderConfig } from './src/cascader'
import { getDateRangeConfig } from './src/date-range'
import { getTimePickerConfig } from './src/time-picker'
import { getRateConfig } from './src/rate'
import { getSwitchConfig } from './src/switch'
import { getSliderConfig } from './src/slider'
import { getBadgeConfig } from './src/badge'
import { getTagConfig } from './src/tag'
import { getDividerConfig } from './src/divider'
import { getLoadingConfig } from './src/loading'
import { getSearchConfig } from './src/search'
import { getPagerConfig } from './src/pager'
import { getImageConfig } from './src/image'
import { getFileUploadConfig } from './src/file-upload'
import { getCalendarConfig } from './src/calendar'
import { getBreadcrumbConfig } from './src/breadcrumb'
import { getMenuConfig } from './src/menu'
import { getTreeMenuConfig } from './src/tree-menu'
import { getNavMenuConfig } from './src/nav-menu'
import { getPaginationConfig } from './src/pagination'
import { getLayoutConfig } from './src/layout'
import { getHeaderConfig } from './src/header'
import { getFooterConfig } from './src/footer'
import { getSideConfig } from './src/side'
import { getNotificationConfig } from './src/notification'
import { getMessageConfig } from './src/message'
import { getMessageBoxConfig } from './src/message-box'
import { getEmptyConfig } from './src/empty'
import { getSkeletonConfig } from './src/skeleton'
import { getResultConfig } from './src/result'
import { getAvatarConfig } from './src/avatar'
import { getLinkConfig } from './src/link'
import { getSpinConfig } from './src/spin'
import { getWatermarkConfig } from './src/watermark'
import { getTransferConfig } from './src/transfer'
import { getTreeSelectConfig } from './src/tree-select'
import { getVirtualTreeConfig } from './src/virtual-tree'
import { getColorPickerConfig } from './src/color-picker'
import { getRichTextEditorConfig } from './src/rich-text-editor'
import { getPopconfirmConfig } from './src/popconfirm'
import { getFilterPanelConfig } from './src/filter-panel'
import { getMonthTableConfig } from './src/month-table'
import { getYearTableConfig } from './src/year-table'
import { getCardGroupConfig } from './src/card-group'
import { getCardConfig } from './src/card'
import { getCardTemplateConfig } from './src/card-template'
import { getTimeRangeConfig } from './src/time-range'
import { getTimeSelectConfig } from './src/time-select'
import { getFormItemConfig } from './src/form-item'
import { getOptionGroupConfig } from './src/option-group'
import { getFlowchartConfig } from './src/flowchart'
import { getMindMapConfig } from './src/mind-map'
import { getQueryBuilderConfig } from './src/query-builder'
import { getImageViewerConfig } from './src/image-viewer'
import { getDropdownConfig } from './src/dropdown'
import { getDropdownItemConfig } from './src/dropdown-item'
import { getDropdownMenuConfig } from './src/dropdown-menu'
import { getDatePanelConfig } from './src/date-panel'
import { getDateTableConfig } from './src/date-table'
import { getTimePanelConfig } from './src/time-panel'
import { getTimeSpinnerConfig } from './src/time-spinner'
import { getRichTextConfig } from './src/rich-text'
import { getScrollTextConfig } from './src/scroll-text'
import { getSelectDropdownConfig } from './src/select-dropdown'
import { getDynamicScrollerConfig } from './src/dynamic-scroller'
import { getRecycleScrollerConfig } from './src/recycle-scroller'
import { getVirtualScrollBoxConfig } from './src/virtual-scroll-box'
import { getScrollBarConfig } from './src/scroll-bar'
import { getStatisticConfig } from './src/statistic'
import { getSpaceConfig } from './src/space'
import { getSplitConfig } from './src/split'
import { getStickyConfig } from './src/sticky'
import { getCheckboxButtonConfig } from './src/checkbox-button'
import { getCheckboxGroupConfig } from './src/checkbox-group'
import { getColorSelectPanelConfig } from './src/color-select-panel'
import { getCompanyConfig } from './src/company'
import { getCountryConfig } from './src/country'
import { getCropConfig } from './src/crop'
import { getCurrencyConfig } from './src/currency'
import { getDeptConfig } from './src/dept'
import { getDialogSelectConfig } from './src/dialog-select'
import { getDropRolesConfig } from './src/drop-roles'
import { getDropTimesConfig } from './src/drop-times'
import { getEspaceConfig } from './src/espace'
import { getExceptionConfig } from './src/exception'
import { getFallMenuConfig } from './src/fall-menu'
import { getFloatButtonConfig } from './src/float-button'
import { getFloatbarConfig } from './src/floatbar'
import { getFluentEditorConfig } from './src/fluent-editor'
import { getFullscreenConfig } from './src/fullscreen'
import { getGridSelectConfig } from './src/grid-select'
import { getGuideConfig } from './src/guide'
import { getHrapproverConfig } from './src/hrapprover'
import { getInfiniteScrollConfig } from './src/infinite-scroll'
import { getIpAddressConfig } from './src/ip-address'
import { getLinkMenuConfig } from './src/link-menu'
import { getLocalesConfig } from './src/locales'
import { getLogonUserConfig } from './src/logon-user'
import { getLogoutConfig } from './src/logout'
import { getMilestoneConfig } from './src/milestone'
import { getNotifyConfig } from './src/notify'
import { getNumberAnimationConfig } from './src/number-animation'
import { getNumericConfig } from './src/numeric'
import { getPopUploadConfig } from './src/pop-upload'
import { getPopeditorConfig } from './src/popeditor'
import { getQrCodeConfig } from './src/qr-code'
import { getRolesConfig } from './src/roles'
import { getSelectWrapperConfig } from './src/select-wrapper'
import { getTagGroupConfig } from './src/tag-group'
import { getTextPopupConfig } from './src/text-popup'
import { getTimeLineConfig } from './src/time-line'
import { getToggleMenuConfig } from './src/toggle-menu'
import { getUserConfig } from './src/user'
import { getUserAccountConfig } from './src/user-account'
import { getUserContactConfig } from './src/user-contact'
import { getUserHeadConfig } from './src/user-head'
import { getUserLinkConfig } from './src/user-link'
import { getWizardConfig } from './src/wizard'

export const createMcpTools = (
  instance: any,
  { server, business }: { server: McpServer; business: Business },
  componentMcpConfig: ComponentMcpConfig
) => {
  defineTool({ business, componentMcpConfig, instance, server })
}

export const getTinyVueMcpConfig = ({ t }: { t?: ((path: string) => string) | null } = {}) => {
  if (i18n && t) {
    i18n.t = t
  }

  return {
    name: 'tiny-vue-mcp',
    version: '0.0.1',
    components: {
      Grid: getGridConfig(),
      Tree: getTreeConfig(),
      BaseSelect: getBaseSelectConfig(),
      Button: getButtonConfig(),
      Form: getFormConfig(),
      Alert: getAlertConfig(),
      Modal: getModalConfig(),
      Input: getInputConfig(),
      Select: getSelectConfig(),
      Checkbox: getCheckboxConfig(),
      Radio: getRadioConfig(),
      Table: getTableConfig(),
      DatePicker: getDatePickerConfig(),
      Tabs: getTabsConfig(),
      Upload: getUploadConfig(),
      Drawer: getDrawerConfig(),
      DialogBox: getDialogBoxConfig(),
      Steps: getStepsConfig(),
      Tooltip: getTooltipConfig(),
      Popover: getPopoverConfig(),
      Progress: getProgressConfig(),
      Collapse: getCollapseConfig(),
      Carousel: getCarouselConfig(),
      Cascader: getCascaderConfig(),
      DateRange: getDateRangeConfig(),
      TimePicker: getTimePickerConfig(),
      Rate: getRateConfig(),
      Switch: getSwitchConfig(),
      Slider: getSliderConfig(),
      Badge: getBadgeConfig(),
      Tag: getTagConfig(),
      Divider: getDividerConfig(),
      Loading: getLoadingConfig(),
      Search: getSearchConfig(),
      Pager: getPagerConfig(),
      Image: getImageConfig(),
      FileUpload: getFileUploadConfig(),
      Calendar: getCalendarConfig(),
      Breadcrumb: getBreadcrumbConfig(),
      Menu: getMenuConfig(),
      TreeMenu: getTreeMenuConfig(),
      NavMenu: getNavMenuConfig(),
      Pagination: getPaginationConfig(),
      Layout: getLayoutConfig(),
      Header: getHeaderConfig(),
      Footer: getFooterConfig(),
      Side: getSideConfig(),
      Notification: getNotificationConfig(),
      Message: getMessageConfig(),
      MessageBox: getMessageBoxConfig(),
      Empty: getEmptyConfig(),
      Skeleton: getSkeletonConfig(),
      Result: getResultConfig(),
      Avatar: getAvatarConfig(),
      Link: getLinkConfig(),
      Spin: getSpinConfig(),
      Watermark: getWatermarkConfig(),
      Transfer: getTransferConfig(),
      TreeSelect: getTreeSelectConfig(),
      VirtualTree: getVirtualTreeConfig(),
      ColorPicker: getColorPickerConfig(),
      RichTextEditor: getRichTextEditorConfig(),
      Popconfirm: getPopconfirmConfig(),
      FilterPanel: getFilterPanelConfig(),
      MonthTable: getMonthTableConfig(),
      YearTable: getYearTableConfig(),
      CardGroup: getCardGroupConfig(),
      Card: getCardConfig(),
      CardTemplate: getCardTemplateConfig(),
      TimeRange: getTimeRangeConfig(),
      TimeSelect: getTimeSelectConfig(),
      FormItem: getFormItemConfig(),
      OptionGroup: getOptionGroupConfig(),
      Flowchart: getFlowchartConfig(),
      MindMap: getMindMapConfig(),
      QueryBuilder: getQueryBuilderConfig(),
      ImageViewer: getImageViewerConfig(),
      Dropdown: getDropdownConfig(),
      DropdownItem: getDropdownItemConfig(),
      DropdownMenu: getDropdownMenuConfig(),
      DatePanel: getDatePanelConfig(),
      DateTable: getDateTableConfig(),
      TimePanel: getTimePanelConfig(),
      TimeSpinner: getTimeSpinnerConfig(),
      RichText: getRichTextConfig(),
      ScrollText: getScrollTextConfig(),
      SelectDropdown: getSelectDropdownConfig(),
      DynamicScroller: getDynamicScrollerConfig(),
      RecycleScroller: getRecycleScrollerConfig(),
      VirtualScrollBox: getVirtualScrollBoxConfig(),
      ScrollBar: getScrollBarConfig(),
      Statistic: getStatisticConfig(),
      Space: getSpaceConfig(),
      Split: getSplitConfig(),
      Sticky: getStickyConfig(),
      CheckboxButton: getCheckboxButtonConfig(),
      CheckboxGroup: getCheckboxGroupConfig(),
      ColorSelectPanel: getColorSelectPanelConfig(),
      Company: getCompanyConfig(),
      Country: getCountryConfig(),
      Crop: getCropConfig(),
      Currency: getCurrencyConfig(),
      Dept: getDeptConfig(),
      DialogSelect: getDialogSelectConfig(),
      DropRoles: getDropRolesConfig(),
      DropTimes: getDropTimesConfig(),
      Espace: getEspaceConfig(),
      Exception: getExceptionConfig(),
      FallMenu: getFallMenuConfig(),
      FloatButton: getFloatButtonConfig(),
      Floatbar: getFloatbarConfig(),
      FluentEditor: getFluentEditorConfig(),
      Fullscreen: getFullscreenConfig(),
      GridSelect: getGridSelectConfig(),
      Guide: getGuideConfig(),
      Hrapprover: getHrapproverConfig(),
      InfiniteScroll: getInfiniteScrollConfig(),
      IpAddress: getIpAddressConfig(),
      LinkMenu: getLinkMenuConfig(),
      Locales: getLocalesConfig(),
      LogonUser: getLogonUserConfig(),
      Logout: getLogoutConfig(),
      Milestone: getMilestoneConfig(),
      Notify: getNotifyConfig(),
      NumberAnimation: getNumberAnimationConfig(),
      Numeric: getNumericConfig(),
      PopUpload: getPopUploadConfig(),
      Popeditor: getPopeditorConfig(),
      QrCode: getQrCodeConfig(),
      Roles: getRolesConfig(),
      SelectWrapper: getSelectWrapperConfig(),
      TagGroup: getTagGroupConfig(),
      TextPopup: getTextPopupConfig(),
      TimeLine: getTimeLineConfig(),
      ToggleMenu: getToggleMenuConfig(),
      User: getUserConfig(),
      UserAccount: getUserAccountConfig(),
      UserContact: getUserContactConfig(),
      UserHead: getUserHeadConfig(),
      UserLink: getUserLinkConfig(),
      Wizard: getWizardConfig()
    }
  }
}

export { zhCN, enUS }
