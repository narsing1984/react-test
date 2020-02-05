import React from 'react';
import './index.css';
import '../../pages/hcpselection/index.css';

const SelectedHCP: React.FC = () => {
    return (
        <div className="selected-hcp">
            <ul className="hcp-selection__list">
                <li className="hcp-selection__list-header">
                    <div className="hcp-selection__icon-header"></div>
                    <div className="hcp-selection__name-header">HCP Name
            <svg xmlns="http://www.w3.org/2000/svg" className="arrow-upward-icon" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" /></svg>
                    </div>
                    <div className="hcp-selection__zip-header">ZIP Code</div>
                    <div className="hcp-selection__win-header">WIN Plan</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="check-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Brown, Michael ( OPTION A )</div>
                    <div className="hcp-selection__item-zip">44278</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
            </ul>
        </div>
    );
}

export default SelectedHCP;
