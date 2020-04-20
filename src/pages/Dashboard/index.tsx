import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repostórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/380327?s=400&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4"
            alt="Thiago"
          />
          <div>
            <strong>tgmarinho/bootcamp</strong>
            <p>desciprtion of project on github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/380327?s=400&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4"
            alt="Thiago"
          />
          <div>
            <strong>tgmarinho/bootcamp</strong>
            <p>desciprtion of project on github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/380327?s=400&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4"
            alt="Thiago"
          />
          <div>
            <strong>tgmarinho/bootcamp</strong>
            <p>desciprtion of project on github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/380327?s=400&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4"
            alt="Thiago"
          />
          <div>
            <strong>tgmarinho/bootcamp</strong>
            <p>desciprtion of project on github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/380327?s=400&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4"
            alt="Thiago"
          />
          <div>
            <strong>tgmarinho/bootcamp</strong>
            <p>desciprtion of project on github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/380327?s=400&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4"
            alt="Thiago"
          />
          <div>
            <strong>tgmarinho/bootcamp</strong>
            <p>desciprtion of project on github</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
