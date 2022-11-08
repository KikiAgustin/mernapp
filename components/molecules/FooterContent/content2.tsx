import FooterChild from "../FooterChild";

export default function FooterContent() {
  return (
    <ul className="list-unstyled">
      <FooterChild title="Refund Policy" />
      <FooterChild title="Unlock Rewards" />
      <FooterChild title="Live Chatting" />
    </ul>
  );
}
