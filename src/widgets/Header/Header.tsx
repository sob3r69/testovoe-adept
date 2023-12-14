type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return (
    <header>
      {text}
      <label>
        Выделить все
        <input type="checkbox" />
      </label>
    </header>
  );
};

export default Header;
