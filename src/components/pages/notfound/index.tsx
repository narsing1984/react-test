import React from 'react';
import './index.css';

const HCPSelection: React.FC = () => {
    return (
        <div className="hcp-selection">
            <div className="hcp-selection__search">
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                <input type="text" placeholder="Search" className="hcp-selection__input" />
            </div>
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Bartholomew, Catherine (7916014)</div>
                    <div className="hcp-selection__item-zip">44278</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Black, Claire (8765435)</div>
                    <div className="hcp-selection__item-zip">44223</div>
                    <div className="hcp-selection__item-win">Y</div>
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
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Brown, Michael ( OPTION B )</div>
                    <div className="hcp-selection__item-zip">44278</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Jefferson, Moriah (1654887)</div>
                    <div className="hcp-selection__item-zip">44223</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Levinbrook, Wendy (6929790)</div>
                    <div className="hcp-selection__item-zip">44223</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Miles, Sarah (1144666)</div>
                    <div className="hcp-selection__item-zip">44278</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Moore, John (9988066)</div>
                    <div className="hcp-selection__item-zip">44302</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Qualia, Cary (6485420)</div>
                    <div className="hcp-selection__item-zip">44223</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Smith, Rchard (9876543)</div>
                    <div className="hcp-selection__item-zip">44302</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Stewart, Brenda (7788655)</div>
                    <div className="hcp-selection__item-zip">44278</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Stewart, Brenda (7788655)</div>
                    <div className="hcp-selection__item-zip">44278</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Stewart, Brenda (7788655)</div>
                    <div className="hcp-selection__item-zip">44278</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
                <li className="hcp-selection__list-item">
                    <div className="hcp-selection__item-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="empty-circle-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>
                    </div>
                    <div className="hcp-selection__item-name">Stewart, Brenda (7788655)</div>
                    <div className="hcp-selection__item-zip">44278</div>
                    <div className="hcp-selection__item-win">Y</div>
                </li>
            </ul>
            <div className="hcp-selection__show-more">
                Show more
      <svg xmlns="http://www.w3.org/2000/svg" className="expand-more-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
            </div>
        </div>
    );
}

export default HCPSelection;
