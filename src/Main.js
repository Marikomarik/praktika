import './Main.css'
import bl from './bl.png'
import bre from './bre.png'
import birka from './birka.png'
import com from './com.png'
import { useState } from 'react';

export default function Main(){
    return(
        <div>
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
                    
                </div>
            </div>
        </div>
    )
}
