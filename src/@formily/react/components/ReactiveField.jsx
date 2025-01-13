import React from 'react';
import { observer } from '@/@formily/reactive-react';
const ReactiveInternal = (props) => {
  const field = props.field;
  const renderDecorator = (children) => {
    return React.createElement(field.decoratorType, {}, children);
  }
  const renderComponent = () => {
    const value = field.value;
    const onChange = (event) => {
      field.onInput(event);
    }
    return React.createElement(field.componentType, { value, onChange });
  }
  return renderDecorator(renderComponent());
}
export const ReactiveField = observer(ReactiveInternal);