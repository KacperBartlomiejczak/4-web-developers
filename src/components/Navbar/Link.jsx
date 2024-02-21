export default function Link({ linkName, linkProvider, ...props }) {
  return (
    <li>
      <a href={linkProvider} className="nav__link" {...props}>
        {linkName}
      </a>
    </li>
  );
}
