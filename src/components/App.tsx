// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Pad from './Pad';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [hasOperator, setHasOperator] = useState(false);
  const [operator, setOperator] = useState('');
  const [isMinus, setIsMinus] = useState(false);
  const [result, setResult] = useState(0);

  const onNumberButtonClick = (inputNumber: number) => {
    let newDisplay = display;

    if (display === '0' && inputNumber === 0) {
      return;
    }

    if (hasOperator) {
      newDisplay = '';
      setHasOperator(false);
    }

    if (display === '0') {
      newDisplay = inputNumber.toString();
    } else {
      newDisplay += inputNumber.toString();
    }

    setDisplay(newDisplay);
  };

  const onDecimalButtonClick = () => {
    let newDisplay = '';

    if (hasOperator) {
      newDisplay = '0.';
      setHasOperator(false);
    } else if (display.indexOf('.') === -1) {
      newDisplay += `${display}.`;
    } else {
      return;
    }

    setDisplay(newDisplay);
  };

  const calculate = (newOperator: string, displayNumber: number) => {
    const num = isMinus ? displayNumber * -1 : displayNumber;
    let newResult = result;

    switch (newOperator) {
      case '＋':
        newResult += num;
        break;

      case '－':
        newResult -= num;
        break;

      case '×':
        newResult *= num;
        break;

      case '÷':
        if (num === 0) {
          return false;
        }
        newResult /= num;
        break;

      default:
        break;
    }

    setResult(newResult);
    setDisplay(newResult.toString());
    return true;
  };

  const onOperatorButtonClick = (inOperator: string) => {
    const displayNumber = Number(display);
    let inputOperator = inOperator;

    if (operator && !hasOperator) {
      if (!calculate(operator, displayNumber)) {
        return;
      }
    } else {
      if (inputOperator === '－' && (operator === '×' || operator === '÷')) {
        setIsMinus(true);
        inputOperator = operator;
      } else {
        setIsMinus(false);
      }

      setResult(displayNumber);
    }

    setOperator(inputOperator);
    setHasOperator(true);
  };

  const onClearButtonClick = () => {
    setDisplay('0');
    setResult(0);
    setHasOperator(false);
    setOperator('');
    setIsMinus(false);
  };

  return (
    <Container fluid className="text-center">
      <Row>
        <Col>
          <h1>JavaScript Calculator</h1>
        </Col>
      </Row>
      <Container className="calculator-wrapper">
        <Row>
          <Col>
            <Card>
              <Card.Body
                id="display"
                className="text-right"
                style={{ fontSize: '3rem' }}
              >
                {display}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Pad
          onNumberButtonClick={onNumberButtonClick}
          onOperatorButtonClick={onOperatorButtonClick}
          onClearButtonClick={onClearButtonClick}
          onDecimalButtonClick={onDecimalButtonClick}
        />
      </Container>
    </Container>
  );
};

export default App;
