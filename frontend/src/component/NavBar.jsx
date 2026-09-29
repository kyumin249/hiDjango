import { useState } from 'react';

function NavBar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <nav className="hello">
      <ul>
        {/* isChecked가 true일 때 <a> 태그로 전환 */}
        <li onClick={handleCheck}>
          {isChecked ? <a href="http://localhost:8000/">My Home</a> : 'My Home'}
        </li>
        <li onClick={handleCheck}>
          {isChecked ? <a href="http://localhost:8000/info/">My Info</a> : 'My Info'}
        </li>
        <li onClick={handleCheck}>
          {isChecked ? <a href="http://localhost:8000/diary/">My Develop Diary</a> : 'My Develop Diary'}
        </li>
        <li onClick={handleCheck}>
          {isChecked ? <a href="http://localhost:8000/item/">My Develop Item</a> : 'My Develop Item'}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;