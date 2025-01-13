//普通对象=>代理对象
export const RawProxy = new WeakMap();
//代理对象=>普通对象
export const ProxyRaw = new WeakMap();
export const RawShallowProxy = new WeakMap();
export const ReactionStack = [];
export const RawReactionsMap = new WeakMap();
export const MakeObservableSymbol = Symbol('MakeObservableSymbol');