import React, { useState } from "react";
import NavigationAdmin from "./Components/NavigationAdmin/NavigationAdmin";
import "./Admin.sass";
import AboutUs from "./Components/AboutUs/AboutUs";

function Admin() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className='admin'>
            <div className='admin-header ui__display-align-center'>
                <NavigationAdmin
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
            <div className='admin-content general-wrapper'>
                {activeTab === 0 && <AboutUs />}
                {activeTab === 1 && <div>Evenimente</div>}
                {activeTab === 2 && <div>Contacte</div>}
            </div>
        </div>
    );
}

export default Admin;
