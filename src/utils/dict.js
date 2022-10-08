import { getDictType } from '@/api/system/config';
import store from '../store';
/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((d, index) => {
      res.value[d] = [];
      const dictTypes = store.getters && store.getters.dictTypes;

      if(dictTypes[d]) {
        res.value[d] = dictTypes[d].map((p) => ({ label: p.label, value: p.value, elTagType: p.cssTag }));
      } else {
        getDictType(d).then((resp) => {
          res.value[d] = resp.map((p) => ({ label: p.label, value: p.value, elTagType: p.cssTag }));
        });
      }
     
    });
    return toRefs(res.value);
  })();
}
