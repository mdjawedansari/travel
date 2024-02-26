import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/5.jpg";
import mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData 
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boosts a volcano inside a lake inside on island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        img1={mountain1}
        img2={mountain2}
      />

      <DestinationData 
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You'ill start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small stone halfway up the trail, where you can take a bfreak and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you're made it back down, head straight to the beach for a refreshing, well-deserved swim."
        img1={mountain3}
        img2={mountain4}
      />
    </div>
  )
}

export default Destination;