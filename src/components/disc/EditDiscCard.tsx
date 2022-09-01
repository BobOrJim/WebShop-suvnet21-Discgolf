//import { formatCurrency } from "../utilities/formatCurrency";
import { FC, CSSProperties, useState } from "react";
import { NavLink } from "react-router-dom";
import { Disc } from "./disc";

interface DiscCardProps {
  disc: Disc;
  handleSaveDisc: (disc: Disc) => void;
}

export const EditDiscCard: FC<DiscCardProps> = (props: DiscCardProps): JSX.Element => {
  const [disc, setDisc] = useState<Disc>(props.disc);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={props.disc.name}
          onChange={() => {
            console.log("hej");
            //setDisc(disc);
            //setDisc({ ...disc, name: (document.getElementById("name") as HTMLInputElement).value });
            //setDisc(...disc, name: e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <input type="text" className="form-control" id="brand" value={props.disc.brand} />
      </div>
      //on submit button
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          props.handleSaveDisc(disc);
        }}
      ></button>
    </form>
  );
};
