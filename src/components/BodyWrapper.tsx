import React, { ReactNode } from 'react';

interface BodyWrapperProps {
  children: ReactNode;
}

const BodyWrapper: React.FC<BodyWrapperProps> = ({ children }) => {
  return (
    <div className="container-fluid bg-grad">
      <div className="container-lg">
        <div className="row justify-content-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BodyWrapper;
