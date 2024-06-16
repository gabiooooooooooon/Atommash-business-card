import React from 'react'
 import Picture from './assets/factory.png'
 import PictureOne from './assets/factory1.png';

function Contacts() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h1>Контакты</h1>
        </div>
        <div className='main-description'>
        <table>
            <tr><th>Адрес</th><td>346686, г. Волгодонск, Ростовская область, Россия <br></br>Жуковское шоссе, 10</td></tr> 
            <tr><th rowSpan={2}>Телефоны</th><td><a href='tel:+7(812)331-9-331'>Тел./Факс:+7 (812) 331-9-331</a></td></tr> 
            <tr><td><a href='tel:+7(812)331-29-29'>Тел./Факс:+7 (812) 331-29-29</a></td></tr> 
            <tr><th>Электронный адрес</th><td><a href='mailto:info@aemtech.ru'>info@aemtech.ru</a></td></tr> 
            <tr><th>Пресс служба</th><td><a href='mailto:pr@aemtech.ru'>pr@aemtech.ru</a></td></tr> 
        </table>
        <br></br>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A551125f13030da670094d50bc3e310014477eeee78558d59d636ff13bdfc2e7a&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        </div>
    </main>
  )
}

export default Contacts
