import { Button, Typography } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  position: sticky;
  top: 0;
  background-color:#F8FAFC;
  z-index: 1;
`

const Right = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

const Header = () => {
  const navigate = useNavigate()

  return (
    <Nav>
      <img src="/logo2.png" width="150" alt="" />
      <Right>
      <Typography.Text><Link to="/#about" style={{fontWeight: '500', color: "#1E293B", fontSize: 20,}}>О нас</Link></Typography.Text>
      <Typography.Text><Link to="/project" style={{fontWeight: '500', color: "#1E293B", fontSize: 20,}}>Проекты</Link></Typography.Text>
      <Typography.Text><Link to="/#questions" style={{fontWeight: '500', color: "#1E293B", fontSize: 20,}}>Вопросы</Link></Typography.Text>
      <Typography.Text><Link to="/#contacts" style={{fontWeight: '500', color: "#1E293B", fontSize: 20,}}>Контакты</Link></Typography.Text>
      <Typography.Text><Link to="/login" style={{fontWeight: '500', color: "#1E293B", fontSize: 20,}}>Войти</Link></Typography.Text>
      
      <Button onClick={() => navigate('/signup')} size="large" style={{backgroundColor: '#84CC16', height: 48}}>
        <Typography.Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
          Зарегистрироваться
        </Typography.Text>
      </Button>
      </Right>
    </Nav>
  )
}

export default Header