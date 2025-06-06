import UserCard from "@/components/user-card";
import { dataUser } from "@/mock/data-user";


export default function UserPages() {
  const data = dataUser;
  return (
    <div id="container" className="flex h-[100vh] text-black"> 
      <section
        id="content"
        className="bg-white w-[85%] flex-1 p-[30px] overflow-y-auto"
      >
        <input
          type="search"
          placeholder="Cari User"
          className="w-full p-3 border rounded-lg mb-7 text-base"
        ></input>
        <div className="flex flex-col gap-4">
          {data.map((employee, index) =>(
            <UserCard
            key={index}
          fullname={employee.fullname}
          email={employee.email}
          role={employee.role}
          status={employee.status}>
          </UserCard>
          ) )}
        </div>
      </section>
      <button className="fixed right-5 bottom-5 w-[42px] h-[42px] rounded-lg text-[26px] bg-[#e0e0e0] cursor-pointer">
        +
      </button>
    </div>
  );
}