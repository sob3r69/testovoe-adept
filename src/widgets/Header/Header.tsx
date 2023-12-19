type HeaderProps = {
  text: string;
  selectCallback?: () => void;
  saveCallback?: () => void;
};

const Header = ({ text, saveCallback }: HeaderProps) => {
  return (
    <header>
      {text}
      <label>
        Выделить все
        <input type="checkbox" />
      </label>
      <button onClick={saveCallback}>Сохранить</button>
    </header>
  );
};

export default Header;
