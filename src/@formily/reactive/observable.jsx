
import { createObservable } from './internals';
import * as annotations from './annotations';
import { MakeObservableSymbol } from './environment';
export function observable(target) {
  return createObservable(null, null, target);
}
observable.shallow = annotations.shallow;
observable[MakeObservableSymbol] = annotations.observable;