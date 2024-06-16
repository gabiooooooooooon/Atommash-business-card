import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                АЭМ-технологии
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <nav>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to='/'>
                    <BsGrid1X2Fill className='icon'/> Главная
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/production'>
                    <BsFillArchiveFill className='icon'/> Продукция
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/history'>
                    <BsFillGrid3X3GapFill className='icon'/> История
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/contacts'>
                    <BsPeopleFill className='icon'/> Контакты
                </Link>
            </li>
        
        </ul>
        </nav>
    </aside>
  )
}

export default Sidebar
