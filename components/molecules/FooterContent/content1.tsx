import FooterChild from "../FooterChild";

export default function FooterContent() {
  return (
    <ul className="list-unstyled">
      <FooterChild title="About Us" />
      <FooterChild title="Press Release" />
      <FooterChild title="Terms of Use" />
      <FooterChild title="Privacy & Policy" />
    </ul>
  );
}
