import './Main.css'
import bl from './bl.png'
import bre from './bre.png'
import birka from './birka.png'
import com from './com.png'
import lup from './lup.png'
import sasis from './sasiski.png'
import shokol from './background-84692_1280-150x150.png'
import vector from './Vector.png'
import { useState } from 'react';

export default function Main(){
    return(
        <div>
            <div className='container'>
                <div className='nazvanie'>Главная/Блог</div>
                <button className='sozdPost'><img src={vector}></img>Создать пост</button>
            </div>
            <div className='container main'>  
                <div className='left'>
                    <ul>
                        <li className='blog-li'>
                            <div className='dat'>
                                <div className='dat-1'><h1>20</h1></div>
                                <div className='dat-2'><p>июнь,2024</p></div>
                                <div className='dat-3'><img src={bl}></img></div>
                            </div>
                            <div className='blog'>
                                <img src={bre}></img>
                                <div className='blog-text'>
                                    <h2>Почему лучше покупать органические продукты?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat […]</p>
                                </div>
                                <div className='blog-otz'>
                                    <div className='blog-otz-sovet'>
                                        <img src={birka}></img>
                                        <a>Советы для здоровья</a>
                                    </div>
                                    <div className='blog-otz-com'>
                                        <img src={com}></img>
                                        12
                                    </div>
                                    <div className='blog-otz-ostkcom'>
                                        <a>Оставить комментарий</a>
                                    </div>
                                    <a className='blog-otz-boclhe'>Читать больше</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='right'>
                    <div className='icons'>
                        <h2>Рецепты по иконкам</h2>
                        <ul>
                            <li className='a'><img src={lup}></img>Закуски</li>
                            <li className='b'><img src={lup}></img>Закуски</li>
                            <li className='c'><img src={lup}></img>Закуски</li>
                            <li className='b'><img src={lup}></img>Закуски</li>
                            <li className='c'><img src={lup}></img>Закуски</li>
                            <li className='a'><img src={lup}></img>Закуски</li>
                            <li className='c'><img src={lup}></img>Закуски</li>
                            <li className='a'><img src={lup}></img>Закуски</li>
                            <li className='b'><img src={lup}></img>Закуски</li>
                            <li className='a'><img src={lup}></img>Закуски</li>
                            <li className='b'><img src={lup}></img>Закуски</li>
                            <li className='c'><img src={lup}></img>Закуски</li>
                        </ul>
                    </div>
                    <div className='uchast'>
                        <h2>Участники</h2>
                        <ul>
                            <li className='a'>Новые</li>
                            <li className='b'>В сети</li>
                            <li className='c'>Популярные</li>
                        </ul>
                        <ul>
                            <li className='a shl'><img src={sasis}></img></li>
                            <li className='a shl'><img src={sasis}></img></li>
                            <li className='a shl'><img src={sasis}></img></li>
                            <li className='a shl'><img src={sasis}></img></li>
                            <li className='a shl'><img src={sasis}></img></li>
                            <li className='a shl'><img src={sasis}></img></li>
                            <li className='a shl'><img src={sasis}></img></li>
                            <li className='a shl'><img src={sasis}></img></li>
                            <li className='a shl'><img src={sasis}></img></li>
                        </ul>
                    </div>
                    <div className='public'>
                        <h2>Последние публикации</h2>
                        <ul>
                            <li className=''><img src={shokol}></img><div>Побалуй себя шоколадом</div></li>
                            <li className=''><img src={shokol}></img><div>Побалуй себя шоколадом</div></li>
                            <li className=''><img src={shokol}></img><div>Побалуй себя шоколадом</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
