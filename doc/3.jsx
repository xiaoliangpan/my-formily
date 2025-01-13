import { createForm } from '@/@formily/core';
const form = createForm({
  values: {
    username: 'zhufeng'
  }
});
console.log(form);
const field = form.createField({
  name: 'username',
  title: '用户名',
  value: 'jiagou'
});
console.log(field);