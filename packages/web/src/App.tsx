import React from 'react';
import { useForm, useField } from 'react-final-form-hooks';
import { Form, Input, InputNumber, Button } from 'antd';
import './App.css';

const onSubmit = (values:Object) => console.log(values);

const App = () => {
  const { form, handleSubmit, pristine, submitting } = useForm({onSubmit});
  const nome = useField('nome', form);
  const cep = useField('cep', form);
  const rua = useField('rua', form);
  const numero = useField('numero', form);
  const uf = useField('uf', form);
  const cidade = useField('cidade', form);
  const bairro = useField('bairro', form);

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
      <Form.Item label="Nome:" required>
        <Input {...nome.input} placeholder="Nome" required/>
      </Form.Item>

      <Form.Item label="CEP:" required>
        <Input {...cep.input} placeholder="CEP" required/>
      </Form.Item>

      <Form.Item label="Rua:" required>
        <Input 
          {...rua.input}
          placeholder="Rua"
          style={{ display: 'inline-block', width: '70%' }}
          required
        />

        <InputNumber 
          {...numero.input} 
          placeholder="Numero"
          min={1} 
          style={{ display: 'inline-block', width: '29%', marginLeft: '1%' }}
          required
        />

      </Form.Item>

      <Form.Item label="UF:" required>
        <Input {...uf.input} placeholder="UF" required/>
      </Form.Item>

      <Form.Item label="Cidade:" required>
        <Input {...cidade.input} placeholder="Cidade" required/>
      </Form.Item>

      <Form.Item label="Bairro:" required>
        <Input {...bairro.input} placeholder="Bairro" required/>
      </Form.Item>

      <Button type="primary" htmlType="submit" disabled={pristine || submitting}>Cadastrar</Button>
    </Form>
  );
}

export default App;