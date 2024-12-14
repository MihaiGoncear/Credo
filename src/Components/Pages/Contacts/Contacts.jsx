import React from "react";
import "./Contacts.sass";
import { CONTACTS } from "utils/constants";
import Contact from "Components/Footer/Components/Contact";

function Contacts() {
    return (
        <div className='contacts'>
            <div className='general-wrapper ui__rows'>
                <div className='ui__title'>Contacte</div>
                <div className='contacts__wrapper'>
                    <div className='contacts__contacts'>
                        {CONTACTS.map((contact, index) => (
                            <Contact
                                info={contact}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className='contacts__reclamation'>
                        <div className='title'>Lăsați-ne un mesaj:</div>
                        <div className='input-wrapper'>
                            <label htmlFor='name'>Numele și prenumele:</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Scrieți numele și prenumele...'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Scrieți email-ul...'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='phone'>Telefon:</label>
                            <input
                                type='tel'
                                name='phone'
                                placeholder='Scrieți telefonul...'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='message'>Mesaj:</label>
                            <textarea
                                name='message'
                                placeholder='Scrieți mesajul...'
                            ></textarea>
                        </div>
                        <div className='input-wrapper'>
                            <button>Trimite</button>
                        </div>
                    </div>
                </div>
                <div className='contacts__map'>
                    <iframe
                        title='map'
                        src="https://www.google.com/maps/embed/v1/place?q=47%C2%B000'03.%2028%C2%B053'01.&amp;key=AIzaSyAeKdt5GLEA2vn9of32sYftX8tQ2tiNIIA"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
