import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './asset.css';
import React from 'react';


const Asset:FunctionComponent = () => {
  	return (
		<div className="asset">
			<div className="as-title  d-flex align-items-center justify-content-center">
				<h5 className='text-center mb-0'>Testfkensf</h5>
				<FontAwesomeIcon icon={faInfoCircle} className="a-ico"/>
			</div>
			<div className="as-des">
			Description:{}
			</div>
			<div className="as-container rounded-bottom">

			</div>

		</div>
    		);
};

export default Asset;
