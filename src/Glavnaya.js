import './Glavnaya.css'
import lupa from './lupa.png'
import bl from './bl.png'
import bre from './bre.png'
import birka from './birka.png'
import com from './com.png'
import lup from './lup.png'
import sasis from './sasiski.png'
import shokol from './background-84692_1280-150x150.png'
import vector from './Vector.png'
import carb from './carb.png'
import bl2 from './bl2.png'
import aguga from './aguga.png'
import hard from './hard.png'
import cake from './cake.png'
import chupakabra from './chupakabra.png'


export default function Glavnaya(){ 
    return(
        <div className='glav'>
            <div className='container welcome'>
                <h1>Добро пожаловать в SocialChef!</h1>
                <p>SocialChef - это кулинарное сообщество, где рецепты воплощаются в жизнь. Присоединившись к нам, вы присоединитесь к сильному сообществу гурманов, где сможете делиться своими рецептами и кулинарными идеями с сотнями других единомышленников.</p>
                <div className='flex'>
                    <button>Зарегистрироваться</button>
                    <button>Войти</button>
                </div>
            </div>
            <div className='ost'>
                <div className='container'>
                    <div className='infa flex'>
                        <h1>SocialChef в цифрах</h1><h2></h2>
                    </div>
                    <ul className='infaImg'>
                        <li><img src={lupa}></img><h2>30</h2><p>Участников</p></li>
                        <li><img src={lupa}></img><h2>30</h2><p>Участников</p></li>
                        <li><img src={lupa}></img><h2>30</h2><p>Участников</p></li>
                        <li><img src={lupa}></img><h2>30</h2><p>Участников</p></li>
                        <li><img src={lupa}></img><h2>30</h2><p>Участников</p></li>
                        <li><img src={lupa}></img><h2>30</h2><p>Участников</p></li>
                    </ul>
                    <button className='infaB'>Присоединяйтесь к нам!</button>
                    <div className='flex-between main-block'>
                        <div className='repeat'>
                            <div className='flex'>
                                <div className='sqr-bl'>
                                    <img src={carb}></img>
                                    <h2 className='bl-h2'>Спагетти “Карбонара” с деревенским хлебом</h2>
                                    <p className='bl-p sqr-bl-p'>Вы вряд ли найдете ресторан, в котором раздел меню с итальянскими блюдами не возглавляет паста карбонара. Волшебное сочетание поджаренного бекона, спагетти и нежного сливочного соуса знакомо каждому из на</p>
                                    <div className='flex negr'>
                                        <button className='sqr-bl-but'>Посмотреть полный рецепт</button>
                                        <a>Посмотреть прошлые рецепты</a>
                                    </div>
                                    <div className='ponos'><h3>Популярный рецепт</h3><h1></h1><h2></h2></div>
                                </div>
                                <div className='pr-bl'>
                                    <img src={bl2}></img>
                                    <h2 className='bl-h2'>Давыдов А.</h2>
                                    <p className='bl-p pr-bl-p'>Истинная кулинария не для робких. Наберитесь отваги, пробуйте, экспериментируйте. Не позволяйте никому загонять вас в рамки. Единственные ваши рамки — ваша душа. Это правда: готовить может каждый, но лишь бесстрашные достигают величия</p>
                                    <button className='pr-bl-but'>Посмотреть полный рецепт</button>
                                    <span><a>Посмотреть прошлые рецепты</a></span>
                                    <div className='ponos'><h3>Популярный автор</h3><h1></h1><h2></h2></div>
                                </div>
                            </div>
                            <div className='rec'>
                                <div className='rec-bls'>
                                    <div className='rec-bl'>
                                        <img src={aguga}></img>
                                        <h2>Великолепный кекс с черным и белым шоколадом</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={hard}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rec-bl'>
                                        <img src={aguga}></img>
                                        <h2>Великолепный кекс с черным и белым шоколадом</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={hard}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rec-bl'>
                                        <img src={aguga}></img>
                                        <h2>Великолепный кекс с черным и белым шоколадом</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={hard}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rec-bl'>
                                        <img src={aguga}></img>
                                        <h2>Великолепный кекс с черным и белым шоколадом</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={hard}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rec-bl'>
                                        <img src={aguga}></img>
                                        <h2>Великолепный кекс с черным и белым шоколадом</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={hard}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rec-bl'>
                                        <img src={aguga}></img>
                                        <h2>Великолепный кекс с черным и белым шоколадом</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={hard}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ponos'><h3>Последние рецепты</h3><h1></h1><h2></h2></div>
                            </div>
                            <div className='rec rec2'>
                                <div className='rec-bls'>
                                    <div className='rec-bl'>
                                        <img src={cake}></img>
                                        <h2>Топ 20 рецептов фруктовых пирогов</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={chupakabra}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat […]</p>
                                    </div>
                                    <div className='rec-bl'>
                                        <img src={cake}></img>
                                        <h2>Топ 20 рецептов фруктовых пирогов</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={chupakabra}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat […]</p>
                                    </div><div className='rec-bl'>
                                        <img src={cake}></img>
                                        <h2>Топ 20 рецептов фруктовых пирогов</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={chupakabra}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat […]</p>
                                    </div><div className='rec-bl'>
                                        <img src={cake}></img>
                                        <h2>Топ 20 рецептов фруктовых пирогов</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={chupakabra}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat […]</p>
                                    </div><div className='rec-bl'>
                                        <img src={cake}></img>
                                        <h2>Топ 20 рецептов фруктовых пирогов</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={chupakabra}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat […]</p>
                                    </div><div className='rec-bl'>
                                        <img src={cake}></img>
                                        <h2>Топ 20 рецептов фруктовых пирогов</h2>
                                        <div className='flex-between rec-bl-neg'>
                                            <div className='rec-bl-hard'>
                                                Средний
                                                <img src={chupakabra}></img>
                                            </div>
                                            <div className='rec-bl-hard'>
                                                0
                                                <img src={hard}></img>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat […]</p>
                                    </div>
                                </div>
                                <div className='ponos'><h3>Последние Публикации</h3><h1></h1><h2></h2></div>
                            </div>
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
            </div>
        </div> 
    )
}