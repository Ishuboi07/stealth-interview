import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-evenly h-screen gap-y-6 ">
      <div className="h-[90vh] w-[390px] bg-background border border-black overflow-x-hidden">
        <div className="h-[56px] bg-white flex  items-stretch flex-row">
          <div className="flex items-center">
            <Image
              src="/assets/arrow-left.svg"
              alt="left arrow"
              width={25}
              height={25}
              className=""
            />
          </div>

          <div className="flex flex-col justify-evenly items-center ">
            <h1 className="text-[14px] font-extrabold text-text">Checkout</h1>
            <h2 className="text-gray text-[10px] uppercase font-bold">
              popeyes | jp nagar
            </h2>
          </div>
        </div>
        {[
          {
            image: "/assets/burger.png",
            name: "Caribbean Spicy Zinger Burger",
            calories: "350 Kcal",
            price: "₹ 319",
          },
          {
            image: "/assets/burger2.png",
            name: "Canjun Veg Burger",
            calories: "250 Kcal",
            price: "₹ 219",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-card h-[100px] flex flex-row items-center p-[10px] m-[10px]"
          >
            <div className="aspect-square h-[80px]">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col ml-4 justify-between h-full w-full">
              <div className="">
                <p className="text-[14px] font-extrabold text-text ">
                  {item.name}
                </p>
                <p className="text-[10px] text-gray font-bold">
                  {item.calories}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-extrabold">{item.price}</p>
                <p>some ui design</p>
              </div>
            </div>
          </div>
        ))}
        <div className="">
          <p className="text-text font-extrabold ml-[10px]">
            Frequently Ordered
          </p>
          carousel
        </div>
        <div className="mx-[14px] bg-white h-[146px] rounded-card flex flex-col  justify-around p-[14px]">
          <div className="flex flex-row gap-4">
            <div className="aspect-square w-8 ">
              <Image
                src="/assets/maps.svg"
                alt="map"
                width={100}
                height={100}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] font-extrabold text-text">Deliver to</p>
              <p className="text-[10px] text-gray font-bold">
                1st Main Road, JP Nagar, Bangalore
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="aspect-square w-8 ">
              <Image
                src="/assets/bill.svg"
                alt="map"
                width={100}
                height={100}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col">
                <p className="text-[14px] font-extrabold text-text">
                  Total Bill
                </p>
                <p className="text-[10px] text-gray font-bold">
                  Including Taxes
                </p>
              </div>
              <p className="text-[14px] font-extrabold">Rs 538</p>
            </div>
          </div>
        </div>
        <button className="h-[44px] rounded-card bg-primary text-white w-[90%] text-[16px] mx-[14px] mt-10 font-bold">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
