"use client";

import React from "react";
import { statusMessages } from "@/types/enums/statusMessages";

interface MessageCardProps {
  title: string;
  dateMsg: Date;
  timeMsg: string;
  description: string;
  statusMsg: statusMessages;
  onDelete: () => void;
}

const MessageCard: React.FC<MessageCardProps> = ({ title, description, dateMsg, timeMsg, statusMsg, onDelete }) => {
  const formattedDate = dateMsg.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  const formattedTime = new Date(`1970-01-01T${timeMsg}Z`).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-[#20315C] justify-between p-8 rounded-xl mb-6">
      <div className="flex justify-between">
        <div className="flex mb-4">
          {statusMsg == statusMessages.INFO ? (
            <img src="/info-icon.svg" alt="info"/>
          ) : statusMsg == statusMessages.WARNING ? (
            <img src="/warning-icon.svg" alt="warning"/>
          ) : (
            <img src="/default-icon.svg" alt="default"/>
          )}
          <div className="ml-3"> 
            <h2 className="text-white text-xl font-bold">{title}</h2>
            <p className="text-[#BBC9EC] text-sm">
              {formattedDate} {formattedTime}
            </p>
          </div>
        </div>
        
        <button onClick={onDelete} className="h-[16px] mt-1.5">
          <img src="/close-icon.svg" alt="close" className="cursor-pointer"/>
        </button>
      </div>
      <p className="text-[#BBC9EC] text-sm  ml-7 w-[180px]  md:w-[280px] lg:w-[350px]">{description}</p>
    </div>
  );
};

export default MessageCard;