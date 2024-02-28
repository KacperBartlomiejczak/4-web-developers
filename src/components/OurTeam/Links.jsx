export default function Links({linkedIn, github, mail}) {
    return (
        <div className={'links'}>
            <a href={linkedIn} className='linkedin' target={'_blank'}>
                <ion-icon name='logo-linkedin'></ion-icon>
            </a>
            <a href={github} className='github' target={'_blank'}>
                <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href={'mailto:' + mail} className='mail'>
                <ion-icon name="mail-outline"></ion-icon>
            </a>
        </div>
    )
}