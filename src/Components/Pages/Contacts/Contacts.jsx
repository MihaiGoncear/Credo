import React from "react";
import "./Contacts.sass";
import { CONTACTS } from "utils/constants";
import Contact from "./Components/Contact/Contact";
import { useSelector } from "react-redux";
import { TRANSLATES } from "utils/translates";

function Contacts() {
    // @ts-ignore
    const currLanguage = useSelector((state) => state.language.language);

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
                                currLanguage={currLanguage}
                            />
                        ))}
                    </div>
                    <div className='contacts__reclamation'>
                        <div className='title'>{TRANSLATES.leaveMessage[currLanguage]}:</div>
                        <div className='input-wrapper'>
                            <label htmlFor='name'>{TRANSLATES.nameSurname[currLanguage]}:</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='John Doe'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='email'>{TRANSLATES.email[currLanguage]}:</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='example@gmail.com'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='phone'>{TRANSLATES.phone[currLanguage]}:</label>
                            <input
                                type='tel'
                                name='phone'
                                placeholder='+37360000000'
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='message'>{TRANSLATES.message[currLanguage]}:</label>
                            <textarea
                                name='message'
                                placeholder={`${TRANSLATES.message[currLanguage]}...`}
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
