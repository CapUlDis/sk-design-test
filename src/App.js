import Header from './components/Header/Header';
import Form  from './components/Form/Form';
import styled from 'styled-components';
import './fonts/font.css';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 1440px;
  height: 586px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Article = styled.div`
  width: calc(100% - 440px);
  padding-right: 60px;
`;

const Paragraph = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #353238;
`;


const App = () => {

  return (
    <Container>
      <Content>
        <Article>
          <Header>
            Оставьте заявку и станьте частью нашей команды
          </Header>
          <Paragraph>
            Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
          </Paragraph>
          <Paragraph>
            Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.
          </Paragraph>
          <Paragraph>
            Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему проекту или изображениям.
          </Paragraph>
        </Article>
        <Form></Form>
      </Content>
    </Container>
  );
}

export default App;
