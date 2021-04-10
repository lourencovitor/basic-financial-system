import styled from "styled-components";
import {
  HiOutlineArrowCircleUp,
  HiOutlineArrowCircleDown,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

export const Row = styled.div`
  display: flex;
  padding: 10px 25px;
`;

export const Title = styled.div`
  font-size: 1.3rem;
`;

export const IconUp = styled(HiOutlineArrowCircleUp)`
  width: 30px;
  height: 25px;
  color: #2b961f;
  margin-left: auto;
  cursor: pointer;
`;

export const IconDown = styled(HiOutlineArrowCircleDown)`
  width: 30px;
  height: 25px;
  color: #ff4040;
  margin-left: auto;
  cursor: pointer;
`;

export const IconMoney = styled(HiOutlineCurrencyDollar)`
  width: 30px;
  height: 25px;
  color: #25a2a2;
  margin-left: auto;
  cursor: pointer;
`;

export const Money = styled.div`
  padding: 0 25px 10px;
  font-size: 2rem;
`;
