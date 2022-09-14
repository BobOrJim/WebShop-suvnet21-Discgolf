import { Category } from "@mui/icons-material";

export interface Category {
    category: Category;
}

export type Disc = {
  speed: number;
  glide: number;
  turn: number;
  fade: number;
}

export type Bag = {
    slots: number;
    rainproof: boolean;
}

