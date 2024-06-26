import { useState } from 'react';
import sw11 from './sw11.jpg'
import sw12 from './sw12.jpg'
import sw13 from './sw13.jpg'
import sw14 from './sw14.jpg'
import sw21 from './sw21.jpg'
import sw22 from './sw22.jpg'
import sw23 from './sw23.jpg'
import sw24 from './sw23.jpg'

export default function Switch(){
    const [toggle, setToggle] = useState(1);

    return(
        <div className='switch'>
            <ul className={toggle != 1 && 'vanish'}>
                <li>
                    <img src={sw11}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw12}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw13}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw14}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
            </ul>
            <ul className={toggle != 2 && 'vanish'}>
                <li>
                    <img src={sw21}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw22}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw23}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw24}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
            </ul>
            <ul className={toggle != 3 && 'vanish'}>
                <li>
                    <img src={sw14}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw13}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw11}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
                <li>
                    <img src={sw12}></img>
                    <span>
                        <h2>Harry Adams</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusum laudan.</p>
                    </span>
                </li>
            </ul>
            <button onClick={() => setToggle(1)} className={toggle == 1 && 'active'}></button>
            <button onClick={() => setToggle(2)} className={toggle == 2 && 'active'}></button>
            <button onClick={() => setToggle(3)} className={toggle == 3 && 'active'}></button>
        </div>
    )
}