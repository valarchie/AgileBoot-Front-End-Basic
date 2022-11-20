import store from '@/store';
import defaultSettings from '@/config/defaultSettings';

/**
 * 动态修改标题
 */
export function useDynamicTitle() {
  if (store.state.settings.dynamicTitle) {
    document.title = `${store.state.settings.title} - ${defaultSettings.title}`;
  } else {
    document.title = defaultSettings.title;
  }
}
