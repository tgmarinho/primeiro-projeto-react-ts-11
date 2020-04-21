import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="Repo" />

          <div>
            <strong>sdadsadad</strong>
            <p>alaa</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1900</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>19</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>100</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="adssada">
          <div>
            <strong>asdhsadasd</strong>
            <p>asdsadsad</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
