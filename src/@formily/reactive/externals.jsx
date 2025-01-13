
import { ProxyRaw, MakeObservableSymbol } from './environment';
import { isPlainObject } from './checkers';
export const isObservable = (target) => {
  return ProxyRaw.has(target);
}
export const isAnnotation = (target) => {
  return target && target[MakeObservableSymbol];
}

export const toJS = (values) => {
  const visited = new Set();
  const _toJS = (values) => {
    if (visited.has(values)) {
      return values;
    }
    if (isPlainObject(values)) {
      visited.add(values);
      const result = {};
      for (const key in values) {
        result[key] = _toJS(values[key]);
      }
      return result;
    }
    return values;
  }
  return _toJS(values)
}