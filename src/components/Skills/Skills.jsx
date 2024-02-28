import SectionHeading from "../UI/SectionHeading.jsx";
import Wrapper from "../UI/Wrapper.jsx";

import './Skills.css'

export default function Skills() {
    return (
        <section className={'skills centered'}>
            <Wrapper>
                <SectionHeading heading={'Skills'} subheading={'What I can do'}/>

            </Wrapper>
        </section>
    )
}