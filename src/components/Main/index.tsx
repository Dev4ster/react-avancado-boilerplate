import React from 'react'

import * as S from './styles'

const Main = ({
  title = 'React avançado',
  description = 'Typescript, ReactJS, NextJs'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e react avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para tela com código. "
    />
  </S.Wrapper>
)

export default Main
