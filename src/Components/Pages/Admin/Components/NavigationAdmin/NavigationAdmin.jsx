import React from "react";

function NavigationAdmin({ activeTab, setActiveTab }) {
    const tabs = ["Despre noi", "Evenimente", "Contacte"];

    return (
        <>
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`admin-header__item ${activeTab === index ? "active" : ""}`}
                    onClick={() => setActiveTab(index)}
                >
                    {tab}
                </div>
            ))}
        </>
    );
}

export default NavigationAdmin;
