import styled from "styled-components";
import { Button } from "../../../../components/Button";

const Title = styled.h1`
  margin-top: 4em;
  font-size: 48px;
`;

const Points = styled.p`
  font-size: 24px;
  margin-bottom: 3em;
`;

const GameOver = ({ pts, setStart }) => {
  const refreshPage = () => setStart(false);

  return (
    <>
      <Title>Game Over</Title>
      <Points>You did {pts} out of 5!</Points>
      <Button onClick={refreshPage}>Retry</Button>
    </>
  );
};

export default GameOver;
