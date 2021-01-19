import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keyword" content={keywords} />
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'Welcome To MERNShop',
    description: 'Simple shop build using the MERN Stack',
    keywords: 'mern, azure',
};

export default Meta;
