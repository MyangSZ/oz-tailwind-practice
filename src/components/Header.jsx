export default function Header() {
  return (
    <header className="flex justify-between items-center py-10px px-20px bg-[black] h-[60px]">
      <h2 className="text-[25px] font-[600] pl-[10px]">OZ코딩스쿨</h2>
      <ul className="flex fustify-center items-center gap-[20px]">
        <li className="list-none text-[13px] font-normal">로그인</li>
        <li className="list-none text-[13px] font-normal">회원가입</li>
        <li className="list-none text-[13px] font-normal">내클래스</li>
      </ul>
    </header>
  );
}
