import ReacedItem from "../../molecules/ReacedItem";
import ReacedLine from "../../molecules/ReacedLine";

export default function Reaced() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReacedItem title="290M+" desc="Players Top Up" />
          <ReacedLine />
          <ReacedItem title="12.500" desc="Games Available" />
          <ReacedLine />
          <ReacedItem title="99,9%" desc="Happy Players" />
          <ReacedLine />
          <ReacedItem title="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
