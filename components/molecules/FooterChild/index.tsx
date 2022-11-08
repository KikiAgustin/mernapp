interface FooterChildProps {
  title: string;
}

export default function FooterChild(props: FooterChildProps) {
  const { title } = props;
  return (
    <li className="mb-6">
      <a href="" className="text-lg color-palette-1 text-decoration-none">
        {title}
      </a>
    </li>
  );
}
