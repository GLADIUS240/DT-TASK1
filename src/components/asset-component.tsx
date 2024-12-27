import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './asset.css';
import React from 'react';
interface AssetProps {
  asset: {
    asset_id: number;
    asset_title: string;
    asset_description: string;
    asset_content: string;
    asset_type: string;
    asset_content_type: string;
  };
}

const Asset: FunctionComponent<AssetProps> = ({ asset }) => {
  return (
    <div className="asset">
      <div className="as-title d-flex align-items-center justify-content-center">
        <h5 className='text-center mb-0'>{asset.asset_title}</h5>
        <FontAwesomeIcon icon={faInfoCircle} className="a-ico"/>
      </div>
      <div className="as-des">
        <b>Description: </b>{asset.asset_description}
      </div>
      <div className="as-container rounded-bottom">
        {asset.asset_content && asset.asset_content_type === "video" && (
          <iframe
            width="100%"
            height="60.625%"
            src={asset.asset_content}
            title={asset.asset_title}
			style={{ border: 'none' }} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        {asset.asset_content && asset.asset_content_type === "article" && (
          <a href={asset.asset_content} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        )}
		{asset.asset_content && asset.asset_content_type === "threadbuilder" && (
          <div className="tbuilder">
			<div className="cont">
				<a > <FontAwesomeIcon icon={faChevronUp} /></a>
				Thread A
			</div>
		  </div>
        )}
      </div>
    </div>
  );
};

export default Asset;
