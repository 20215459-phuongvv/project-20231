'use client'
import { faArrowLeft, faComment, faEye,faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ToggleButton from "./togglebutton";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import axios from "@/utils/axios"
const Item = (props) => {

  return (
    <div
      className="flex items-center 
        bg-neutral-200
        mr-4 py-1 px-2 
        rounded-3xl cursor-pointer"
    >
      <FontAwesomeIcon
        icon={props.icon}
        style={{
          color: "black",
          width: 20,
          height: 20,
          marginRight: 4,
          color: "#33363F",
        }}
      />
      <p className="text-sm">{`${props.amout} ${props.text}`}</p>
    </div>
  );
};

const Post_ChiTiet = (props) => {
  console.log(props.id)
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
              <div className="mr-2">
                <Image src="/arrow-go-back.svg" alt="Back Arrow" width={30} height={30} />
              </div>
              <span className="text-lg">Quay lại</span>
          </button>
        <div className="flex justify-between items-center">
          <div className="flex items-center">

            <Image
              className="cursor-pointer"
              src={props.linkImg}
              alt="avatar"
              width={60}
              height={60}
            />
            <p className="font-bold mx-2 cursor-pointer hover:underline">
              {props.name}
            </p>
            <p>{props.created}</p>
          </div>
          <ToggleButton threadId={props.id}/>
        </div>
        <div>
          <h1 className="font-bold text-3xl my-2">{props.title}</h1>
        </div>
        <div>
          <h1 className="font-normal text-sm my-2">{props.overView}</h1>
        </div>
        <div className="flex mt-2">
          <Item icon={faComment} amout={props.comment} text="Bình luận" />
          <Item icon={faEye} amout={props.view} text="Lượt xem" />
          <div className="ml-auto">
            {/* Additional content */}
          </div>
        </div>

      </div>
      <div className="bg-gray-400 h-0.5 max-w-xl mx-auto"></div>
  </div>

  );
};

export default Post_ChiTiet;
