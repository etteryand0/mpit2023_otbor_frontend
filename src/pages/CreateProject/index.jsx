import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Typography } from 'antd'
import styled from 'styled-components'
import NumericInput from '../../components/NumericInput'
import { gql, useMutation } from '@apollo/client'

const Container = styled.div`
  background-color: #F8FAFC;
  min-height: 100vh;
`

const Main = styled.main`
  padding-top: 95px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 33px;
`

const Section = styled.section`
  width: 800px;
  border-radius: 16px;
  background-color: #fff;
  border: 1px #00000026 solid;
  padding: 24px;
  margin-bottom: 24px;
`

const CREATE_ONE_PROJECT = gql`
  mutation addProject ($data: ProjectCreateInput!) {
    createOneProject(data: $data) {
      id
    }
  }
`


const CreateProject = () => {
  const [doCreate] = useMutation(CREATE_ONE_PROJECT)
  const [formsPassed, setFormsPassed] = useState(0)
  const navigate = useNavigate()
  const [osnovForm] = Form.useForm()
  const [kidForm] = Form.useForm()
  const [contentForm] = Form.useForm()

  const onClick = () => {
    setFormsPassed(1)
    osnovForm.submit()
    kidForm.submit()
    contentForm.submit()
  }

  const onFinish = () => {
    setFormsPassed(i => i + 1)
  }

  useEffect(() => {
    console.log(formsPassed)
    if (formsPassed === 4) {
      const {goal, title, short_description} = osnovForm.getFieldsValue()
      const {name, biography, location} = kidForm.getFieldsValue()
      const {content} = contentForm.getFieldsValue

      doCreate({ variables: { data: {
        content,
        dueDate: new Date(),
        goal: parseInt(goal),
        title,
        promo_media: "-",
        short_description,
        kid: { create: {
          name,
          biography,
          location,
          avatar: "-",
        } },
        owner: { connect: { email: "etteryand@gmail.com" }} // replaced at backend
      } }}).then(({ data: { createOneProject: { id } }}) => {
        navigate(`/project/${id}`)
      }).catch((e) => {
        console.error("couldnt create shit ", e)
      })
      setFormsPassed(0)
    }
  }, [formsPassed])
  

  return (
    <Container>
      <img src="/logo2.png" alt="" width="150" style={{marginLeft: 32, marginTop: 10}} />
      <Main>
        <div>
          <img src="/button-left.png" alt="" onClick={() => navigate('/')} width="50" height="50" style={{cursor: 'pointer'}} />
        </div>
        <div>
            <Section>
              <Form form={osnovForm} onFinish={onFinish}>
                <Typography.Title level={3} style={{ color: "#64748B" }}>Основное</Typography.Title>
                <Typography.Title level={5} style={{ color: "#64748B" }}>Добавьте фото или видео</Typography.Title>
                <Typography.Title level={5} style={{ color: "#64748B" }}>Название...</Typography.Title>
                <Form.Item 
                  name="title"
                  requiredMark="optional"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: "Это обязательное поле"}]}
                >
                  <Input size="large" style={{width: 200}} placeholder="Название проекта..." />
                </Form.Item>
                <Typography.Title level={5} style={{ color: "#64748B" }}>Выберите категории</Typography.Title>
                <Typography.Title level={5} style={{ color: "#64748B" }}>Введите общую сумму...</Typography.Title>
                <Form.Item 
                  name="goal"
                  requiredMark="optional"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: "Это обязательное поле"}]}
                >
                  <NumericInput size="large" style={{width: 200}} placeholder="45 000 руб" />
                </Form.Item>
                <Typography.Title level={5} style={{ color: "#64748B" }}>Краткое описание проекта</Typography.Title>
                <Form.Item
                  name="short_description"
                  requiredMark="optional"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: "Это обязательное поле"}]}
                >
                  <Input.TextArea rows={3} />
                </Form.Item>
              </Form>
            </Section>
            {/* 
            <Section>
              <Typography.Title level={5} style={{ color: "#64748B" }}>Цель для этапа</Typography.Title>
              <Form.Item 
                name="goal"
                requiredMark="optional"
                validateTrigger="onBlur"
                rules={[{ required: true, message: "Это обязательное поле"}]}
              >
                <NumericInput size="large" style={{width: 200}} placeholder="45 000 руб" />
              </Form.Item>
              <Typography.Title level={5} style={{ color: "#64748B" }}>Сумма для начала этапа</Typography.Title>
              <Typography.Title level={5} style={{ color: "#64748B" }}>Добавить еще этап</Typography.Title>
            </Section>
          */}
          <Section>
            <Form form={contentForm} onFinish={onFinish}>
              <Typography.Title level={3} style={{ color: "#64748B" }}>Информация</Typography.Title>
              <Form.Item
                name="content"
                requiredMark="optional"
                validateTrigger="onBlur"
                rules={[{ required: true, message: "Это обязательное поле"}]}
              >
                <Input.TextArea rows={8} />
              </Form.Item>
            </Form>
          </Section>
          {/* <Section>
            <Typography.Title level={3} style={{ color: "#64748B" }}>Вознаграждения</Typography.Title>
            <Typography.Title level={5} style={{ color: "#64748B" }}>Изображение</Typography.Title>
            <Typography.Title level={5} style={{ color: "#64748B" }}>Сумма</Typography.Title>
            <Typography.Title level={5} style={{ color: "#64748B" }}>Название</Typography.Title>
            <Typography.Title level={5} style={{ color: "#64748B" }}>Краткое описание</Typography.Title>
            <Typography.Title level={5} style={{ color: "#64748B" }}>Дата доставки</Typography.Title>
            <Typography.Title level={5} style={{ color: "#64748B" }}>Способ доставки</Typography.Title>
          </Section>  */}
            <Section>
              <Form form={kidForm} onFinish={onFinish}>
                <Typography.Title level={3} style={{ color: "#64748B" }}>О ребёнке ( о авторе )</Typography.Title>
                <Typography.Title level={5} style={{ color: "#64748B" }}>ФИО</Typography.Title>
                <Form.Item 
                  name="name"
                  requiredMark="optional"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: "Это обязательное поле"}]}
                >
                  <Input size="large" style={{width: 200}} placeholder="Полное имя" />
                </Form.Item>
                <Typography.Title level={5} style={{ color: "#64748B" }}>О ребёнке и возраст</Typography.Title>
                <Form.Item 
                  name="biography"
                  requiredMark="optional"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: "Это обязательное поле"}]}
                >
                  <Input size="large" style={{width: 200}} placeholder="Указать город" />
                </Form.Item>
                <Typography.Title level={5} style={{ color: "#64748B" }}>Какой город</Typography.Title>
                <Form.Item 
                  name="location"
                  requiredMark="optional"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: "Это обязательное поле"}]}
                >
                  <Input size="large" style={{width: 200}} placeholder="Указать город" />
                </Form.Item>
                <Typography.Title level={5} style={{ color: "#64748B" }}>Веб сайты ( вставить URL )</Typography.Title>
                <Typography.Title level={5} style={{ color: "#64748B" }}>Фото профиля</Typography.Title>
              </Form>
            </Section>
            <Section>
              <Button onClick={onClick} size="large" type="primary">Опубликовать</Button>
            </Section>
        </div>
      </Main>
    </Container>
  )
}

export default CreateProject