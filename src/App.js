import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Column, Container, Content, Row } from "./styles";
import { clear } from "@testing-library/user-event/dist/clear";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operatorCalc, setOperatorCalc] = useState("");

  const handleAddNumber = (number) => {
    if (currentNumber === "0") {
      setCurrentNumber(`${number}`);
    } else {
      setCurrentNumber((prev) => `${prev}${number}`);
    }
  };

  const handleOperator = (operator) => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperatorCalc(operator);
    } else if (operator === "=") {
      const result = calc(operatorCalc);
      setCurrentNumber(result);
      setFirstNumber(result);
      setOperatorCalc("");
    }
  };

  const calc = (operator) => {
    let result;
    if (operator === "+") {
      result = parseFloat(firstNumber) + parseFloat(currentNumber);
    } else if (operator === "-") {
      result = parseFloat(firstNumber) - parseFloat(currentNumber);
    } else if (operator === "*") {
      result = parseFloat(firstNumber) * parseFloat(currentNumber);
    } else if (operator === "/") {
      result = parseFloat(firstNumber) / parseFloat(currentNumber);
    }
    return result;
  };
  const clearDisplay = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Column>
          <Row>
            <Button label={7} onClick={() => handleAddNumber("7")} />
            <Button label={8} onClick={() => handleAddNumber("8")} />
            <Button label={9} onClick={() => handleAddNumber("9")} />
            <Button label="/" onClick={() => handleOperator("/")} />
          </Row>
          <Row>
            <Button label={4} onClick={() => handleAddNumber("4")} />
            <Button label={5} onClick={() => handleAddNumber("5")} />
            <Button label={6} onClick={() => handleAddNumber("6")} />
            <Button label="*" onClick={() => handleOperator("*")} />
          </Row>
          <Row>
            <Button label={1} onClick={() => handleAddNumber("1")} />
            <Button label={2} onClick={() => handleAddNumber("2")} />
            <Button label={3} onClick={() => handleAddNumber("3")} />
            <Button label="-" onClick={() => handleOperator("-")} />
          </Row>
          <Row>
            <Button label={"."} onClick={() => handleAddNumber(".")} />
            <Button label={"C"} onClick={() => clearDisplay()} />
            <Button label={"="} onClick={() => handleOperator("=")} />
            <Button label={"+"} onClick={() => handleOperator("+")} />
          </Row>
        </Column>
      </Content>
    </Container>
  );
}

export default App;
