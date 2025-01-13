import React from 'react';
import { observer } from '@/@formily/reactive-react';
import { useField } from '../hooks';

export function mapProps(...propMappers) {
  return (Target) => {
    return observer((props) => {
      const field = useField();
      const result = propMappers.reduce((props, propMapper) => {
        return Object.assign(props, propMapper(props, field));
      }, { ...props })
      //return <Target {...result} />
      return React.createElement(Target, result)
    });
  }
}

export function connect(target, ...enhanceTargets) {
  const Target = enhanceTargets.reduce((target, enhanceTarget) => {
    return enhanceTarget(target);
  }, target);
  return (props) => {
    //return <Target {...props} />
    return React.createElement(Target, { ...props });
  }
}