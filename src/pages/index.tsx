import React from 'react'
import { Heading } from '../components/Heading'
import { Introduction } from '../components/Introduction'
import { Separator } from '../components/Separator'
import { MainPageContainer } from './styles'

export const MainPage = () => {
  return (
    <MainPageContainer>
      <Heading />
      <Separator />

      <Introduction />
      <Separator />
    </MainPageContainer>
  )
}
