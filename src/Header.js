import './Header.css'
import { useState } from 'react'
import logo from './logo.png'
import lup from './lup.png'
import kolp from './kolp.png'
import noj from './noj.png'

export default function Header(){
    return(
    <header> 
       <div className='container flex-between color'>
            <div className='left flex'>
                <img src={logo}></img>
                <a>рецепты</a>
                <a>Страницы</a>
                <a>Блог</a>
                <a>Магазин</a>
                <a>Логин</a>
            </div>
            <div className='right'>
                <button><img src={lup}></img><span><p>Поиск по рецепту</p></span></button>
                <button><img src={kolp}></img><span><p>Мой аккаунт</p></span></button>
                <button><img src={noj}></img><span><p>Поделиться рецептом</p></span></button>
            </div>
       </div>
    </header>
    )
}