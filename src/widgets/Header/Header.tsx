type HeaderProps = {
  text: string;
  onChecked: () => void;
  onUnChecked: () => void;
  saveCallback?: () => void;
};

const Header = ({ text, saveCallback, onChecked, onUnChecked }: HeaderProps) => {
  return (
    <header>
      {text}
      <label>
        Выделить все
        <input
          type="checkbox"
          onChange={(event) => (event.target.checked ? onChecked() : onUnChecked())}
        />
      </label>
      <button onClick={saveCallback}>Сохранить</button>
    </header>
  );
};

export default Header;
