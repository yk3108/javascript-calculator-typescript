// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import StyledButton from './StyledButton';

type Props = {
  onNumberButtonClick: (num: number) => void;
  onOperatorButtonClick: (operator: string) => void;
  onDecimalButtonClick: () => void;
  onClearButtonClick: () => void;
};

const Pad: React.FC<Props> = (props: Props) => {
  const {
    onNumberButtonClick,
    onOperatorButtonClick,
    onDecimalButtonClick,
    onClearButtonClick,
  } = props;

  return (
    <Container fluid>
      <Row>
        <StyledButton
          id="seven"
          value="7"
          onClick={() => {
            onNumberButtonClick(7);
          }}
        />
        <StyledButton
          id="eight"
          value="8"
          onClick={() => onNumberButtonClick(8)}
        />
        <StyledButton
          id="nine"
          value="9"
          onClick={() => onNumberButtonClick(9)}
        />
        <StyledButton
          variant="success"
          id="divide"
          value="÷"
          onClick={() => onOperatorButtonClick('÷')}
        />
      </Row>
      <Row>
        <StyledButton
          id="four"
          value="4"
          onClick={() => onNumberButtonClick(4)}
        />
        <StyledButton
          id="five"
          value="5"
          onClick={() => onNumberButtonClick(5)}
        />
        <StyledButton
          id="six"
          value="6"
          onClick={() => onNumberButtonClick(6)}
        />
        <StyledButton
          variant="success"
          id="multiply"
          value="×"
          onClick={() => onOperatorButtonClick('×')}
        />
      </Row>
      <Row>
        <StyledButton
          id="one"
          value="1"
          onClick={() => onNumberButtonClick(1)}
        />
        <StyledButton
          id="two"
          value="2"
          onClick={() => onNumberButtonClick(2)}
        />
        <StyledButton
          id="three"
          value="3"
          onClick={() => onNumberButtonClick(3)}
        />
        <StyledButton
          variant="success"
          id="subtract"
          value="－"
          onClick={() => onOperatorButtonClick('－')}
        />
      </Row>
      <Row>
        <StyledButton
          id="zero"
          value="0"
          onClick={() => onNumberButtonClick(0)}
        />
        <StyledButton
          id="decimal"
          value="."
          onClick={() => onDecimalButtonClick()}
        />
        <StyledButton
          variant="secondary"
          id="clear"
          value="C"
          onClick={() => onClearButtonClick()}
        />
        <StyledButton
          variant="success"
          id="add"
          value="＋"
          onClick={() => onOperatorButtonClick('＋')}
        />
      </Row>
      <Row>
        <StyledButton
          col="12"
          variant="success"
          id="equals"
          value="="
          onClick={() => onOperatorButtonClick('=')}
        />
      </Row>
    </Container>
  );
};

export default Pad;
