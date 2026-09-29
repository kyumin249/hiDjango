import './NavBar.css';
import { useState } from 'react';


function NavBar() {
  const [isChecked, setIsChecked] = useState(false);

  // 2. handleCheck 함수를 컴포넌트 내부로 이동 및 클릭 토글 로직 적용
  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <nav className="hello">
      <ul>
        <li onClick={handleCheck}>{isChecked && <a href="/">My Home</a>}My Home</li>
        <li onClick={handleCheck}>{isChecked && <a href="/info/">My Info</a>}My Info</li>
        <li onClick={handleCheck}>{isChecked && <a href="/diary/">My Develop Diary</a>}My Develop Diary</li>
        <li onClick={handleCheck}>{isChecked && <a href="/item/">My Develop Item</a>}My Develop Item</li>
      </ul>
    </nav>
  );
}

export default NavBar;