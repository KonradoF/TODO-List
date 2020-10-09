enum Screens {
  TAB_NAV = 'TAB_NAV',
  CURRENT_LISTS = 'CURRENT_LISTS',
  ARCHIVED_LISTS = 'ARCHIVED_LISTS',
  LIST_DETAILS = 'LIST_DETAILS',
}
export default Screens;
export type ScreensType = keyof typeof Screens;
