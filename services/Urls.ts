import { DataTypes } from "../store/data-types";

export const RestUrls = {
  [DataTypes.BOOKS]: `http://localhost:3002/api/books`,
  [DataTypes.CATEGORIES]: `http://localhost:3002/api/categories`,
}