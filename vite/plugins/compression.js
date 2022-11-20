import compression from 'vite-plugin-compression';

// 根据env.production或其他环境的配置文件中的VITE_BUILD_COMPRESS参数 来设定使用哪种压缩方式
export default function createCompression(env) {
  const { VITE_BUILD_COMPRESS } = env;
  const plugin = [];
  if (VITE_BUILD_COMPRESS) {
    const compressList = VITE_BUILD_COMPRESS.split(',');
    if (compressList.includes('gzip')) {
      // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
      plugin.push(
        compression({
          ext: '.gz',
          deleteOriginFile: false,
        }),
      );
    }
    if (compressList.includes('brotli')) {
      plugin.push(
        compression({
          ext: '.br',
          algorithm: 'brotliCompress',
          deleteOriginFile: false,
        }),
      );
    }
  }
  return plugin;
}
