'use client'

import Section from '../components/Section.jsx'

const Subscribe = () =>
{
    

    return (
        <Section>
            <div className="bg-teal-800 h-[150px] px-36 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Subscribe to our newsletter
                </h2>

                <form className="flex gap-4" onSubmit={(e) => submitForm(e)}>
                    <input className="py-2 pl-2 text-black focus:outline-none" name="email" type="email" placeholder="Enter e-mail"/>
                    <button className="btn subscribe-btn px-4 bg-orange-500 w-fit text-bold text-lg">Subscribe</button>
                </form>
            </div>
        </Section>
    )

    function submitForm(e)
    {
        e.preventDefault()

        const formData = new FormData(e.target)
        
        formData.get('email')

        e.target.reset()
    }
}
 
export default Subscribe;