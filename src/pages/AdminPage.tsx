import { useDiscContext } from "../context/DiscsContext";

import { Disc } from "../components/disc/disc";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CSSProperties } from "react";

const AdminPage = () => {
  const { getAllDiscs, removeDisc } = useDiscContext();
  const discs: Disc[] = getAllDiscs();

  //################### playing with different ccs styles
  //syntax v1, funkar inte på alla komponenter
  const StyledTableCell = styled.div`
    font-weight: bold;
  `;
  //syntax v2 (styled components)
  const StyledTableCell2 = styled(TableCell)`
    font-weight: bold;
  `;
  //syntax v3. Automatiska grejor, där isActive används bakom kulliserna och den fungerar på NavLink men inte TableCell.
  interface LinkProps {
    isActive: boolean;
  }
  const TexNavLinkStyle = ({ isActive }: LinkProps): CSSProperties => ({
    fontWeight: isActive ? "bold" : "normal",
  });
//##################### END ###########################



interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Disc) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Disc;
  label: string;
  numeric: boolean;
}



    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    }

    type Order = "asc" | "desc";

    function getComparator<Key extends keyof any>(order: Order, orderBy: Key): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
      return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
    }



  function EnhancedTableHead(props: EnhancedTableProps) {
    //############################### playing wint order by experingent
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Disc) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };






    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Disc Name </TableCell>
                <TableCell align="right">Manufacturer</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Speed</TableCell>
                <TableCell align="right">Glide</TableCell>
                <TableCell align="right">Turn</TableCell>
                <TableCell align="right">Fade</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {discs.map((disc) => (
                <TableRow key={disc.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>

                    <TableCell key={disc.id} align={disc.numeric ? "right" : "left"} padding={disc.disablePadding ? "none" : "normal"} sortDirection={orderBy === disc.id ? order : false}>
                      <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : "asc"} onClick={createSortHandler(headCell.id)}>
                        {headCell.label}
                        {orderBy === headCell.id ? (
                          <Box component="span" sx={visuallyHidden}>
                            {order === "desc" ? "sorted descending" : "sorted ascending"}
                          </Box>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                  ))}

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  return (
    <>
      <BasicTable />
    </>
  );
};

export default AdminPage;

/*
      {discs.map((disc) => (
        //<div key={disc.id}>{disc.id}</div>
        <DiscForm key={disc.id} disc={disc} />
      ))}
      */
