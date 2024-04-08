import React, { useState } from 'react'

export default function About(props) {
    return (
        <div id='about' className='container my-1 p-5 mb-4  rounded-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2 >About</h2>
            <div className="accordion mt-4" id="accordionExample"  >
                <div className="accordion-item" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3034' }}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3034' }} >
                            About Us
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is a simple text converter application built with React.</strong> It allows users to perform various text conversion operations such as converting text to uppercase, lowercase,etc
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3034' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3034' }}>
                            Our Mission
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            Our mission is to make text conversion effortless and accessible to individuals, businesses, and organizations around the world. We believe that the ability to manipulate text should be straightforward and free of unnecessary complexities. Our commitment to simplicity and functionality drives us to continually enhance our service to meet your needs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3034' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : '#2c3034' }}>
                            Thanks
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  >
                            <strong>Thank you for choosing Text Converter for your text conversion needs.</strong>  We're here to simplify your workflow and help you achieve your goals with ease. Feel free to explore our tool and reach out to us with any feedback or suggestions – we'd love to hear from you!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
