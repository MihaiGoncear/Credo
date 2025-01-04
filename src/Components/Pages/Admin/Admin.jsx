import React, { useState } from "react";
import NavigationAdmin from "./Components/NavigationAdmin/NavigationAdmin";
import "./Admin.sass";
import AboutUs from "./Components/AboutUs/AboutUs";
import HandleUser from "./Components/HandleUser/HandleUser";
import { useSelector } from "react-redux";

function Admin() {
    const [activeTab, setActiveTab] = useState(0);
    //@ts-ignore
    const token = useSelector((state) => state.token);

    return (
        <div className='admin'>
            {token ? (
                <>
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
                </>
            ) : (
                <HandleUser />
            )}
        </div>
    );
}

export default Admin;
