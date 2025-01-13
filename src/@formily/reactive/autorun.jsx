import { ReactionStack } from './environment';
export function autorun(tracker) {
  //reaction本质上是一个函数，当它观察到的对象和属性发生变化，此函数会重新执行
  const reaction = () => {
    ReactionStack.push(reaction);
    tracker();
    ReactionStack.pop();
  }
  reaction();
}