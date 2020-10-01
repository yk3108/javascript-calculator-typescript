// eslint-disable-next-line no-use-before-define
import React from "react";
import { Col, Button } from "react-bootstrap";

type Props = {
  col?: string;
  variant?: string;
  id: string;
  value: string;
  onClick: () => void;
};

const StyledButton: React.FC<Props> = (props: Props) => {
  const { col, variant, id, value, onClick } = props;
  return (
    <Col className={`col-${col} p-1`}>
      <Button variant={variant} id={id} block onClick={() => onClick()}>
        {value}
      </Button>
    </Col>
  );
};

StyledButton.defaultProps = {
  col: "3",
  variant: "primary",
};

export default StyledButton;
