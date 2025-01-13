import { connect, mapProps } from '@/@formily/react';
const BaseItem = ({ children, label }) => {
  return (
    <div>
      <span>{label}</span>
      {children}
    </div>
  )
}
export const FormItem = connect(BaseItem,
  mapProps((props, field) => {
    return { ...props, label: field.props.title };
  }));
export default FormItem;