import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './formSlice';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';
import Input from './components/Input';
import Select from './components/Select';
import arrow from './components/img/select_arrow.png';
import cities from './cities.json';
import sources from './sources.json';


const StyledForm = styled.form`
  width: 380px;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);

  transition: height 0.7s;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;

  & > * {
    flex: 1 1 139px;
  }

  & > *:nth-last-child(-n + 4) {
    flex-basis: 100%;
  }
`;

const AnotherFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  row-gap: 20px;
`;


const SubmitButton = styled.button`
  height: 50px;
  background: #E3E3E3;
  border: 0;
  border-radius: 8px;
  width: 380px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #828282;
  padding: 0 2px;
  bottom: 20px;
`;

const CollapsibleTitle = ({ arrowRotate = false, ...props }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <p style={{ margin: '2px 0' }}>
      {props.children}
    </p>
    <img src={arrow} alt="^" width={12} height={8} style={{ marginLeft: '8px', transform: arrowRotate ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
  </div>
);

const Form = () => {
  const [formHeight, setFormHeight] = useState('386px');
  const name = useSelector((state) => state.form.name);
  const dispatch = useDispatch();

  const SubmitHandle = () => {
    console.log(name);
  }

  return (
    <StyledForm id="request" style={{ height: formHeight }}
      // onSubmit={}
    >
      <FlexContainer>
        <Input type="text" 
          title="Ваше имя *" 
          name="name"
          placeholder="Иван"
          form="request"
          required
          maxLength="20"
          value={name}
          onChange={e => dispatch(changeName(e.target.value))}
        />
        <Input type="tel" 
          name="tel"
          title="Номер телефона *" 
          placeholder="+7 (000) 000-00-00"
          form="request"
          pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
          required
          maxLength="12"
        />
        <Input type="email" 
          name='email'
          title="E-mail *" 
          placeholder="example@skdesign.ru"
          form="request"
          required
          maxLength="20"
        />
        <Input type="text" 
          name='link'
          title="Ссылка на профиль *" 
          placeholder="instagram.com/skde…"
          form="request"
          required
          maxLength="30"
        />
        <Select title="Выберите город *" name="city" required>
          {cities.map(item => (
            <option value={item.id}>{item.name}</option>
          ))}
        </Select>
        <Input type="text" 
          name="studio"
          title="Название организации/студии" 
          placeholder="SK Design"
          form="request"
          required
          maxLength="50"
        />
        <Collapsible 
          trigger={<CollapsibleTitle>Показать дополнительные поля</CollapsibleTitle>}
          triggerWhenOpen={<CollapsibleTitle arrowRotate={true}>Скрыть дополнительные поля</CollapsibleTitle>}
          onOpening={() => setFormHeight('531px')}
          onClosing={() => setFormHeight('386px')}
        >
          <AnotherFlexContainer>
            <Input type="text" 
              name="recipient"
              title="Получатель" 
              placeholder="ФИО"
              form="request"
              maxLength="50"
            />
            <Select title="От куда узнали про нас?"
              name="source"
              form="request"
            >
              {sources.map(item => (
                <option value={item}>{item}</option>
              ))}
            </Select>
          </AnotherFlexContainer>
        </Collapsible>
        <SubmitButton type="submit" form="request">Отправить заявку</SubmitButton>
      </FlexContainer>
      
      
    </StyledForm>
  );
}


export default Form;