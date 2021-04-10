import { Title, IconUp, IconDown, IconMoney, Money, Row } from "./styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import formatValue from "../../utils/formatValue";

const Card = ({ title, icon, value }) => {
  const icons = {
    iconUp: <IconUp />,
    iconDown: <IconDown />,
    iconMoney: <IconMoney />,
  };
  return (
    <Grid item xs>
      <Paper>
        <Row>
          <Title>{title}</Title>
          {icons[icon]}
        </Row>
        <Money>{formatValue(value)}</Money>
      </Paper>
    </Grid>
  );
};

export default Card;
