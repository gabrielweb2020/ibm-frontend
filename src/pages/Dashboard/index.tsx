/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  MouseEventHandler,
} from 'react';
import { Link } from 'react-router-dom';
import {
  FiPower,
  FiClock,
  FiPenTool,
  FiTrash,
  FiEye,
  FiUser,
  FiBook,
} from 'react-icons/fi';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import logoLight from '../../assets/logo.png';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  HeaderBooks,
  ContentBooks,
  ContentBooksItem,
} from './styles';

interface Books {
  _id: string;
  srn: string;
  title: string;
  description: string;
  author: string;
  stock: number;
}

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    api.get('books').then(response => {
      const booksList = response.data.books.map(book => {
        return {
          ...book,
        };
      });

      setBooks(booksList);
    });
  }, []);

  function handleRemoveBook(id: string) {
    const booksFilter = books.filter(book => book._id !== id);
    api.delete(`/books/${id}`).then(() => setBooks(booksFilter));
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoLight} alt="IBM" />

          <Profile>
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <HeaderBooks>
          <h1>Livros</h1>
          <Link to="/new-book">
            <button type="button">Cadastrar Livro</button>
          </Link>
        </HeaderBooks>

        <ContentBooks>
          {books.length === 0 && (
            <p>Ainda Não Existe Nenhum Livro Cadastrado!</p>
          )}

          {books.map(book => (
            <ContentBooksItem key={book._id}>
              <h1>{book.title}</h1>
              <div>
                <FiUser /> <span>Autor: {book.author}</span>
                <FiBook /> <span>Estoque: {book.stock}</span>
              </div>
              <div>
                <Link to={`/edit-book/${book._id}`}>
                  <button type="button">
                    <FiPenTool />
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={() => handleRemoveBook(book._id)}
                >
                  <FiTrash />
                </button>
                <Link to={`/view-book/${book._id}`}>
                  <button type="button">
                    <FiEye />
                  </button>
                </Link>
              </div>
            </ContentBooksItem>
          ))}
        </ContentBooks>
      </Content>
    </Container>
  );
};

export default Dashboard;
