
(async function () {
  let { observable, toJS } = await import('@formily/reactive');
  let obj = {
    home: { name: '北京' }
  }
  const proxy = observable(obj);
  console.log(toJS2(proxy));
  function toJS2(values) {
    const visited = new Set();
    const _toJS = (values) => {
      if (visited.has(values)) {
        return values;
      }
      if (typeof values === 'object') {
        visited.add(values);
        const result = {};
        for (const key in values) {
          result[key] = _toJS(values[key]);
        }
        return result;
      }
      //如果是一个普通的基本类型是直接返回
      return values;
    }
    return _toJS(values)
  }
})();