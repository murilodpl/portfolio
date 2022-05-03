import { useState } from "react";
import { send } from 'emailjs-com'
import contactSVG from "../assets/contact.svg";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false)
    const [isSend, setIsSend] = useState(false)
    const [isError, setIsError] = useState(false)
    const [responseMsg, setResponseMsg] = useState(<></>)

    function handleChange(e: any) {
        const { name, value } = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function submitHandle(e: any) {
        e.preventDefault()
        setIsLoading(true)

        // Send email via EmailJS
        send(
            'service_4tm353q',
            'template_9qp73je',
            { ...formData },
            'WBPCsgLCZy3cY5k2D'
        )
            .then((res) => {
                // console.log('Message sent successfully', res.status, res.text)
                setIsSend(true)
                setIsLoading(false)
                setIsError(false)
                setResponseMsg(<h3>Thank you for the message, soon I'll contact you!</h3>)
            })
            .catch((err) => {
                // console.log('Failed', err)
                setIsSend(false)
                setIsLoading(false)
                setIsError(true)
                setResponseMsg(<h3 className="text-red-500 mt-4">Failed, try again later!</h3>)
            })
    }

    return (
        <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:grid lg:grid-cols-2" id="contact">
            <div className="self-center text-center">
                {(!isSend) &&
                    <form>
                        <div className="contactForm">
                            <input className="col-span-2" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" required />
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                            <textarea className="col-span-2" name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
                            <button type="submit" onClick={submitHandle} className="col-span-2">Send</button>
                        </div>
                    </form>
                }
                {(isError || isSend) && responseMsg}

                {(isLoading) && <div className="text-center"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>}
            </div>

            <img className="sectionImage" src={contactSVG} width="384px" height="384px" alt="Profile Details" />
        </div>
    )
}