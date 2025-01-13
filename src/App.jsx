import { createForm } from '@/@formily/core';
import { FormProvider, Field } from '@/@formily/react';
import { FormItem, Input } from '@/@formily/antd';
import 'antd/dist/antd.css'
const form = createForm();
const App = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="username"
        title="用户名"
        value="vilin"
        decorator={[FormItem]}
        component={[Input]}
      />
      <button onClick={() => {
        form.submit(console.log);
      }}>提交</button>
    </FormProvider>
  )
}
//表单的生命周期和联动，表单 的校验
export default App;