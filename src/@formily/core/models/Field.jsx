import { define, observable } from "@/@formily/reactive";
export class Field {
  constructor(address, props, form) {
    this.props = props;
    this.form = form;
    this.locate(address);
    this.initialize();
    this.makeObservable();
  }
  initialize() {
    this.value = this.props.value
    this.decorator = this.props.decorator
    this.component = this.props.component
  }
  makeObservable() {
    define(this, {
      value: observable
    });
  }
  locate(address) {
    this.form.fields[address.entire] = this;
    this.path = address;
  }
  get decorator() {
    return [this.decoratorType];
  }
  set decorator(value) {
    this.decoratorType = value[0]
  }
  get component() {
    return [this.componentType];
  }
  set component(value) {
    this.componentType = value[0]
  }
  get value() {
    return this.form.getValuesIn(this.path);
  }
  set value(value) {
    this.form.setValuesIn(this.path, value);
  }
  onInput = (event) => {
    const newValue = event.target.value;
    this.value = newValue;
    //this.form.values.username = '新的输入框的值'
    this.form.values[this.path.entire] = newValue;
  }
}