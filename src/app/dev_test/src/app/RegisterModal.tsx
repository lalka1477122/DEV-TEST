// components/RegisterModal.tsx
"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

// Интерфейс для полей формы
interface IFormInput {
  username: string;
  email: string;
  password: string;
}

// Схема валидации с использованием yup
const schema = yup.object().shape({
  username: yup.string().required('Имя пользователя обязательно'),
  email: yup.string().email('Неверный формат электронной почты').required('Электронная почта обязательна'),
  password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен'),
});

const RegisterModal: React.FC = () => {
  // Для управления модальным окном
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Инициализация useForm с yup для валидации
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  // Обработчик отправки формы
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      console.log('Форма отправлена:', data);
      // Здесь можно добавить логику для отправки данных на сервер
      onClose(); // Закрытие модального окна после успешной отправки
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (
    <>
      {/* Кнопка для открытия модального окна */}
      <Button colorScheme="teal" onClick={onOpen}>
        Регистрация
      </Button>

      {/* Модальное окно */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Регистрация</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={4}>
                {/* Поле для имени пользователя */}
                <FormControl isInvalid={!!errors.username}>
                  <FormLabel>Имя пользователя</FormLabel>
                  <Input type="text" placeholder="Введите имя пользователя" {...register('username')} />
                  <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
                </FormControl>

                {/* Поле для электронной почты */}
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>Электронная почта</FormLabel>
                  <Input type="email" placeholder="Введите электронную почту" {...register('email')} />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>

                {/* Поле для пароля */}
                <FormControl isInvalid={!!errors.password}>
                  <FormLabel>Пароль</FormLabel>
                  <Input type="password" placeholder="Введите пароль" {...register('password')} />
                  <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                </FormControl>
              </VStack>
            </form>
          </ModalBody>

          <ModalFooter>
            {/* Кнопка отправки формы */}
            <Button
              colorScheme="teal"
              mr={3}
              onClick={handleSubmit(onSubmit)}
              isLoading={isSubmitting}
            >
              Зарегистрироваться
            </Button>
            <Button variant="ghost" onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
