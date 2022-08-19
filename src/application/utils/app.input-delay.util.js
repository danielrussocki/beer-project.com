import { debounce } from 'lodash'

export function AppRegularInputDelay (handler, ms = 1200) {
  return debounce(handler, ms)
}
