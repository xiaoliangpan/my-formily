
import { isObservable, isAnnotation } from './externals';
import { getObservableMaker } from './internals';
export function define(target, annotations) {
  if (isObservable(target)) {
    return target;
  }
  for (const key in annotations) {
    const annotation = annotations[key];
    //如果annotation是一个合法的注解的话才会进入 
    if (isAnnotation(annotation)) {
      getObservableMaker(annotation)({ target, key });
    }
  }
}