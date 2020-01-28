import React, { useState } from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import { Form, Input, InputNumber, Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';

import FormItem from '../FormItem';

import ADD_USER from '../../schema/ADD_USER';

const FormComponent = () => {
  const [addTodo] = useMutation(ADD_USER);

  const onSubmit = async (values:Object) => {
    setBtnLoading(true);
    await addTodo({ variables: {...values} });
    setBtnLoading(false);
  }

  const { form, handleSubmit, pristine, submitting } = useForm({onSubmit});
  const name = useField('name', form);
  const cep = useField('cep', form);
  const street = useField('street', form);
  const number = useField('number', form);
  const neighborhood = useField('neighborhood', form);
  const city = useField('city', form);
  const uf = useField('uf', form);

  const [btnLoading, setBtnLoading] = useState(false);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <FormItem label="Nome:" placeholder="Nome" field={name} />
      <FormItem label="CEP:" placeholder="CEP" field={cep} />
      
      <Form.Item label="Rua:" required>
        <Input 
          {...street.input}
          placeholder="Rua"
          style={{ display: 'inline-block', width: '70%' }}
          required
        />

        <InputNumber 
          {...number.input} 
          placeholder="Numero"
          min={1} 
          style={{ display: 'inline-block', width: '29%', marginLeft: '1%' }}
          required
        />
      </Form.Item>

      <FormItem label="UF:" placeholder="UF" field={uf} />
      <FormItem label="Cidade:" placeholder="Cidade" field={city} />
      <FormItem label="Bairro:" placeholder="Bairro" field={neighborhood} />

      <Button 
        type="primary" 
        htmlType="submit" 
        disabled={pristine || submitting}
        loading={btnLoading}
      >
        Cadastrar
      </Button>
    </Form>
  );
};

export default FormComponent;