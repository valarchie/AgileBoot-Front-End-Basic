import vue from '@vitejs/plugin-vue';

import createAutoImport from './auto-import';
import createSvgIcon from './svg-icon';
import createCompression from './compression';
import createSetupExtend from './setup-extend';

// 加载插件入口
export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(createSvgIcon(isBuild));
  isBuild && vitePlugins.push(...createCompression(viteEnv));
  return vitePlugins;
}
