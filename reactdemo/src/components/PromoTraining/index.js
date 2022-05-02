import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';

const PromoTraining = (props) => {
  const rightImg = props.params !== null && props.params.rightImg;
  return (
    <div className="row featurette">
      <div className={rightImg ? 'col-sm-6' : 'col-sm-6 order-sm-2'}>
        <h1 className="featurette-heading">
          <Text field={props.fields.heading} />
        </h1>
        <p className="lead">
          <RichText
            field={props.fields.content}
            tag="richTextSection"
            editable={true}
            className="text-left"
          />
        </p>
      </div>
      <div className={rightImg ? 'col-sm-6' : 'col-sm-6 order-sm-1'}>
        <Image field={props.fields.img} editable={true} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default PromoTraining;
