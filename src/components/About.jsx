
import kady from '../assets/imgs/kady.jpg'
import arthur from '../assets/imgs/arthur.jpg'
import aiysha from '../assets/imgs/aiysha.jpg'
import quotes from '../assets/imgs/icon-quotes.svg'



import { AboutListItem } from './AboutListItem'

export function About() {

    const aboutInfo = [
        {
            desc: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
            name: 'Kady Baker',
            roll: 'Product Manager at Bookmark',
            font: quotes,
            img: kady
        },
        {
            desc: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
            name: 'Aiysha Reese',
            roll: 'Founder of Manage',
            font: quotes,
            img: aiysha
        },
        {
            desc: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
            name: 'Arthur Clarke',
            roll: 'Co-founder of MyPhysio',
            font: quotes,
            img: arthur
        }
    ]

    return (
        <section className="content flex align-center column">
            <div className="headline">
                <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
            </div>
            <div className="info">
                <ul className="flex">
                    {aboutInfo.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <AboutListItem item={item} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}