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
                    I started making my own soap to get away from using
                    so many chemical-laden products on my own skin and knew that I could create something
                    covetable at a fair price-point. Huntress Handcrafted Soaps are proudly made free of
                    sulfates, parabens, and phthalates, meaning you won't have to bathe in lotion after using
                    them. Synthetic lathering agents used by commercial soap companies are extremely inexpensive
                    and have high cleansing properties, but strip the skin of their natural oils, keeping you in the
                    constant cycle of slathering on creams and lotions after each and every shower. Here at Huntress, you won't
                    find any of those detergents, but true natural soap made with nourishing ingredients like
                    lather-licious milk, skin-loving butters, calming botanicals, and cold-pressed fruit juice!
                </p>
            </div>
            
        </Container>
    )
}

export default About;