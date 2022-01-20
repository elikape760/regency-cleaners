import { useState } from 'react'
// import { Form } from 'semantic-ui-react'

function Contact({ handleContact }) {
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [about, setAbout] = useState("")

    console.log(about);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                phone: phone,
                email: email,
                about: about
            }),
        })
            .then((r) => r.json())
            .then((newContact) => handleContact(newContact));

        setFirst_name("")
        setLast_name("")
        setPhone("")
        setEmail("")
        setAbout("")
    }


    return (
        <div className='row'>
            <h1 className='text-center'>Contact Us</h1>
            <div className="col-6 offset-3">
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className="form-label" for="first_name">First Name</label>
                        <input className='form-control'
                            type='text'
                            placeholder='John'
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label" for="last_name">Last Name</label>
                        <input className='form-control'
                            type='text'                            
                            placeholder='Smith'
                            value={last_name}
                            onChange={(e) => setLast_name(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label" for="phone">Phone</label>
                        <input className='form-control'
                            type='text'                            
                            placeholder='718-123-4567'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <label className="form-label" for="email">Email</label>
                    <div className='mb-3'>
                        <input className='form-control'
                            type='text'
                            placeholder='johnSmith@mail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <label className="form-label" for="about">Comment</label>
                    <textarea className='form-control'
                        type='text'                        
                        placeholder='Tell us more ...'
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                    <div className="mb-3">
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Contact
