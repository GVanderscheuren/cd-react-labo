import '../style/components/todo-app-header.scss'

const Header = () => {
  return (
    <header className="c-todo-app-header">
      <h1 className="c-todo-app-header__title">Hello {'Marty'}</h1>
      <h2 className="c-todo-app-header__subtitle">You have {'3'} todo's</h2>
    </header>
  );
};

export default Header;
