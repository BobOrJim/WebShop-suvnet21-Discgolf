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
import Checkbox from "@mui/material/Checkbox";
import { alpha, Box, FormControlLabel, IconButton, Switch, TablePagination, TableSortLabel, Toolbar, Tooltip, Typography} from "@mui/material";
import React from "react";

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
  
  
  //################### Frans Playground Start ##############################
  
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  type Order = 'asc' | 'desc';
  
  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
    ): (
      a: { [key in Key]: number | string },
      b: { [key in Key]: number | string },
      ) => number {
        return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
      }
      
      // This method is created for cross-browser compatibility, if you don't
      // need to support IE11, you can use Array.prototype.sort() directly
      function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
        const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) {
            return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Disc;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: true,
    disablePadding: true,
    label: 'Id',
  },
  {
    id: 'brand',
    numeric: false,
    disablePadding: false,
    label: 'Manufacturer',
  },
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'speed',
    numeric: true,
    disablePadding: false,
    label: 'Speed',
  },
  {
    id: 'glide',
    numeric: true,
    disablePadding: false,
    label: 'Glide',
  },
  {
    id: 'turn',
    numeric: true,
    disablePadding: false,
    label: 'Turn',
  },
  {
    id: 'fade',
    numeric: true,
    disablePadding: false,
    label: 'Fade',
  },
  {
    id: 'weight',
    numeric: true,
    disablePadding: false,
    label: 'Weight',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Disc) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
  props;
  const createSortHandler =
  (property: keyof Disc) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
            />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
          key={headCell.id}
          align={headCell.numeric ? 'right' : 'left'}
          padding={headCell.disablePadding ? 'none' : 'normal'}
          sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" >
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;
  
  return (
    <Toolbar
    sx={{
      pl: { sm: 2 },
      pr: { xs: 1, sm: 1 },
      ...(numSelected > 0 && {
        bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
        >
      {numSelected > 0 ? (
        <Typography
        sx={{ flex: '1 1 100%' }}
        color="inherit"
        variant="subtitle1"
        component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            
          </IconButton>
        </Tooltip>
      )}
    {"}"}
    </Toolbar>
  );
};

  const function EnhancedTable(){
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Disc>('id');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Disc,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = discs.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - discs.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={discs.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(discs, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((discs, index) => {
                  const isItemSelected = isSelected(discs.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, discs.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={discs.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {discs.name}
                      </TableCell>
                      <TableCell align="right">{discs.brand}</TableCell>
                      <TableCell align="right">{discs.color}</TableCell>
                      <TableCell align="right">{discs.speed}</TableCell>
                      <TableCell align="right">{discs.glide}</TableCell>
                      <TableCell align="right">{discs.turn}</TableCell>
                      <TableCell align="right">{discs.fade}</TableCell>
                      <TableCell align="right">{discs.weight}</TableCell>
                      <TableCell align="right">{discs.type}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={discs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
}


//################### Frans END Playground ##############################

// interface EnhancedTableProps {
//   numSelected: number;
//   onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Disc) => void;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   order: Order;
//   orderBy: string;
//   rowCount: number;
// }

// interface HeadCell {
//   disablePadding: boolean;
//   id: keyof Disc;
//   label: string;
//   numeric: boolean;
// }



//     function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//       if (b[orderBy] < a[orderBy]) {
//         return -1;
//       }
//       if (b[orderBy] > a[orderBy]) {
//         return 1;
//       }
//       return 0;
//     }

//     type Order = "asc" | "desc";

//     function getComparator<Key extends keyof any>(order: Order, orderBy: Key): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
//       return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
//     }



//   function EnhancedTableHead(props: EnhancedTableProps) {
//     //############################### playing wint order by experingent
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler =
//     (property: keyof Disc) => (event: React.MouseEvent<unknown>) => {
//       onRequestSort(event, property);
//     };






//     return (
//       <>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Disc Name </TableCell>
//                 <TableCell align="right">Manufacturer</TableCell>
//                 <TableCell align="right">Color</TableCell>
//                 <TableCell align="right">Speed</TableCell>
//                 <TableCell align="right">Glide</TableCell>
//                 <TableCell align="right">Turn</TableCell>
//                 <TableCell align="right">Fade</TableCell>
//                 <TableCell align="right">Edit</TableCell>
//                 <TableCell align="right">Delete</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>

//               {discs.map((disc) => (
//                 <TableRow key={disc.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>

//                     <TableCell key={disc.id} align={disc.numeric  ? "right" : "left"} padding={disc.disablePadding ? "none" : "normal"} sortDirection={orderBy === disc.id ? order : false}>
//                       <TableSortLabel active={orderBy === disc.id} direction={orderBy === disc.id ? order : "asc"} onClick={createSortHandler(disc.id)}>
//                         {disc.label}
//                         {orderBy === disc.id ? (
//                           <Box component="span" sx={visuallyHidden}>
//                             {order === "desc" ? "sorted descending" : "sorted ascending"}
//                           </Box>
//                         ) : null}
//                       </TableSortLabel>
//                     </TableCell>
//                   ))}

//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </>
//     );
//   }
//   );
// };

// export default AdminPage;

//
//       {discs.map((disc) => (
//         //<div key={disc.id}>{disc.id}</div>
//         <DiscForm key={disc.id} disc={disc} />
//       ))}
// }
