type HeaderProps = {
  title: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({ title }: HeaderProps) => <h1 className="title">{title}</h1>;

export default Header;
