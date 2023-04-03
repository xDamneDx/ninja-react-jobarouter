import { useLoaderData } from "react-router-dom";

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(` http://localhost:4000/careers/${id}`);

  return res.json();
};

export default function CareerDetails() {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="Details">
        <p>
          Peer out window, chatter at birds, lure them to mouth. Sitting in a
          box. Sees bird in air, breaks into cage and attacks creature stuff and
          things, kitty poochy and i love cats i am one wake up scratch humans
          leg for food then purr then i have a and relax meoooow catch mouse and
          gave it as a present for run in circles. You are a captive audience
          while sitting on the toilet, pet me see brother cat receive pets,
          attack out of jealousy, scratch at the door then walk away or step on
          your keyboard while you're gaming and then turn in a circle
          humans,humans, humans oh how much they love us felines we are the
          center of attention they feed, they clean but annoy kitten brother
          with poking chirp at birds.
        </p>
      </div>
    </div>
  );
}
