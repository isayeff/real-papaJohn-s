import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { Route, Routes } from 'react-router-dom'
import Restoranlar from './components/header/headerPages/Restoranlar'
import PapaBonus from './components/header/headerPages/PapaBonus'
import Kampaniayar from './components/header/navPages/Kampaniayar'
import Papadias from './components/header/navPages/Papadias'
import Pizza from './components/header/navPages/Pizza'
import Qelyanalti from './components/header/navPages/Qelyanalti'
import Salat from './components/header/navPages/Salat'
import Pasta from './components/header/navPages/Pasta'
import Icki from './components/header/navPages/Icki'
import Desert from './components/header/navPages/Desert'
import Sous from './components/header/navPages/Sous'
import Footer from './components/footer/Footer'
import axios from 'axios'
import CardPage from './components/main/mainPages/CardPage'
import ErrorPage from './components/main/mainPages/ErrorPage'
import LoadingPage from './components/main/mainPages/LoadingPage'

function App() {

  const[data, setData] = useState([])

  useEffect(() => {
    axios.get('https://papaapi.yetim.me/food')
      .then(res => setData(res.data))
  }, [])
  console.log(data);

  const [basketArr, setBasketArr] = useState([])

  return (
    <>
      <Header data={data} basketArr={basketArr} />
      <Routes>
        <Route path='/' element={data == false ?  <LoadingPage /> : <Main data={data} basketArr={basketArr} setBasketArr={setBasketArr} />} />
        <Route path='/:category/:id' element={<CardPage data={data} />} />
        <Route path='/restoranlar' element={<Restoranlar />} />
        <Route path='/papabonus' element={<PapaBonus />} />
        <Route path='/kampaniyalar' element={<Kampaniayar />} />
        <Route path='/papadias' element={<Papadias />} />
        <Route path='/pizza' element={<Pizza />} />
        <Route path='/qelyanaltı' element={<Qelyanalti />} />
        <Route path='/salat' element={<Salat />} />
        <Route path='/pasta' element={<Pasta />} />
        <Route path='/içki' element={<Icki />} />
        <Route path='/desert' element={<Desert />} />
        <Route path='/sous' element={<Sous />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App