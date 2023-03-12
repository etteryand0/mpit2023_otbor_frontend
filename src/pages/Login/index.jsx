import React, { useEffect, useState } from 'react'
import { Button, Alert, Form, Input, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { gql, useMutation } from '@apollo/client'

const Main = styled.main`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 828px) {
    width: 100%;
  }
`

const Img = styled.img`
  height: 100vh;
  object-fit: contain;
  overflow: hidden;

  
  @media (max-width: 828px) {
    display: none;
  }
`

const LOGIN_MUTATION  = gql`
  mutation($data: SignInInput!) {
    login(data: $data) {
      token
    }
  }
`

const Login = () => {
  const [doLogin] = useMutation(LOGIN_MUTATION)
  const navigate = useNavigate()
  const [alertOpen, setAlertOpen] = useState(false)

  const onFinish = ({ email, password }) => {
    doLogin({variables: { data: {email, password}}}).then(({ data: { login: { token }}}) => {
      console.log('login success', token)
      localStorage.setItem('token', token)
      navigate("/")
    }).catch((e) => {
      console.log(e)
      setAlertOpen(true)
    })
  }

  useEffect(() => {
    if (alertOpen) {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setAlertOpen(false)
      }, 1800)

      return () => {
        clearTimeout(timeId)
      }
    }
  }, [alertOpen])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', position: 'relative', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 32, left: 32 }}>
        <img src="/full_logo.png" width="150" />
      </div>
      <div style={{ flexGrow: 1, justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
        {/* <Header /> */}
        <Main>
          <div style={{ width: 360, maxWidth: '90%' }}>
            <header style={{marginBottom: 30,}}>
              <div style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
                <img src="/logo.svg" alt="" />
              </div>
              <Typography.Title level={2} style={{textAlign: 'center'}}>Войдите в свой аккаунт</Typography.Title>
              <Typography.Title level={5} style={{textAlign: 'center', color: "#667085", fontWeight: 'normal'}}>Добро пожаловать! Пожалуйста, введите свои данные</Typography.Title>
            </header>
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Email"
                name="email"
                requiredMark="optional"
                validateTrigger="onBlur"
                rules={[{ required: true, message: "Это обязательное поле"}, { message: "Введите корректную почту", pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ }]}
              >
                <Input size="large" type="email" placeholder="Введите свою почту" />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                requiredMark="optional"
                validateTrigger="onBlur"
                rules={[{ required: true, message: "Это обязательное поле"}, { min: 8, message: "Пароль должен быть не менее 8 символов" }]}
              >
                <Input style={{marginBottom: 5}} size="large" type="password" placeholder="Создайте надёжный пароль" />
              </Form.Item>

              <Form.Item>
                <Button style={{display: 'block', width: '100%' }} size="large" type="primary" htmlType="submit">Дальше</Button>
              </Form.Item>
              {alertOpen ? <Alert type="error" message="Неправильная почта или пароль" /> : null }

              <Typography.Text style={{color: '#667085', textAlign: 'center', display: 'block'}}>У вас нет аккаунта? {' '}
              <Link to="/signup" style={{fontWeight: '600'}}>Зарегистрироваться</Link>
              </Typography.Text>
            </Form>
          </div>
        </Main>
      </div>
      <Img src="/signup_intro.jpg" alt=""  />
    </div>
  )
}

export default Login