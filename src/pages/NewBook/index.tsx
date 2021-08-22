import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import { useHistory, Link } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoLight from '../../assets/logo.png';

import { Container, Content } from './styles';

interface IBookData {
  id: string;
  srn: string;
  title: string;
  description: string;
  author: string;
  stock: number;
}

const NewBook: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: IBookData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          srn: Yup.string().required('SRN Obrigatório'),
          title: Yup.string().required('Título Obrigatório'),
          description: Yup.string().required('Descrição Obrigatória'),
          author: Yup.string().required('Descrição Obrigatória'),
          stock: Yup.string().required('Estoque Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { srn, title, description, author, stock } = data;

        api
          .post('/books', {
            srn,
            title,
            description,
            author,
            stock,
          })
          .then(() => history.push('/dashboard'));

        addToast({
          type: 'success',
          title: 'Livro Cadastrado!',
          description: 'As informações do livro foram cadastradas com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao Cadastrar',
          description: 'Ocorreu um erro ao cadastrar o livro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <header>
        <div>
          <div className="arrow">
            <Link to="/dashboard">
              <FiArrowLeft />
            </Link>
          </div>

          <div className="logo">
            <img src={logoLight} alt="IBM" />
          </div>
        </div>
      </header>

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastrar Livro</h1>

          <section>
            <Input type="text" name="srn" placeholder="SRN do Livro" />
            <Input type="text" name="title" placeholder="Título do Livro" />
            <Input name="description" placeholder="Descrição do Livro" />
            <Input name="author" placeholder="Nome do Autor" />
            <Input type="number" name="stock" placeholder="Estoque" />
          </section>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewBook;
