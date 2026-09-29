import './NavBar.css';
import { useState } from 'react';

function NavBar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <nav className="hello">
      <ul>
        {/* isChecked가 true일 때는 <a> 태그를, false일 때는 일반 글자 출력 */}
        <li onClick={handleCheck}>
          {isChecked ? <a href="/">My Home</a> : 'My Home'}
        </li>
        <li onClick={handleCheck}>
          {isChecked ? <a href="/info/">My Info</a> : 'My Info'}
        </li>
        <li onClick={handleCheck}>
          {isChecked ? <a href="/diary/">My Develop Diary</a> : 'My Develop Diary'}
        </li>
        <li onClick={handleCheck}>
          {isChecked ? <a href="/item/">My Develop Item</a> : 'My Develop Item'}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;