// ChildComponent.tsx
import React from 'react';
import Image from 'next/image';

type ChildComponentProps = {
   name: string;
   age: number;
   image: string;
}

export const ChildComponent = (props: ChildComponentProps) => {
   return (
      <div>
         <p>My Name is: {props.name}</p>
         <p>Age: {props.age}</p>
         <Image
            src="/domainImage.jpg"
            alt="none"
            width={500}
            height={500}
         />
      </div>
   );
}
