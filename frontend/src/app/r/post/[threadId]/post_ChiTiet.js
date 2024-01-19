'use client'
import Image from "next/image";
import ToggleButton from "./togglebutton";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import TimeAgo from "@/components/timeago";
import { Icons } from "@/components/icons";

const Post_ChiTiet = (props) => {
  const router = useRouter(); 
  const handleBack = () => {
    router.push("/"); 
  };

  return (
    <div>
      <div className="max-w-2xl p-4 mx-auto">
        <button
              className="flex items-center  text-black py-2 px-3 my-2 mx-1 rounded-full focus:outline-none hover:bg-stone-100 transition"
              onClick={handleBack}
            >
              <Icons.back className="mr-2 h-4 w-4"/>
              <div>

              </div>
              <span className="text-lg">Quay lại</span>
          </button>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                className="cursor-pointer rounded-full"
                src={props.linkImg}
                alt="avatar"
                width={60}
                height={60}
              />
              <div className="flex flex-col ml-2">
                <p className="font-bold cursor-pointer hover:underline">
                  {props.name}
                </p>
                <p>
                  <TimeAgo created={props.created} />
                </p>
              </div>
            </div>
            <div className="flex flex-col ">
              <p className="mb-2">Tóm Tắt</p>
              <ToggleButton threadId={props.id} />
            </div>
          </div>
        <div>
          <h1 className="font-bold text-3xl my-2">{props.title}</h1>
        </div>
        <div>
          <h1 className="font-normal text-sm my-2">{props.overView}</h1>
        </div>
        <div className="flex mt-2">
          <div className="flex items-center  bg-neutral-200 mr-4 py-1 px-2 rounded-3xl cursor-pointer">
            <Icons.comment/>
            <p className="text-sm">{`${props.comment} Bình luận`}</p>
          </div>
          <div className="flex items-center  bg-neutral-200 mr-4 py-1 px-2 rounded-3xl cursor-pointer">
            <Icons.eye/>
            <p className="text-sm">{`${props.view} Lượt xem`} </p>
          </div>
        </div>

      </div>
      <div className="bg-gray-400 h-0.5 max-w-xl mx-auto"></div>
  </div>

  );
};

export default Post_ChiTiet;