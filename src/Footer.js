import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
            <div className='join'>
                <div className='flex-between container aboba'>
                <h1>Уже убедились? Присоединяйтесь к нпшему ламповому сообществу.</h1>
                <button>Присоединиться</button>
                </div>
            </div>
            <div className='container'>
                <ul className='flex'>
                    <li className='about'>
                        <h2>О сообществе SocialChef</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dictum finibus. Sed odio quam, lacinia ac purus et, vulputate imperdiet turpis. Morbi volutpat, urna ac convallis ullamcorper, diam leo fringilla ipsum, sit amet luctus enim nibh eget dolor. Phasellus.</p>
                    </li>
                    <li className='help'>
                        <h2>Нужна помощь?</h2>
                        <p>Свяжитесь с нами по телефону или электронной почте</p>
                        <div className='social'><span>T:</span>1-555-555-5555</div>
                        <div className='social'><span>E:</span>info@socialchef.com</div>
                    </li>
                    <li className='sleshka'>
                        <h2>Следите за нами</h2>
                    </li>
                </ul>
                <div className='lover flex-between'>
                    <h2>© socialchef.com 2024. Все права защищены.</h2><div><a>Контакты</a><a>Войти</a><a>Регистрация</a></div>
                </div>
            </div>
        </footer>
    )
}