
import { createAnnotation, createObservable } from '../internals';
import { bindTargetKeyWithCurrentReaction, runReactionsFromTargetKey } from '../reaction';
export const shallow = createAnnotation(
  ({ target, key, value }) => {
    //先把target对象的key属性变成可观察对象并存在store.value属性上
    const store = {
      value: createObservable(target, key, target[key], true)
    }
    function get() {
      bindTargetKeyWithCurrentReaction({ target, key });
      return store.value;
    }
    function set(value) {
      value = createObservable(target, key, value, true);
      store.value = value;
      runReactionsFromTargetKey({ target, key });
    }
    Object.defineProperty(target, key, {
      get, set, enumerable: true, configurable: false
    });
    return store.value;
  }
);