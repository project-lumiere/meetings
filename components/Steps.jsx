import React from 'react';

export const Steps = ({ children }) => {
  const renderChildren = () =>
    React.Children.map(children, (element, index) => (
      <element.type order={index} {...element.props}>
        {element.props.children}
      </element.type>
    ));
  return <div>{renderChildren()}</div>;
};

export default Steps;
