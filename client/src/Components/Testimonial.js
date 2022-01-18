import { Card, Container } from 'semantic-ui-react'

function Testimonial() {
    return (
        <>
            <h2>Testimonials</h2>
            <Container>
                <Card.Group className='testimonials' >
                    <Card
                        header='Rick Sanchez'
                        description={[
                            "Great service and quality dry cleaning"
                        ].join('')}
                    />
                    <Card
                        header='John Doe'
                        description={[
                            "I see the owner cares about the clients personal belongings."
                        ].join('')}
                    />
                    <Card
                        header='Happy Customer'
                        description={[
                            "Best store ever, the owner is so nice!"
                        ].join('')}
                    />
                    <Card
                        header='Happy Customer'
                        description={[
                            "Best store ever, the owner is so nice!"
                        ].join('')}
                    />
                    <Card
                        header='Happy Customer'
                        description={[
                            "Best store ever, the owner is so nice!"
                        ].join('')}
                    />
                    <Card
                        header='Happy Customer'
                        description={[
                            "Best store ever, the owner is so nice!"
                        ].join('')}
                    />
                    <Card
                        header='Happy Customer'
                        description={[
                            "Best store ever, the owner is so nice!"
                        ].join('')}
                    />
                </Card.Group>
            </Container>
        </>
    )
}

export default Testimonial