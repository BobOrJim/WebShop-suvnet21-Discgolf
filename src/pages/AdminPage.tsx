import EditSharpIcon from "@mui/icons-material/EditSharp";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { Box, Button, IconButton, TableFooter, TableSortLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../components/product/product";
import { useProductContext } from "../context/ProductContext";
//Sök här efter goa ikoner https://mui.com/material-ui/material-icons/

const columnOrderDictionary: { [columnName: string]: boolean } = {};
columnOrderDictionary["id"] = false;
columnOrderDictionary["name"] = false;
columnOrderDictionary["brand"] = false;
columnOrderDictionary["speed"] = false;
columnOrderDictionary["glide"] = false;
columnOrderDictionary["turn"] = false;
columnOrderDictionary["fade"] = false;
columnOrderDictionary["weight"] = false;
columnOrderDictionary["color"] = false;
columnOrderDictionary["price"] = false;
columnOrderDictionary["type"] = false;

const AdminPage = () => {
  const { getAllProducts, removeProduct } = useProductContext();
  const [rowData, setRowData] = useState<Product[]>(getAllProducts());
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number,
  ) => {
    setPage(page);
  };

  //Tricket att få denna att fungera, är att från docsen lista ut att copy/pasta funktionens typ, istället för metodsignaturens typ.
  const handleChangeRowsPerPage: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    if (event.target.value) {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    }
    console.log(rowsPerPage + " " + typeof rowsPerPage);
  };

  function compareTwoProductsUsingTProp(a: Product, b: Product, orderBy: keyof Product) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function handleSortClick(columnName: string) {
    //Inte optimal felhantering här. Stoppar in i backloggen.
    const property = columnName as keyof Product;
    const sorted = [...rowData].sort((product1, product2) =>
      compareTwoProductsUsingTProp(product1, product2, property),
    );
    columnOrderDictionary[columnName] = !columnOrderDictionary[columnName];
    setRowData(columnOrderDictionary[columnName] === true ? sorted : sorted.reverse());
  }

  return (
    <Box sx={{ width: "100%", overflowX: "auto", marginTop: "75px" }}>
      <Button
        sx={{ mx: "auto", width: 200, margin: 2 }}
        variant='contained'
        color='primary'
        onClick={() => {
          navigate(`/admin/edit/new`);
        }}
      >
        ADD NEW
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align='center' onClick={() => handleSortClick("id")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["id"] === true ? "asc" : "desc"}
                >
                  Id&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("name")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["name"] === true ? "asc" : "desc"}
                >
                  Name&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("brand")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["brand"] === true ? "asc" : "desc"}
                >
                  Brand&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("speed")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["speed"] === true ? "asc" : "desc"}
                >
                  Speed&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("glide")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["glide"] === true ? "asc" : "desc"}
                >
                  Glide&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("turn")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["turn"] === true ? "asc" : "desc"}
                >
                  Turn&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("fade")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["fade"] === true ? "asc" : "desc"}
                >
                  Fade&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("weight")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["weight"] === true ? "asc" : "desc"}
                >
                  Weight&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("color")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["color"] === true ? "asc" : "desc"}
                >
                  Color&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center' onClick={() => handleSortClick("price")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["price"] === true ? "asc" : "desc"}
                >
                  Price&nbsp;
                </TableSortLabel>
              </TableCell>
              <TableCell align='center' onClick={() => handleSortClick("type")}>
                <TableSortLabel
                  active={true}
                  direction={columnOrderDictionary["type"] === true ? "asc" : "desc"}
                >
                  Type&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rowData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rowData
            ).map((product) => (
              <TableRow key={product.id}>
                <TableCell align='center' component='th' scope='row'>
                  {product.id}
                </TableCell>
                <TableCell align='center'>{product.name}</TableCell>
                <TableCell align='center'>{product.brand}</TableCell>
                <TableCell align='center'>{product.speed}</TableCell>
                <TableCell align='center'>{product.glide}</TableCell>
                <TableCell align='center'>{product.turn}</TableCell>
                <TableCell align='center'>{product.fade}</TableCell>
                <TableCell align='center'>{product.weight}</TableCell>
                <TableCell align='center'>{product.color}</TableCell>
                <TableCell align='center'>{product.price}</TableCell>
                <TableCell align='center'>{product.type}</TableCell>

                <TableCell align='center'>
                  <IconButton
                    color='primary'
                    size='large'
                    onClick={() => {
                      navigate(`/admin/edit/${product.id}`);
                    }}
                  >
                    <EditSharpIcon />
                  </IconButton>
                  <IconButton
                    color='error'
                    size='large'
                    onClick={() => {
                      removeProduct(product.id);
                      setRowData(rowData.filter((d) => d.id !== product.id));
                    }}
                  >
                    <HighlightOffSharpIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={rowData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
                labelRowsPerPage={<span>Rows:</span>}
                labelDisplayedRows={({ page }) => {
                  return `Page: ${page + 1}`;
                }}
                backIconButtonProps={{
                  color: "secondary",
                }}
                nextIconButtonProps={{ color: "secondary" }}
                SelectProps={{
                  inputProps: {
                    "aria-label": "page number",
                  },
                }}
                showFirstButton={true}
                showLastButton={true}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminPage;
