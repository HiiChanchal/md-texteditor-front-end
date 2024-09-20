import React from 'react';

const HtmlPreview = ({ html }) => {
    return (
        <div className="html-preview">
            <h2>Live HTML Preview</h2>
            <div
                className="preview-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
};

export default HtmlPreview;
