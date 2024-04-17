import React from 'react';

interface CardProps {
   text: string;
   columnSpan: "1";
   rowSpan: "1";
}

const Card: React.FC<CardProps> = ({ text, columnSpan, rowSpan }) => {
   return (
      <div className={`dashboard-card h-full col-span-${columnSpan} row-span-${rowSpan}`}>
         {text ? <h1>{text}</h1> : <h1>no text inputted</h1>}
      </div>
   );
}

export default Card;
