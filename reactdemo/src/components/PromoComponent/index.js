import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const PromoComponent = (props) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <Image field={props.fields.img} className="img-fluid rounded mb-4" />
      </div>
      <div className="col-lg-6">
        <h2>
          <Text field={props.fields.title} />
        </h2>
        <p>
          <RichText field={props.fields.content} />
        </p>
      </div>
    </div>
  );
};
export default PromoComponent;
