import { Dialog, DialogContent } from "@/pages/activities/ConfirmPopUp";
import user1 from "/images/userprofile/user1.png";
import { BiEditAlt } from "react-icons/bi";

import { Input } from "@/components/ui/input";
import Book_Button from "../Book_Button";

interface EditProfileProps {
  open: boolean;
  onClose: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ open, onClose }) => {
  return (
    <div className="border-4">
      <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
        <DialogContent className="bg-white px-[20px] md:px-[52px] py-[58px] md:py-[44px] w-[345px] sm:w-[95%] min-w-[345px] lg:w-[916px] border-[1px] border-black min-h-[454px] focus:outline-none flex items-center justify-center">
          <div className="w-[782px] h-full flex flex-col gap-[30px] md:gap-[50px]">
            {/* profile image part */}
            <div className="flex flex-row items-center gap-[18px]">
              <div className="relative w-[77px] ">
                <img src={user1} className="w-full " />
                <div className="cursor-pointer absolute bottom-0 right-0 rounded-full w-[27px] h-[27px] bg-[#D9D9D9] flex items-center justify-center">
                  <BiEditAlt className="w-[16px] h-[16px]" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] font-productsans ">
                <h1 className="text-16">Ema Rawles</h1>
                <h1 className="opacity-50 text-12">emarawles@gmail.com</h1>
              </div>
            </div>

            {/* detail part */}
            <div>
              <div className="font-productsansregular text-[#919090] flex flex-col gap-[30px]">
                {/* input */}
                <div className="flex flex-col gap-[20px] sm:gap-[30px]">
                  <div className="w-full flex flex-col sm:flex-row justify-between gap-[20px] sm:gap-[30px]">
                    <div className="space-y-[12px]">
                      <h1>First Name</h1>
                      <Input
                        className="min-w-[305px] lg:min-w-[376px] w-full h-[48px] border-2 focus:outline-none"
                        id="firstname"
                        defaultValue="Ema Rawles"
                      />
                    </div>
                    <div className="space-y-[12px]">
                      <h1>Last Name</h1>
                      <Input
                        className="min-w-[305px] lg:min-w-[376px] w-full h-[48px] border-2 focus:outline-none"
                        id="lastname"
                        defaultValue="Ema Rawles"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col sm:flex-row justify-between gap-[20px] sm:gap-[30px]">
                    <div className="space-y-[12px]">
                      <h1>Email</h1>
                      <Input
                        className="min-w-[305px] lg:min-w-[376px] w-full h-[48px] border-2 focus:outline-none"
                        id="email"
                        defaultValue="emarowles@gmail.com"
                      />
                    </div>
                    <div className="space-y-[12px]">
                      <h1>Phone No</h1>
                      <Input
                        className="min-w-[305px] lg:min-w-[376px] w-full h-[48px] border-2 focus:outline-none"
                        id="PhoneNo"
                        defaultValue="091 2365478"
                      />
                    </div>
                  </div>
                </div>
                {/* save button */}
                <Book_Button
                  text="SAVE"
                  textColor="text-white hover:text-black"
                  width="w-[211px] text-14"
                  height="h-[47px]"
                  btn4="btn-review"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfile;
