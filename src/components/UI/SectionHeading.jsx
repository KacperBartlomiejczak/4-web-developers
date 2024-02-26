import './SectionHeading.css';
export default function SectionHeading({ heading, subheading }) {
    return (
        <div className='section-heading'>
            <h2>{heading}</h2>
            <p>{subheading}</p>
        </div>
    )
}