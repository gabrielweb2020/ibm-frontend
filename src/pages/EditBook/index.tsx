import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, Link, useParams } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoLight from '../../assets/logo.png';

import { Container, Content } from './styles';

interface IBookData {
  id: string;
  title: string;
  description: string;
  author: string;
  stock: number;
}

const EditBook: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [author, setAuthor] = useState();
  const [stock, setStock] = useState();

  const handleSubmit = useCallback(
    async (data: IBookData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Título Obrigatório'),
          description: Yup.string().required('Descrição Obrigatória'),
          author: Yup.string().required('Descrição Obrigatória'),
          stock: Yup.string().required('Estoque Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        api.put(`/books/${id}`, data).then(() => history.push('/dashboard'));

        addToast({
          type: 'success',
          title: 'Livro Atualizado!',
          description: 'As informações do livro foram atualizadas com sucesso!',
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
          description: 'Ocorreu um erro ao atualizar o livro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  useEffect(() => {
    api.get(`/books/${id}`).then(response => {
      setTitle(response.data.book.title);
      setDescription(response.data.book.description);
      setAuthor(response.data.book.author);
      setStock(response.data.book.stock);
    });
  }, []);

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
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          id={id ? Number.parseInt(id, 10) : null}
        >
          <h1>Atualizar Livro</h1>

          <section>
            <Input
              type="text"
              name="title"
              placeholder="Título do Livro"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            <Input
              name="description"
              placeholder="Descrição do Livro"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
            <Input
              name="author"
              placeholder="Nome do Autor"
              onChange={e => setAuthor(e.target.value)}
              value={author}
            />
            <Input
              type="number"
              name="stock"
              placeholder="Estoque"
              onChange={e => setStock(e.target.value)}
              value={stock}
            />
          </section>

          <Button type="submit">Atualizar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default EditBook;
