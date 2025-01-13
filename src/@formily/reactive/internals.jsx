import { isNormalType, isFn } from './checkers';
import { RawProxy, ProxyRaw, MakeObservableSymbol, RawShallowProxy } from './environment';
import { baseHandler } from './handlers';
export const createObservable = (target, key, value, shallow) => {
  //如果value不是对象，直接返回
  if (typeof value !== 'object') return value;
  const raw = ProxyRaw.get(value);
  //如果能找到对应的原生对象，说明此原生对象已经创建过代理对象了
  if (raw) {
    return value;//说明它本身就是一个代理对象，可以直接返回
  }
  if (target) {
    const parentRaw = ProxyRaw.get(target) || target;
    //获取此父原生对象的浅劫持代理对象
    const isShallowParent = RawShallowProxy.get(parentRaw);
    //如果父亲的代理对象是一个浅劫持的话，直接返回原始value
    if (isShallowParent) return value;
  }
  //如果value是个普通的对象话就可以创建响应式对象
  if (shallow) {
    return createShallowProxy(value);
  }
  if (isNormalType(value)) {
    return createNormalProxy(value);
  }
  return value;
}
const createShallowProxy = (target) => {
  if (isNormalType(target)) {
    return createNormalProxy(target, true);
  }
}
const createNormalProxy = (target, shallow) => {
  const proxy = new Proxy(target, baseHandler);
  ProxyRaw.set(proxy, target);
  if (shallow) {
    RawShallowProxy.set(target, proxy);
  } else {
    RawProxy.set(target, proxy);
  }
  return proxy;
}

export const createAnnotation = (maker) => {
  const annotation = () => { }
  if (isFn(maker)) {
    annotation[MakeObservableSymbol] = maker
  }
  return annotation;
}
export const getObservableMaker = (target) => {
  if (target[MakeObservableSymbol]) {
    if (!target[MakeObservableSymbol][MakeObservableSymbol]) {
      return target[MakeObservableSymbol];
    }
    return target[MakeObservableSymbol][MakeObservableSymbol];
  }
  //return annotation[MakeObservableSymbol];
}