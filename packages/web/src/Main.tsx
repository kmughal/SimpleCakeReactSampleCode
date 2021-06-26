import { AddCakeModal } from "./components/AddCakeModal/index";
import { CakeViewer } from "./components/CakeViewer/index";
import { useFetch } from "./components/CakeViewer/custom-hook";

export const Main = (): JSX.Element => {
  const { cakes, setCakes } = useFetch();
  return (
    <>
      <h1>My Cakes</h1>
      <AddCakeModal setCakes={setCakes} />
      <CakeViewer cakes={cakes} setCakes={setCakes} />
    </>
  );
};
