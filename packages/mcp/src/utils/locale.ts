import zhCN from '../lang/zh-CN'

export const i18n: { t: ((path: string) => string) | null } = {
  t: null
}

export const t = (path: string): string => {
  if (i18n.t) {
    return i18n.t(path)
  }
  const array = path.split('.')
  let value = ''
  let current: any = zhCN

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]

    value = current[property] || ''
    current = value
  }
  return value
}
