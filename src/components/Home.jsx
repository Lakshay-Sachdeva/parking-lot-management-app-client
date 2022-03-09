import styled from "styled-components";
import { ParkingLot } from "./ParkingLot";

export const Home = () => {
  return (
    <Container>
      <Heading>Parking Lot Management</Heading>
      <ParkingLot />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(116, 149, 154, 0.2);
  text-align: center;
`;
const Heading = styled.h1`
  color: rgb(32, 50, 57);
`;
