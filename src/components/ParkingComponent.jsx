import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getParkingSlots } from "../redux/action/action";

export const ParkingComponent = () => {
  const { parkingLots } = useSelector((state) => state.lots);
  const { parkingSlots } = useSelector((state) => state.slots);
  let vType;
  if (parkingSlots) {
    vType = parkingSlots.vType;
  }
  console.log(vType);
  const dispatch = useDispatch();

  const handleCategory = (el, id) => {
    if (el.totalSlots === el.occupiedSlots) {
      alert("Parking Lot full");
    } else {
      alert(`Charges for ${el.category} is ${el.perHourRate} RS per hour.`);
    }
  };

  return (
    <>
      <Selector>
        <label>Select Parking Lot : </label>
        <select id="parkingLot">
          <option value="">--Select Lot--</option>
          {parkingLots ? (
            parkingLots.map((lot) => (
              <option key={lot._id} value={lot._id}>
                {lot.lotName}
              </option>
            ))
          ) : (
            <option>...Loading</option>
          )}
        </select>
        <Button
          onClick={() => {
            const id = document.getElementById("parkingLot").value;
            dispatch(getParkingSlots(id));
          }}
        >
          Select Lot
        </Button>
      </Selector>
      {vType ? (
        <div>
          {vType.map((el) => (
            <div key={el._id}>
              <div>Vehicle Type : {el.category}</div>
              <div>Total Slots: {el.totalSlots}</div>
              <div>Occupied Slots: {el.occupiedSlots}</div>
              <button onClick={() => handleCategory(el, el._id)}>
                Select Category
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

const Selector = styled.div``;

const Button = styled.button``;
