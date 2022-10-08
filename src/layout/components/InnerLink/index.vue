<script>
export default {
  setup() {
    const route = useRoute();
    const { link } = route.meta;
    if (link === '') {
      return '404';
    }
    const url = link;
    const height = `${document.documentElement.clientHeight - 94.5}px`;
    const style = { height };

    // 返回渲染函数
    return () => h(
      'div',
      {
        style,
      },
      h('iframe', {
        src: url,
        frameborder: 'no',
        width: '100%',
        height: '100%',
        scrolling: 'auto',
      }),
    );
  },
};
</script>
