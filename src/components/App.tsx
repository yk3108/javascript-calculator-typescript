// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Pad } from "./Pad";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [display, setDisplay] = useState(0);
  const [hasOperator, setHasOperator] = useState(false);
  const [operator, setOperator] = useState("");

  return <>hoge</>;
};

export default App;
