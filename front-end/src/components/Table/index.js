import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { columns, values } from "../../constant/defaultValues";
import { connect } from "react-redux";
import { GET_EXTRY_AND_EXIT_TYPE } from "../../redux/actions";
import { getExtryAndExitType } from "../../redux/entryandExitType/actions";
import formatValue from "../../utils/formatValue";
import moment from "moment";
import { Fab } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    width: "75%",
  },
  container: {
    maxHeight: 350,
  },
});

const StickyHeadTable = ({ entryandExit }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#dcdcdc",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {entryandExit
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "value" ? (
                            formatValue(+value)
                          ) : column.id === "date" ? (
                            moment(value).format("DD/MM/YYYY")
                          ) : column.id === "action" ? (
                            <>
                              <DeleteIcon color="secondary" fontSize="small" />
                            </>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={entryandExit.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default connect(
  ({ entryandExitTypeStore }) => ({
    loadingList: entryandExitTypeStore.loadingList[GET_EXTRY_AND_EXIT_TYPE],
    entryandExit: entryandExitTypeStore.entryandExit,
  }),
  {
    getExtryAndExitTypeAction: getExtryAndExitType,
  }
)(React.memo(StickyHeadTable));
