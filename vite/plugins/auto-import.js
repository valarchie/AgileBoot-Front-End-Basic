import autoImport from 'unplugin-auto-import/vite';

// 自动导入插件
// 配置完成之后使用ref reactive watch 等无须import 导入 ，可以直接使用
export default function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      {
        vuex: ['useStore'],
      },
    ],
    // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
    dts: false,
  });
}
