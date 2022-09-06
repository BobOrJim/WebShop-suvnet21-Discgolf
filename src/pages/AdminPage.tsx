import { TableSortLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Product } from "../components/product/Product";
import { useProductContext } from "../context/ProductContext";

const sortIconPositionDictionary: { [columnName: string]: boolean } = {}; //ändra namn till
sortIconPositionDictionary["id"] = false;
sortIconPositionDictionary["name"] = false;
sortIconPositionDictionary["brand"] = false;
sortIconPositionDictionary["speed"] = false;
sortIconPositionDictionary["glide"] = false;
sortIconPositionDictionary["turn"] = false;
sortIconPositionDictionary["fade"] = false;
sortIconPositionDictionary["weight"] = false;
sortIconPositionDictionary["color"] = false;
sortIconPositionDictionary["price"] = false;
sortIconPositionDictionary["type"] = false;

const AdminPage = () => {
  type SortOrder = "asc" | "desc";
  const [orderDirection, setOrderDirection] = useState<SortOrder>("asc");
  const [sortIconPosition, setSortIconPosition] = useState<typeof sortIconPositionDictionary>(
    sortIconPositionDictionary
  );

  const { getAllProducts, removeProduct } = useProductContext();
  const [rowData, setRowData] = useState<Product[]>(getAllProducts());

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
    const property = columnName as keyof Product;
    //setOrderDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    const sorted = [...rowData].sort((product1, product2) =>
      compareTwoProductsUsingTProp(product1, product2, property)
    );
    console.log("sorted", sorted);
    sortIconPositionDictionary["id"] = !sortIconPositionDictionary["id"];

    setRowData(orderDirection === "asc" ? sorted : sorted.reverse());
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              onClick={() => {
                handleSortClick("id");
              }}
            >
              <TableSortLabel
                active={true}
                direction={sortIconPositionDictionary["id"] === true ? "asc" : "desc"}
              >
                Id&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("name")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Name&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("brand")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Brand&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("speed")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Speed&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("glide")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Glide&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("turn")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Turn&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("fade")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Fade&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("weight")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Weight&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("color")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Color&nbsp;($)
              </TableSortLabel>
            </TableCell>

            <TableCell align="center" onClick={() => handleSortClick("brand")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Brand&nbsp;($)
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" onClick={() => handleSortClick("price")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Price&nbsp;($)
              </TableSortLabel>
            </TableCell>
            <TableCell align="center" onClick={() => handleSortClick("type")}>
              <TableSortLabel active={true} direction={orderDirection}>
                Type&nbsp;($)
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((product) => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminPage;
