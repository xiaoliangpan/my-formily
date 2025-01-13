
import { ReactionStack } from './environment';
export class Tracker {
  constructor(scheduler) {
    this.track.scheduler = scheduler;
  }
  track = (view) => {
    ReactionStack.push(this.track);
    const result = view();
    ReactionStack.pop();
    return result;
  }
}