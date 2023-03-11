import { gql, useQuery } from '@apollo/client'
import { Button, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'

const Container = styled.div`
  background-color: #F8FAFC;
  min-height: 100vh;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Section1Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FEED_QUERY = gql`
  query projectsFeed {
    projectsFeed {
      title
      short_description
      categories {
        title
      }
      collectedAmount
      goal
    }
  }
`


const Root = () => {
  // const { data, loading } = useQuery(FEED_QUERY)

  return (
    <Container>
      <Header />

      <Section style={{marginTop: 80 }}>
        <img src="/hello.png" alt="" width="600" />
        <div style={{marginTop: 50}}>
          <Button size="large" style={{ backgroundColor: "#FF8540", color: "#fff", fontWeight: "600", paddingLeft: 24, paddingRight: 24 }}>Смотреть проекты</Button>
          <Button size="large" style={{ fontWeight: "600", marginLeft: 12, backgroundColor: "#4B8EFF", color: "#fff", paddingLeft: 24, paddingRight: 24 }}>Загрузить проекты</Button>
        </div>
        <div style={{position: 'relative', display: 'flex', gap: 48, margin: 140}}>
          <img src="/line1.png" alt="" style={{ position: 'absolute', top: -70, left: -20 }} />
          <Section1Block>
            <Typography.Title style={{ color: "#FF8540", fontWeight: '700', margin: 0 }}>100+</Typography.Title>
            <Typography.Text style={{ color: "#1E293B", fontWeight: "500", fontSize: 18 }}>Проектов реализованы</Typography.Text>
          </Section1Block>
          <Section1Block>
            <Typography.Title style={{ color: "#FF8540", fontWeight: '700', margin: 0 }}>$3+ milion</Typography.Title>
            <Typography.Text style={{ color: "#1E293B", fontWeight: "500", fontSize: 18 }}>Инвестиции собраны</Typography.Text>
          </Section1Block>
          <Section1Block>
            <Typography.Title style={{ color: "#FF8540", fontWeight: '700', margin: 0 }}>400+</Typography.Title>
            <Typography.Text style={{ color: "#1E293B", fontWeight: "500", fontSize: 18 }}>Новых участников в неделе</Typography.Text>
          </Section1Block>
        </div>
      </Section>

      <Section>
        <div style={{position:'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src="/sparkle.png" alt="" style={{ position: 'absolute', right: 40 }} />
          <Typography.Title>Работы</Typography.Title>
          <Typography.Text style={{ color: "#94A3B8", fontWeight: "500", fontSize: 18, width: 600, textAlign: 'center' }}>Поддерживайте детские творческие проекты через краудфандинг! Уникальный способ поддержать молодых талантов в их творческих начинаниях</Typography.Text>
        </div>
      </Section>

      <Section>
        <div style={{position:'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src="/circled1.png" alt="" style={{ position: 'absolute', right: 0, top: 10 }} />
          <Typography.Title>Часто задаваемые вопросы</Typography.Title>
          <Typography.Text style={{ color: "#94A3B8", fontWeight: "500", fontSize: 18, width: 600, textAlign: 'center' }}>Здесь собраны частые вопросы и надеемся вам это поможет при решении проблем на сайте</Typography.Text>
        </div>
      </Section>
      <h1 classname="text-3xl font-bold underline">
        hello
      </h1>

    </Container>
  )
}

export default Root