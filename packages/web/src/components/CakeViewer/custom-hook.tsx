import * as React from "react";
import * as urls from "../../config/index.json";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { Cake } from "./types";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      width: "100%",
    },
    gridList: {
      width: 500,
      height: 500,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

export type CakeUpdater = {
  cakes: Cake[];
  setCakes: React.Dispatch<React.SetStateAction<Cake[]>>;
};

export const useFetch = (): CakeUpdater => {
  const [cakes, setCakes] = React.useState<Cake[]>([]);

  React.useEffect(() => {
    fetch(urls.GET_ALL_CAKES)
      .then((response: any) => response.json())
      .then(setCakes)
      .catch(console.error);
  }, []);

  return { cakes, setCakes };
};

export const sendDeleteCakeRequest = (
  id: number,
  setCakes: React.Dispatch<React.SetStateAction<Cake[]>>
): void => {
  const body = JSON.stringify({
    id,
  });

  fetch(urls.DELETE_A_CAKE, {
    method: "DELETE",
    body,
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response: any) => response.json())
    .then((json: any) => {
      setCakes(json.message);
    })
    .catch(console.log);
};
