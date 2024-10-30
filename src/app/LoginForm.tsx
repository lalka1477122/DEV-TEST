"use client"
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signIn } from "next-auth/react";
import styled from '@emotion/styled';

// Определяем схему валидации
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Неверный адрес электронной почты').required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
});




// Стилизация формы
const FormContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const StyledField = styled(Field)`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export function LoginForm() {
  const handleSubmit = async (data: { email: string; password: string }) => {
    //  отправика данных на сервер
    console.log('Отправка данных:', data);
    
    // Пример отправки данных на сервер
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    
    // const result = await response.json();
    // console.log('Результат:', result);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit} // Используем функцию handleSubmit
    >
      {() => (
        <FormContainer>
          <StyledField className="email" name="email" placeholder="Email" />
          <ErrorMessageStyled name="email" component="div" />
          <StyledField name="password" type="password" placeholder="Password" />
          <ErrorMessageStyled name="password" component="div" />
          <SubmitButton type="submit">Log In</SubmitButton>
        </FormContainer>
      )}
    </Formik>
  );
}