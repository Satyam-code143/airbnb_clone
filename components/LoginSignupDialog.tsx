"use client";

import { FC, ReactPropTypes } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "@styles/components.css";

interface LoginSignUpDialogProps {
  openDialog: boolean;
  setFlag: (value: boolean) => void;
}

const LoginSignUpDialog: FC<LoginSignUpDialogProps> = ({
  openDialog,
  setFlag,
}) => {
  return (
    <div className="backdrop flex items-center justify-center">
      <div className="bg-white md:w-[568px] md:h-[658px] rounded-xl p-4">
        {/* Content of the dialog box */}
        <div
          onClick={() => setFlag(false)}
          className="rounded-full hover:bg-gray-100 flex cursor-pointer h-6 w-6 items-center"
        >
          <XMarkIcon className="h-5 w-5 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpDialog;
