import { isObservable } from './externals';
import { RawProxy } from './environment'
import { createObservable } from './internals';
import { bindTargetKeyWithCurrentReaction, runReactionsFromTargetKey } from './reaction';
export const baseHandler = {
  get(target, key) {
    const result = target[key];//Reflect.get(target,key);
    bindTargetKeyWithCurrentReaction({ target, key });
    //如果此原生对象已经创建过代理对象了，直接返回
    const observableResult = RawProxy.get(result);
    if (observableResult) {
      return observableResult;
    }
    //如果这个结果不是一个可观察对象，就返回它对应的可观察对象
    if (!isObservable(result)) {
      return createObservable(target, key, result);
    }
    return result;
  },
  set(target, key, value) {
    const newValue = createObservable(target, key, value);
    target[key] = newValue;
    runReactionsFromTargetKey({ target, key });
    return true;
  }
}