import { useProductContext } from "../context/ProductContext";
import { Product } from "../components/product/product";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Button, Pagination, TableFooter, TableSortLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";

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

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
    setPage(page);
  };

  //Tricket att få denna att fungera, är att från docsen lista ut att copy/pasta funktionens typ, istället för metodsignaturens typ.
  const handleChangeRowsPerPage: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
    if (event.target.value) {
      //console.log(event.target.value + " " + typeof event.target.value);
      const rowsPerPage = parseInt(event.target.value, 10);
      //console.log(rowsPerPage + " " + typeof rowsPerPage);
      setRowsPerPage(rowsPerPage);
      //setRowsPerPage(parseInt(event.target.value, 10));
      //setPage(0);
    }
    //setRowsPerPage(parseInt(event.currentTarget.value, 10));
    //console.log(rowsPerPage + " " + typeof rowsPerPage);
    setPage(0);
  };

  function compareTwoProductsUsingTProp(a: Product, b: Product, orderBy: keyof Product) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0; // equal
  }

  function handleSortClick(columnName: string) {
    const property = columnName as keyof Product; //Inte optimal felhantering här. Stoppar in i backloggen.
    const sorted = [...rowData].sort((product1, product2) => compareTwoProductsUsingTProp(product1, product2, property));
    columnOrderDictionary[columnName] = !columnOrderDictionary[columnName];
    setRowData(columnOrderDictionary[columnName] === true ? sorted : sorted.reverse());
  }

  return (
    <>
      <Button
        sx={{ mx: "auto", width: 200, margin: 2 }}
        variant="contained"
        color="primary"
        onClick={() => {
          navigate(`/addpage`);
          console.log("Add");
        }}
      >
        ADD NEW
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" onClick={() => handleSortClick("id")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["id"] === true ? "asc" : "desc"}>
                  Id&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("name")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["name"] === true ? "asc" : "desc"}>
                  Name&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("brand")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["brand"] === true ? "asc" : "desc"}>
                  Brand&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("speed")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["speed"] === true ? "asc" : "desc"}>
                  Speed&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("glide")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["glide"] === true ? "asc" : "desc"}>
                  Glide&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("turn")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["turn"] === true ? "asc" : "desc"}>
                  Turn&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("fade")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["fade"] === true ? "asc" : "desc"}>
                  Fade&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("weight")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["weight"] === true ? "asc" : "desc"}>
                  Weight&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("color")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["color"] === true ? "asc" : "desc"}>
                  Color&nbsp;
                </TableSortLabel>
              </TableCell>

              <TableCell align="center" onClick={() => handleSortClick("price")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["price"] === true ? "asc" : "desc"}>
                  Price&nbsp;
                </TableSortLabel>
              </TableCell>
              <TableCell align="center" onClick={() => handleSortClick("type")}>
                <TableSortLabel active={true} direction={columnOrderDictionary["type"] === true ? "asc" : "desc"}>
                  Type&nbsp;
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((product) => (
              <TableRow key={product.id}>
                <TableCell align="center" component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.brand}</TableCell>
                <TableCell align="center">{product.speed}</TableCell>
                <TableCell align="center">{product.glide}</TableCell>
                <TableCell align="center">{product.turn}</TableCell>
                <TableCell align="center">{product.fade}</TableCell>
                <TableCell align="center">{product.weight}</TableCell>
                <TableCell align="center">{product.color}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.type}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      removeProduct(product.id);
                      setRowData(rowData.filter((d) => d.id !== product.id));
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      navigate(`/editpage/${product.id}`);
                      console.log("Edit");
                    }}
                  >
                    Edit
                  </Button>
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
                  return `Page: ${page}`;
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
                //ActionsComponent={TablePaginationActions}
                //component={Box}
                //sx and classes prop discussed in styling section
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminPage;

/*




      
      

          */
