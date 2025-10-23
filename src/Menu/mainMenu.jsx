import { Datamenu } from "./mainMenudata";
import { useState, useEffect } from "react";

export default function MainMenu1() {
  const [food, setFood] = useState(Datamenu);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  function setBreakfast() {
    const search = Datamenu.filter((items) => items.category === "breakfast");
    setFood(search);
  }
  function setMainmeal() {
    const search = Datamenu.filter((items) => items.category === "maindish");
    setFood(search);
  }
  function setDrinks() {
    const search = Datamenu.filter((items) => items.category === "drink");
    setFood(search);
  }
  function setDessert() {
    const search = Datamenu.filter((items) => items.category === "dessert");
    setFood(search);
  }
  function all() {
    const alldata = Datamenu;
    setFood(alldata);
  }

  return (
    <div className="min-h-screen px-[20px]">
      <div>
        <p className="text-[40px] sm:text-[50px] md:text-[70px] text-center mt-[20px]">
          Our Menu
        </p>
        <p className="text-center text-[#333] font-[500] text-sm sm:text-base">
          We consider all the drivers of change gives you the components <br />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-[40px]">
        <button
          onClick={all} className="h-[45px] w-[130px] text-[#fff] hover:cursor-pointerc font-[500] rounded-[25px] bg-[#AD343E] border border-gray-400 cursor-pointer">
          All
        </button>
        <button
          onClick={setBreakfast} className="h-[45px] w-[130px] text-[#333] hover:cursor-pointerc font-[500] rounded-[25px] border border-gray-400 hover:bg-[#AD343E] hover:text-white transition">
          Breakfast
        </button>
        <button
          onClick={setMainmeal} className="h-[45px] w-[130px] text-[#333] hover:cursor-pointerc font-[500] rounded-[25px] border border-gray-400 hover:bg-[#AD343E] hover:text-white transition">
          Main Dishes
        </button>
        <button
          onClick={setDrinks}
          className="h-[45px] w-[130px] text-[#333] font-[500] rounded-[25px] hover:cursor-pointerc border border-gray-400 hover:bg-[#AD343E] hover:text-white transition">
          Drinks
        </button>
        <button
          onClick={setDessert} className="h-[45px] w-[130px] text-[#333] hover:cursor-pointerc font-[500] rounded-[25px] border border-gray-400 hover:bg-[#AD343E] hover:text-white transition">
          Desserts
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[30px] mt-[50px] px-4 justify-center">
        {food.map((item) => (
          <div key={item.id} className=" m-auto">
            <div>
              <img
                src={item.img} alt="" className="h-[250px] w-full max-w-[270px] rounded-t-[20px] object-cover"/>
            </div>

            <div className="w-full max-w-[270px] border-[rgb(128,128,128,40%)] border-2 rounded-b-[20px] border-t-0 mt-[-20px] p-[10px]">
              <br />
              <div className="text-center mt-[20px] text-[#AD343E] text-[19px] font-[510]">
                {item.Price}
              </div>
              <div className="text-center mt-[10px] text-[17px] font-[500] text-[#333]">
                {item.Meal}
              </div>
              <div className="text-center mt-[10px] text-[15px] text-[#333]">
                {item.Ingridients}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
