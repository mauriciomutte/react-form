import React from 'react';
import { Form, Input } from 'antd';

const FormItem = ({ label, placeholder, field }: any) => (
  <Form.Item label={label} required>
    <Input {...field.input}  placeholder={placeholder} required/>
  </Form.Item>
);

export default FormItem;