import React, { useState } from 'react'
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

function App() {

  const [data, setData] = useState([
    {
      "id": 1,
      "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/b5b0ff72-dafb-11ea-98f9-da3a1e599769_k_ymal__pide.jpeg?w=600",
      "category": "Pidelər",
      "name": "Kaşarlı Quşbaşı Pide",
      "composition": "Kiçik hissələrə bölünmüş dana filesi, bibər,  soğan, pomidor, kərə yağı, kaşar pendiri",
      "price": 15
    },
    {
      "id": 2,
      "img": "https://www.papajohns.az/uploads/images/chicken_barbekyu.jpg",
      "category": "Pizzalar",
      "name": "Çiken Barbekyu",
      "composition": "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
      "price": 10
    },
    {
      "id": 3,
      "img": "https://www.papajohns.az/uploads/images/pizza/Cheddar-%C3%87iken-Club.png",
      "category": "Pizzalar",
      "name": "Cheddar Çiken Club",
      "composition": "Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu",
      "price": 12
    },
    {
      "id": 4,
      "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/110c1568-db07-11ea-91ae-ea279f353787_adana_kebap..jpeg?w=600",
      "category": "Kabablar",
      "name": "Adana Kabab",
      "composition": "180 q dana və quzu qiyməsi, közdə pomidor və acı bibər, sumaqlı soğan, bulqur/düyü",
      "price": 19
    },
    {
      "id": 5,
      "img": "https://www.papajohns.az/uploads/images/meksika.jpg",
      "category": "Pizzalar",
      "name": "Meksika",
      "composition": "Qril Toyuq, Pomidor, Göbələk, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri",
      "price": 14
    },
    {
      "id": 6,
      "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/30c7e508-db07-11ea-8a76-1a2f8378f118_urfa_kebap...jpeg?w=600",
      "category": "Kabablar",
      "name": "Urfa Kabab",
      "composition": "180 q dana və quzu qiyməsi, közdə pomidor və acı bibər, sumaqlı soğan, bulqur/düyü",
      "price": 19
    },
    {
      "id": 7,
      "img": "https://www.papajohns.az/uploads/images/qarishiq_et.jpg",
      "category": "Pizzalar",
      "name": "Qarışıq Ət",
      "composition": "Pomidor, Oreqano, Mozzarella Pendiri",
      "price": 15
    },
    {
      "id": 8,
      "img": "https://www.papajohns.az/uploads/images/chicken_cheeseburger.jpg",
      "category": "Pizzalar",
      "name": "Çiken Çizburger",
      "composition": "1000 ada sousu, Qril Toyuğu, Turşu Xiyar, Pomidor, Mozzarella ",
      "price": 19
    },
    {
      "id": 9,
      "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/f3b2a7de-dafc-11ea-99b7-827e57abefd7_kar_s__k_pide.jpeg?w=600",
      "category": "Pidelər",
      "name": "Qarışıq Pide",
      "composition": "Kiçik hissələrə bölünmüş dana filesi, dana və quzu qiyməsi, bibər, soğan, pomidor, kaşar pendiri, sucuq, yumurta, kərə yağı",
      "price": 15
    },
    {
      "id": 10,
      "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/7d726cac-db0c-11ea-ad72-826c824a2093_adana_iskender_kebap.jpeg?w=600",
      "category": "Kabablar",
      "name": "Adana İskender Kabab",
      "composition": "180 q dana və quzu qiyməsi, közdə acı bibər və pomidor, 'İsgəndər dönər' sousu",
      "price": 21
    },
    {
      "id": 11,
      "img": "https://www.papajohns.az/uploads/images/chicken_barbekyu.jpg",
      "category": "Pizzalar",
      "name": "Çiken Barbekyu",
      "composition": "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
      "price": 10
    },
    {
      "id": 12,
      "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/7db30926-dafb-11ea-aff5-fa3509a85019_kas_arl__pide..jpeg?w=600",
      "category": "Pidelər",
      "name": "Kaşarlı Pide",
      "composition": "Kaşar pendiri, kərə yağı",
      "price": 11
    },
    {
      "id": 13,
      "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/7db30926-dafb-11ea-aff5-fa3509a85019_kas_arl__pide..jpeg?w=600",
      "category": "Pidelər",
      "name": "Kaşarlı Pide",
      "composition": "Kaşar pendiri, kərə yağı",
      "price": 11
    },
    {
      "id": 14,
      "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/b5b0ff72-dafb-11ea-98f9-da3a1e599769_k_ymal__pide.jpeg?w=600",
      "category": "Pidelər",
      "name": "Qiyməli Pide",
      "composition": "Dana və quzu qiyməsi, bibər, soğan, pomidor,  kərə yağı",
      "price": 12
    }
  ])

  const [basketArr, setBasketArr] = useState([])

  return (
    <>
      <Header data = {data} basketArr = {basketArr} />
      <Routes>
        <Route path='/' element={<Main data={data} basketArr = {basketArr} setBasketArr = {setBasketArr} />} />
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
      </Routes>
    </>
  )
}

export default App