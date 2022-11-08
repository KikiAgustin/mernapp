import Content1 from "../../molecules/FooterContent/content1";
interface FooterItemProps {
  title: string;
}

export default function FooterItem(props: FooterItemProps) {
  const { title } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <Content1 />
    </div>
  );
}
