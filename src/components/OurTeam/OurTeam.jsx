import Wrapper from "../UI/Wrapper"
import SectionHeading from "../UI/SectionHeading"
import Card from "./Card"
import './OurTeam.css'
import OwnerImg from '../../assets/img/owner-img.jpg'

export default function OurTeam() {
    return (
        <section className='our-team centered' id='ourTeam'>
            <Wrapper>
                <SectionHeading heading='Our Team' subheading='Meet the team'/>
                <Card img={OwnerImg} alt={'Owner of 4 Web developer'} name={'Kacper Bartłomiejczak'}
                      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores eum explicabo hic ipsa ipsum nemo neque similique ullam, unde? Adipisci at labore laboriosam nulla numquam perferendis sit soluta totam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores  '}/>
            </Wrapper>
        </section>
    )
}
