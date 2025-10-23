import { Maindata } from "./maindata";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Articles() {
  const { maindataId } = useParams();
  const data = Maindata.filter((item) => item.id === parseInt(maindataId));
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [maindataId]);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="h-auto w-full">
      <div></div>
      <div className="flex flex-col items-center justify-center w-full px-4">
        {data.map((items) => (
          <div key={items.id} className="w-full">
            <div className="text-3xl sm:text-4xl md:text-5xl font-semibold w-full max-w-3xl text-center m-auto p-4">
              {items.header}
            </div>

            <div>
              <img
                src={items.img} alt="" className="w-full max-w-3xl mx-auto  mt-10 px-4 rounded-2xl" />
            </div>

            <div className="text-lg sm:text-xl font-medium w-full max-w-3xl mx-auto mt-5 px-4"> {items.header2} </div>
            <div className="text-[19px] text-[#333] w-full max-w-3xl mx-auto mt-2 mb-2 px-4">{items.body} </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">{items.list} </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list2}
            </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list3}
            </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list4}
            </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list5}
            </div>

            <div className="text-lg sm:text-xl font-medium w-full max-w-3xl mx-auto mt-5 px-4">
              {items.header3}
            </div>

            <div className="text-[19px] text-[#333] w-full max-w-3xl mx-auto mt-2 mb-2 px-4">
              {items.body}
            </div>

            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list}
            </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list2}
            </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list3}
            </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list4}
            </div>
            <div className="font-semibold w-full max-w-3xl mx-auto p-1 px-4 text-[#333]">
              {items.list5}
            </div>

            <img
              src="/pexels-suzy-hazelwood-2966196 1 (1).png"
              alt=""
              className="w-full max-w-3xl mx-auto rounded-2xl mt-10 px-4"
            />

            <div className="text-lg sm:text-xl font-medium w-full max-w-3xl mx-auto mt-5 px-4">
              {items.header3}
            </div>

            <div className="font-semibold w-full max-w-3xl mx-auto text-[#333] mt-4 px-4 text-[17px] leading-relaxed">
              Proin faucibus nec mauris a sodales, sed elementum mi tincidunt.
              Sed eget viverra egestas nisi in consequat. Fusce sodales augue a
              accumsa Cras sollicitudin, le ligula, porttitor eu, consequat
              vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit lobortis arcu enim urna adipiscing praesent velit
              viverra sit semper lorem eu cursus ve of all hendrerit elementum
              morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi
              dignissim at ante massa mattis magna sit amet purus gravida quis
              blandit turpis..
            </div>
          </div>
        ))}
      </div>

      <br />
      <div className="h-[40px] w-[160px] flex bg-[#AD343E] rounded-2xl mx-auto text-white font-semibold hover:text-[#AD343E] hover:bg-white transition">
        <Link to="/MainPage" className="m-auto">
          Back to page
        </Link>
      </div>
      <br />
    </div>
  );
}
