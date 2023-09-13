import Heading from "./components/Heading";
import FlightForm from "./components/form/FlightForm";

export default function Home() {
  return (
    <div className="parallax-container">
          <Heading 
            title="Millions of cheap flights. One simple search."
            subtitle="Search flights and hotels and join them on the adventure."
          />
          <div className="bg-sky-300 w-10/12 mx-auto">
            <FlightForm />
          </div>
    </div>
  )
}
