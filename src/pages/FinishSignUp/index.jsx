import React from 'react'
import { Button, Form, Input, Typography } from 'antd'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
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

const SIGN_UP_MUTATION = gql`
  mutation($data: SignUpInput!) {
    signup(data: $data) {
      token
    }
  }
`

const FinishSignUp = () => {
  const [doSignup] = useMutation(SIGN_UP_MUTATION)
  const navigate = useNavigate()

  const [searchParams, _] = useSearchParams()

  const onFinish = ({ name, password }) => {
    const email = searchParams.get("email")

    console.log('signup went', email)
    doSignup({ variables: { data: { email, name, password }}}).then(({ data: { signup: { token } }}) => {
      console.log('signup success', token)
      localStorage.setItem('token', token)
      navigate("/")
    }).catch((e) => {
      console.log('signup failed', e)
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
              <Typography.Title level={2} style={{textAlign: 'center'}}>Зарегистрироваться</Typography.Title>
              <Typography.Title level={5} style={{ color: "#667085", fontWeight: 'normal'}}>Добро пожаловать! Пожалуйста, введите свои данные</Typography.Title>
            </header>
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Имя"
                name="name"
                requiredMark="optional"
                validateTrigger="onBlur"
                rules={[{ required: true, message: "Это обязательное поле"}]}
              >
                <Input size="large" placeholder="Введите своё имя" />
              </Form.Item>

              <Form.Item>
                <Form.Item
                  label="Пароль"
                  name="password"
                  requiredMark="optional"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: "Это обязательное поле"}, { min: 8, message: '' }]}
                >
                  <Input size="large" type="password" placeholder="Создайте надёжный пароль" />
                </Form.Item>

                <Form.Item>
                  <Typography.Text style={{color: "#667085", fontSize: 14, top: -10}}>Должно быть не менее 8 символов.</Typography.Text>
                </Form.Item>

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

export default FinishSignUp