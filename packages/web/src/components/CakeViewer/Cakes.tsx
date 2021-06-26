import { sendDeleteCakeRequest, useStyles } from "./custom-hook";

import { Cake } from "./types";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Rating from "@material-ui/lab/Rating";

export const Cakes: React.FC<{
  cakes: Cake[];
  setCakes: React.Dispatch<React.SetStateAction<Cake[]>>;
}> = ({ cakes, setCakes }) => {
  const classes = useStyles();

  return (
    <>
      <GridList cellHeight={180} className={classes.gridList}>
        {cakes.map((cake: Cake, index: number) => (
          <GridListTile key={index} data-testid={cake.id}>
            <img
              src={cake.imageUrl}
              alt={cake.name}
              data-testid={`image-${cake.id}`}
            />

            <GridListTileBar
              title={cake.name}
              subtitle={<span>by: {cake.comment}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                  <Rating
                    name="read-only"
                    data-testid={`rating-${cake.id}`}
                    value={cake.yumFactor}
                    readOnly
                  />
                  <DeleteCake id={cake.id} setCakes={setCakes} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

function DeleteCake(props: any) {
  return (
    <Grid item xs={8}>
      <DeleteForeverIcon
        onClick={(e: any) => {
          sendDeleteCakeRequest(props.id, props.setCakes);
        }}
      />
    </Grid>
  );
}
