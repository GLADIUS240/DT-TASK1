import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronUp, faExpandArrowsAlt, faRedo, faUndo, faEllipsisV, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import './asset.css';
import React from 'react';
import ThreadBuilder from './ThreadBuilder';

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
        <h5 className="text-center mb-0">{asset.asset_title}</h5>
        <FontAwesomeIcon icon={faInfoCircle} className="a-ico" />
      </div>
      <div className="as-des">
        <b>Description: </b>
        {asset.asset_description}
      </div>
      <div className="as-container rounded-bottom">
        {asset.asset_content && asset.asset_content_type === 'video' && (
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
        {asset.asset_content_type === 'threadbuilder' && (
          <div className="tbuilder">
            <div className="th">
              <FontAwesomeIcon icon={faChevronUp} />
              Thread A
            </div>
			 <ThreadBuilder />
          </div>
        )}
        {asset.asset_type === 'input_asset' && asset.asset_content_type === 'article' && (
          <div className="row a-card">
            <div className=" col-12 article">
            <label htmlFor="a-title">Title</label>
            <input id="a-title" className='a-title' type="text" />
          </div>
          <div className=" col-12 article">
            <label htmlFor="content">Content</label>
            <div id="content" className='a-title canvas'>
              <span className='row pb-1 d-flex gx-3 canvas-r d-inline-block'>
                <a className="col">File</a>
                <a className="col">Edit</a>
                <a className="col">View</a>
                <a className="col">Insert</a>
                <a className="col">Format</a>
                <a className="col">Tools</a>
                <a className="col">Table</a>
                <a className="col">Help</a>
              </span>
              <span className='pt-2 canvas-r canvas-r-tool'>
                <a className="col"><FontAwesomeIcon icon={faUndo}/></a>
                <a className="col"><FontAwesomeIcon icon={faRedo}/></a>
                <a className="col"><FontAwesomeIcon icon={faExpandArrowsAlt}/></a>
                <a className="col">Paragraph</a>
                <a className="col"><FontAwesomeIcon icon={faEllipsisH}/></a>
              </span>
             
            </div>
            <textarea className='canvas-txt'/>
          </div>
          </div>
        )}
        {asset.asset_type ==="display_asset" && asset.asset_content_type === 'article' && (
          <div className="ast-article"></div>
        )}
        
      </div>
    </div>
  );
};

export default Asset;
