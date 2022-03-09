import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getParkingLots } from "../redux/action/action";
import { ParkingComponent } from "./ParkingComponent";

export const ParkingLot = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParkingLots());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ParkingComponent />
    </div>
  );
};
