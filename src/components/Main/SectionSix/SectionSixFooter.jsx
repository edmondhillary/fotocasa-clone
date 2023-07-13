import React, { useState } from 'react';
import './SectionSixFooter.scss';

const SectionSixFooter = () => {
    const tabs = ['Lo más buscado', 'Comprar', 'Alquilar'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <span style={{margin:'2rem '}}>
            <div className="tabs">
                {tabs.map(tab => (
                    <div
                        key={tab}
                        className={`tab ${tab === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                        <div className={`underline ${tab === activeTab ? 'active' : ''}`} />
                    </div>
                ))}
            </div>
            <div className="underline-global" />
        </span>
    );
};

export default SectionSixFooter;
