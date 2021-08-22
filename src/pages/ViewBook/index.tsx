import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiBook, FiTag, FiUser } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/api';

import logoLight from '../../assets/logo.png';

import { Container, Content } from './styles';

const ViewBook: React.FC = () => {
  const { id } = useParams();
  const [srn, setSrn] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [author, setAuthor] = useState();
  const [stock, setStock] = useState();

  useEffect(() => {
    api.get(`/books/${id}`).then(response => {
      setSrn(response.data.book.srn);
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
        <h1>{title}</h1>
        <span>
          <FiTag /> <p>SRN: {srn}</p>
          <FiUser /> <p>Autor: {author}</p>
          <FiBook /> <p>Estoque: {stock}</p>
        </span>
        <section>
          <p>{description}</p>
        </section>
      </Content>
    </Container>
  );
};

export default ViewBook;
