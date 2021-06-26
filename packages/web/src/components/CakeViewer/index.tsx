import { useFetch, useStyles } from "./custom-hook";

import { Cake } from "./types";
import { Cakes } from "./Cakes";

export const CakeViewer: React.FC<{
  cakes: Cake[];
  setCakes: React.Dispatch<React.SetStateAction<Cake[]>>;
}> = ({ cakes, setCakes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {cakes && cakes.length > 0 ? (
        <Cakes cakes={cakes} setCakes={setCakes} />
      ) : (
        <h1>Your list is empty.</h1>
      )}
    </div>
  );
};
