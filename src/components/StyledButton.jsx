import React from 'react';
import { Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const StyledButton = (props) => {
  const { col, variant, id, value, onClick } = props;
  return (
    <Col className={`col-${col} p-1`}>
      <Button variant={variant} id={id} block onClick={() => onClick()}>
        {value}
      </Button>
    </Col>
  );
};

export default StyledButton;

StyledButton.propTypes = {
  col: PropTypes.string,
  variant: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

StyledButton.defaultProps = {
  col: '3',
  variant: 'primary',
};
