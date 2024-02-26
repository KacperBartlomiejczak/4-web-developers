import Links from './Links'

import Wrapper from '../UI/Wrapper.jsx'

export default function Card({img, alt, name, description}) {
    return (
        <Wrapper>
            <div className='card'>
                <img src={img} alt={alt}/>
                <Links mail='kacperbartlomiejczak@proton.me' github='https://github.com/KacperBartlomiejczak'
                       linkedIn='https://www.linkedin.com/in/kacper-bart%C5%82omiejczak-1315802b1/'/>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </Wrapper>
    )
}
