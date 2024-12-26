import { FunctionComponent } from 'react';
import './asset.css';
import React from 'react';


const Asset:FunctionComponent = () => {
  	return (
    		<div className="asset1">
      			<div className="asset1Child" />
      			<div className="asset1Item" />
      			<div className="asset1Inner" />
      			<div className="descriptionWriteContainer">
        				<span className="description">
          					<span>{`Description `}</span>
          					<span className="span">:</span>
        				</span>
        				<span className="writeA300400WordArticle">
          					<span className="span1">{` `}</span>
          					<span>{`Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world `}</span>
        				</span>
      			</div>
      			<div className="structureYourPointers">Structure your Pointers</div>
      			<div className="ellipseParent">
        				<div className="instanceChild" />
        				<div className="i">i</div>
      			</div>
    		</div>);
};

export default Asset;
