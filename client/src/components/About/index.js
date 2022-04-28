import React from 'react';
import { Container } from 'react-bootstrap'
import '../../index.css';

function About() {
    return(
        <Container id='aboutDiv' fluid>
            <div className='pt-5 text-dark'>
                <h1 className='script text-light'>Strive for Something Better</h1>
            </div>
            <div className='pb-5'>
                <p className='text-dark'>
                    Our soap is the best soap. There is no better soap. Any other soap wishes it was as good as our soap, hell, anything wishes it was as high quality and sustainably sourced as our soap. I mean, who wouldn't want soap infused with the finest Palm Oil supplied by none other than the Roundtable on Sustainable Palm Oil? You can't forget about the Tallow in these bad boys either. We exclusively use GMO Free, Grass-fed, Certified-human-raised-and-handled tallow to ensure our customers enjoy ethically produced, foamy, creamy bubbles. It feels good to be great.
                </p>
            </div>
            
        </Container>
    )
}

export default About;