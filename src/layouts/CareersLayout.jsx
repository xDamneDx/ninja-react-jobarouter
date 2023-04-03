import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Sleep over your phone and make cute snoring noises.</p>

      <Outlet />
    </div>
  );
}
