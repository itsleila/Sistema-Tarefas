import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
  Box,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const DefaultTableList = ({ headers, data, breakpoints }) => {
  const [openRows, setOpenRows] = useState({});
  const { small } = breakpoints;
  const isMobile = window.innerWidth < parseInt(small, 10);

  const handleToggleRow = (rowIndex) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [rowIndex]: !prevOpenRows[rowIndex],
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          maxWidth: isMobile ? 400 : 700,
          minWidth: isMobile ? 300 : 650,
        }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {isMobile && <StyledTableCell />}
            <StyledTableCell>Tarefa</StyledTableCell>
            {!isMobile && (
              <>
                <StyledTableCell>Data</StyledTableCell>
                <StyledTableCell>Descrição</StyledTableCell>
              </>
            )}
            <StyledTableCell>Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <StyledTableRow>
                {isMobile && (
                  <StyledTableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleToggleRow(rowIndex)}
                    >
                      {openRows[rowIndex] ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </StyledTableCell>
                )}
                <StyledTableCell>{row.tarefa}</StyledTableCell>
                {!isMobile && (
                  <>
                    <StyledTableCell>{row.data}</StyledTableCell>
                    <StyledTableCell>{row.descricao}</StyledTableCell>
                  </>
                )}
                <StyledTableCell>{row.acoes}</StyledTableCell>
              </StyledTableRow>
              {isMobile && (
                <StyledTableRow>
                  <StyledTableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse
                      in={openRows[rowIndex]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box margin={1}>
                        <div>
                          <strong>Data:</strong> {row.data}
                        </div>
                        <div>
                          <strong>Descrição:</strong> {row.descricao}
                        </div>
                      </Box>
                    </Collapse>
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DefaultTableList.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  breakpoints: PropTypes.object.isRequired,
};

export default DefaultTableList;
