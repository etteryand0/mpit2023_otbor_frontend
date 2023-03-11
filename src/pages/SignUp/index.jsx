import React, { useRef } from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header'

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

const SignUp = () => {
  const navigate = useNavigate()

  const onFinish = ({ email }) => {

    navigate({
      pathname: '/signup/finish',
      search: `?email=${email}`
    })
  }

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
              <Typography.Title level={2} style={{textAlign: 'center'}}>Создать аккаунт</Typography.Title>
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

              <Form.Item>
                <Button style={{display: 'block', width: '100%' }} size="large" type="primary" htmlType="submit">Дальше</Button>
              </Form.Item>


              <Typography.Text style={{color: '#667085', textAlign: 'center', display: 'block'}}>Уже есть аккаунт? {' '}
              <Link to="/login" style={{fontWeight: '600'}}>Войти</Link>
              </Typography.Text>
            </Form>
          </div>
        </Main>
      </div>
      <Img src="/signup_intro.jpg" alt=""  />
    </div>
  )
}

export default SignUp