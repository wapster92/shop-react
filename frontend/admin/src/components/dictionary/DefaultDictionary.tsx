import React, { PropsWithChildren } from 'react';
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

export interface Column {
  name: string;
  key: string;
}
interface Props extends PropsWithChildren{
  data: Record<string, any>[];
  columns: Column[];
  perPage?: number[];
  clickRow: (id: number) => void;
}

const defaultProps = {
  perPage: [15, 30, 50, 100],
}
const DefaultDictionary = (props: Props & typeof defaultProps) => {
  const handleChangePage = () => ({});
  const handleChangeRowsPerPage = () => ({});

  return (
    <Paper className={'element'} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '100vh' }}>
        <Table stickyHeader >
          <TableHead>
            <TableRow>
              {props.columns.map((col, i) => (
                <TableCell key={i}>{col.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row, i) => (
              <TableRow key={i} onClick={() => props.clickRow(row.id)} >
                {props.columns.map((col, j) => (
                  <TableCell key={j}>{row[col.key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={props.perPage}
        component="div"
        count={100}
        rowsPerPage={props.perPage[0]}
        page={1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
};
DefaultDictionary.defaultProps = defaultProps;
export default DefaultDictionary;
