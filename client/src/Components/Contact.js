import { useState } from 'react'
import { Form } from 'semantic-ui-react'

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
        <>
        <h1>Contact Us</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal' >
                    <Form.Input
                        type='text'
                        fluid label='First name'
                        placeholder='First name'
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                    />
                    <Form.Input
                        type='text'
                        fluid label='Last name'
                        placeholder='Last name'
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                    />
                    <Form.Input
                        type='text'
                        fluid label='Phone'
                        placeholder='Phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Form.Input
                        type='text'
                        fluid label='Email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.TextArea
                    type='text'
                    label='Contact us'
                    placeholder='Tell us more ...'
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
                {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
                <Form.Button>Submit</Form.Button>
            </Form>
        </>
    )
}



export default Contact
