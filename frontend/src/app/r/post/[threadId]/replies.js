"use client"
import Image from "next/image";
import TimeAgo from "@/components/timeago";

const Post = (props) => {
  return (
    <div>
      <div className="max-w-2xl p-4 mx-auto">
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
          </div>
        <div>
          <h1 className="font-semibold text-sm md:text-lg my-2">{props.title}</h1>
          <div>
          <h1 className="font-normal text-sm my-2">{props.overView}</h1>
        </div>
        </div>
      </div>
      <hr className="max-w-2xl mx-auto border-0 border-b-sm border-solid border-b-gray-300" />
    </div>
    
  );
};
export default Post;
