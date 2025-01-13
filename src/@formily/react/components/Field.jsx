import React from 'react';
import { FieldContext } from '../shared'
import { useForm } from '../hooks';
import { ReactiveField } from './ReactiveField';
export const Field = (props) => {
  const form = useForm(); //获取表单的领域模型
  const field = form.createField(props);//创建字段的领域模型 
  return (
    <FieldContext.Provider value={field}>
      <ReactiveField field={field}>{props.children}</ReactiveField>
    </FieldContext.Provider>
  )
}