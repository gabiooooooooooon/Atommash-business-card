import React from 'react'
 import Picture from './assets/factory.png'
 import PictureOne from './assets/factory1.png';

function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h1>Главная</h1>
        </div>
        <div className='main-description'>
            <p>«АЭМ-технологии» - одна из крупнейших машиностроительных компаний Государственной корпорации «Росатом». Это единственная российская компания 
                с полным циклом изготовления: от собственного производства металлургической заготовки до готовой высокотехнологичной сверхгабаритной продукции.</p>
            <p>«АЭМ-технологии» производит оборудование для атомной энергетики, предприятий нефтегазохимического комплекса, теплоэнергетики и других отраслей промышленности.</p>
            <div className='main-description-pictures'>
                <img src={Picture} className='main-factory-photo1' alt=''></img>
                <img src={PictureOne} className='main-factory-photo2' alt=''></img>
            </div>
        </div>
    </main>
  )
}

export default Home
