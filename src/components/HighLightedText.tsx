import React from 'react';


function getHighlightedText(text:string, highlight:string, color:string) {
    // Split text on highlight term, include term itself into parts, ignore case
    let parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === highlight.toLowerCase() ? (
          <span style={{ backgroundColor: color }}>{part}</span>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }

const HighLightedText = ({ highlight, value, color } : { highlight: string, value: string, color: string }) => {
    return <p style={{fontSize:'30px',lineHeight:'40px'}}>{getHighlightedText(value, highlight, color)}</p>;
};

export default HighLightedText;