function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function install (Vue) {
  Vue.prototype.$capitalize = capitalize
}
