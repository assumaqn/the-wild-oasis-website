import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Cabin({ cabin }) {
  const [setting, booking] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-[1.5fr_1fr] border border-primary-800 min-h-[400px]">
      <DateSelector setting={setting} booking={booking} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Cabin;
