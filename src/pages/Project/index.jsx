import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Button, Typography } from 'antd'
import styled from 'styled-components'
import Header from '../../components/Header'




const Container = styled.div`
  background-color: #F8FAFC;
  min-height: 100vh;
  max-width:1440px;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left:auto;
  margin-right:auto;
  max-width:836px;
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


const Project = () => {
  // const { data, loading } = useQuery(FEED_QUERY)

  return (
    <Container className='flex flex-col'>
      <Header />

      <Section style={{marginTop: 80 }}>
        <img src="/skaz.png" alt="" width="836" className='h-[452px] rounded-2xl'/>
        <h1 className='text-[#1e293b] font-bold text-[60px] w-full'>
         Сборник сказок для сладких снов “Лунная конфета”
        </h1>
        {/* cost */}
        <div className='w-full mb-5'>
          <span className='flex font-bold text-base italic text-[#A59EBA]'>Необходимая сумма:<p className='ml-2 font-[400] text-base text-[#1E293B] not-italic'>50.000 рублей</p></span>
        </div> 

        <h1 className='text-[#1e293b] font-bold text-[20px] w-full mb-4'>
        Автор:
        </h1>

        {/* author */}
        <div className='w-full mb-5'>
          <span className='flex py-2 pl-2 pr-6 rounded-full bg-[#ff8540] max-w-fit items-center gap-4'><img src="/eblan.svg" /><p className='ml-2 font-[500] text-base text-white not-italic max-w-fit'>Дарья Мясникова</p></span>
        </div>

        {/* line */}
        <div className='h-[1px] w-full bg-[#393953] mb-12'>
        </div>

        <div>
          {/* rich text */}
          <p className='font-[500] text-base text-[#94a3b8]'>
            Привет! Меня зову Даша. Я хочу рассказать вам об удивительном проекте - сборнике сказок "Лунная конфета: сказки для сладких снов". Этот сборник создан специально для того, чтобы дети могли читать интересные и красочные истории перед сном.
            <br /><br />
            Сказки в этом сборнике о приключениях детей, животных и фантастических существ. Все истории написаны так, что можно легко представить себе героев и события. Они волшебные и загадочные, но в то же время приносят уют и умиротворение.
            <br /><br />
            Одна из моих любимых сказок из этого сборника - "Путешествие на летучей тарелке". Это рассказ о девочке, которая отправляется в удивительное путешествие на летающей тарелке. Она встречает там разных существ и испытывает множество приключений. Когда я читаю эту сказку, мне кажется, что я сама путешествую на летающей тарелке!
            <br /><br />
            Сборник "Лунная конфета: сказки для сладких снов" создан для детей, которые любят мечтать и фантазировать. Этот сборник может стать хорошим подарком для друзей и близких. Я думаю, что многие дети оценят этот сборник так же, как и я. Помогите нам выпустить этот сборник в тираже, и мы обязательно порадуем многих детей своими сказками!
          </p>
        </div>

        <h1 className='text-[#334155] font-[400] text-[20px] w-full my-4'>
        Этапы при поступлении спонсоркой поддержки:
        </h1>
        <div className='flex flex-col'>
          {/* card of level */}
          <div className='px-6 py-6 rounded-[16px] bg-white my-2'>
            <div className="flex text-[#334155] font-[400] text-[20px]">
              <h1 className=' w-full my-4'>Опубликую одну из сказок</h1>
              <p className='text-black min-w-max'>10.000 рублей</p>
            </div>
            <p className='font-[500] text-base text-[#94a3b8]'>Я опубликую одну из моих любимых сказок из этого сборника - "Путешествие на летучей тарелке". Это рассказ о девочке, которая отправляется в удивительное путешествие на летающей тарелке.</p>
          </div>

          <div className='px-6 py-6 rounded-[16px] bg-white my-2'>
            <div className="flex text-[#334155] font-[400] text-[20px]">
              <h1 className=' w-full my-4'>Опубликую одну из сказок</h1>
              <p className='text-black min-w-max'>10.000 рублей</p>
            </div>
            <p className='font-[500] text-base text-[#94a3b8]'>Я опубликую одну из моих любимых сказок из этого сборника - "Путешествие на летучей тарелке". Это рассказ о девочке, которая отправляется в удивительное путешествие на летающей тарелке.</p>
          </div>

          <div className='px-6 py-6 rounded-[16px] bg-white my-2'>
            <div className="flex text-[#334155] font-[400] text-[20px]">
              <h1 className=' w-full my-4'>Опубликую одну из сказок</h1>
              <p className='text-black min-w-max'>10.000 рублей</p>
            </div>
            <p className='font-[500] text-base text-[#94a3b8]'>Я опубликую одну из моих любимых сказок из этого сборника - "Путешествие на летучей тарелке". Это рассказ о девочке, которая отправляется в удивительное путешествие на летающей тарелке.</p>
          </div>
        </div>
        {/* heading */}
        <h1 className='text-[#1e293b] font-bold text-[32px] text-center w-full my-8'>
        Вознаграждения
        </h1>
        {/* group of card */}
        <div className="flex flex-row justify-between w-full">
          {/* card */}
          <div className="bg-[#4B8EFF] rounded-[16px] py-6 px-6 w-[392px] flex flex-col">
            <img src="/skaz.png" alt="" className='w-[344px] h-[224px] rounded-[16px]'/>
            <h1 className=" font-bold text-2xl text-[#f8fafc] my-4">СПАСИБО</h1>
            <p className='font-[500] text-[#f8fafc] text-base mb-4'>Сумма: 1500 рублей</p>
            <div className="w-full h-[150px]">
              <p className='font-[500] text-[#f8fafc] text-base mb-4 w-full'>Благодарю Вас за бескорыстную поддержку издания книги</p>
            </div>
            <button className="bg-[#84cc16] text-white rounded-full px-4 py-2 text-[14px] font-[500] max-w-fit mt-auto">Пожертвовать</button>
          </div>

          <div className="bg-[#FF8540] rounded-[16px] py-6 px-6 w-[392px]">
            <img src="/or.png" alt="" className='w-[344px] h-[224px] rounded-[16px]'/>
            <h1 className=" font-bold text-2xl text-[#f8fafc] my-4">СПАСИБО ОТ ВСЕХ ГНОМИКОВ ЛЕСА!</h1>
            <p className='font-[500] text-[#f8fafc] text-base mb-4'>Сумма: 4500 рублей</p>
            <div className="w-full h-[150px]">
              <p className='font-[500] text-[#f8fafc] text-base mb-4 w-full'>От всего сердца благодарим Вас за поддержку проекта издания книги! ВАМ будет доставлен экземпляр книги "ЛУННАЯ КОНФЕТА: сказки для сладких снов" и любимая шоколадка Автора.</p>
            </div>
            <button className="bg-[#84cc16] text-white rounded-full px-4 py-2 text-[14px] font-[500] max-w-fit mt-auto">Пожертвовать</button>
          </div>
        </div>
      </Section>

    </Container>
  )
}

export default Project