import React, { useEffect, useState } from "react";
import { Container, Header, Body, Form } from "./styles";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Skeleton from "@material-ui/lab/Skeleton";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, Typography } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { options } from "../../constant/defaultValues";
import useGetEntryandExitType from "../../hooks/entryandExitType/useGetEntryandExitType";
import usePostEntryandExitType from "../../hooks/entryandExitType/usePostEntryandExitType";
import { GET_EXTRY_AND_EXIT_TYPE } from "../../redux/actions";
import { connect } from "react-redux";
import {
  getExtryAndExitType,
  postExtryAndExitType,
} from "../../redux/entryandExitType/actions";

const Home = ({
  getExtryAndExitTypeAction,
  postExtryAndExitTypeAction,
  entryandExit,
  loadingList,
}) => {
  const [id, setId] = useState("57b65aec-17bb-4e83-9d9e-622daf9dc6ff");
  const [data, setData] = useState({
    entryandExitType: "input",
    date: "",
    value: 0,
  });
  const handleChange = (event) => {
    setData({ ...data, entryandExitType: event.target.value });
  };

  useEffect(() => {
    getExtryAndExitTypeAction(id);
  }, []);

  const onSubmit = () => {
    postExtryAndExitTypeAction(
      { ...data, userId: id },
      {
        success: () => getExtryAndExitTypeAction(id),
        fail: () => {},
      }
    );
  };

  return (
    <Container>
      <Header>
        <Grid container spacing={3}>
          <Card
            title="Input"
            icon="iconUp"
            value={
              entryandExit
                .filter((value) => value.entryandExitType === "input")
                .reduce((a, b) => +a + +b.value, 0) || 0
            }
          />
          <Card
            title="Output"
            icon="iconDown"
            value={
              entryandExit
                .filter((value) => value.entryandExitType === "output")
                .reduce((a, b) => +a + +b.value, 0) || 0
            }
          />
          <Card
            title="Total"
            icon="iconMoney"
            value={
              entryandExit
                .filter((value) => value.entryandExitType === "input")
                .reduce((a, b) => +a + +b.value, 0) -
                entryandExit
                  .filter((value) => value.entryandExitType === "output")
                  .reduce((a, b) => +a + +b.value, 0) || 0
            }
          />
        </Grid>
      </Header>
      <Body>
        {loadingList ? (
          <Skeleton>
            <Table />
          </Skeleton>
        ) : (
          <Table />
        )}
        <Form>
          <Typography
            align="center"
            variant="h6"
            style={{ marginBottom: "20px" }}
          >
            Register Input/Output
          </Typography>
          <TextField
            required
            id="standard-required"
            label="UserId"
            defaultValue={id}
            disabled
            style={{ width: "100%", marginBottom: "15px" }}
          />
          <TextField
            id="entryandExitType"
            select
            label="type"
            value={data.entryandExitType}
            onChange={handleChange}
            style={{ marginBottom: "15px", width: "100%" }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="number"
            required
            id="value"
            label="Value"
            value={data.value}
            InputProps={{ inputProps: { min: 0 } }}
            onChange={(e) => setData({ ...data, value: +e.target.value })}
            defaultValue="500"
            style={{ width: "100%", marginBottom: "15px" }}
          />
          <TextField
            id="date"
            label="Date"
            type="date"
            value={data.date}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: "100%" }}
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
          <Button
            style={{ width: "100%", marginTop: "15px" }}
            variant="contained"
            color="primary"
            endIcon={<Send />}
            onClick={() => onSubmit()}
          >
            Send
          </Button>
        </Form>
      </Body>
    </Container>
  );
};

export default connect(
  ({ entryandExitTypeStore }) => ({
    loadingList: entryandExitTypeStore.loadingList[GET_EXTRY_AND_EXIT_TYPE],
    entryandExit: entryandExitTypeStore.entryandExit,
  }),
  {
    getExtryAndExitTypeAction: getExtryAndExitType,
    postExtryAndExitTypeAction: postExtryAndExitType,
  }
)(React.memo(Home));
