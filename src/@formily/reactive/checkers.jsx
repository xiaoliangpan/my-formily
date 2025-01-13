const toString = Object.prototype.toString;
export const isPlainObject = (val) => toString.call(val) === '[object Object]';
export const isNormalType = (target) => {
  return isPlainObject(target);
}

export const isFn = (val) => typeof val === 'function';