// import { LuUserRound } from "react-icons/lu";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle
// } from "@/pages/activities/ConfirmPopUp";
// import { phasesUser } from "@/constants/UserProfileItems";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { HiOutlineClock } from "react-icons/hi2";
// import { useParams } from "react-router-dom";
// import { BookCard1 } from "@/types/BookCardTypes";
// import { useNavigate } from "react-router-dom";

// interface ReviewPopupProps {
//   packagephase?: BookCard1;
//   onClose?: () => void;
//   onClick?: () => void;
// }

// const ReviewPopup: React.FC<ReviewPopupProps> = ({ onClose }) => {
//   const { id } = useParams<{
//     id: string;
//     place: string;
//   }>();

//   const navigate = useNavigate();
//   const selectedUser = phasesUser.find((blog) => blog.Id === id);

//   const handleClose = () => {
//     onClose?.();
//     navigate("/userprofile");
//   };

//   return (
//     <div className="border-4">
//       <Dialog open={true} onOpenChange={(isOpen) => !isOpen && handleClose?.()}>
//         <DialogContent className="bg-white py-[66px] border-[1px] border-black min-w-[345px] w-[345px] xs400:w-auto lg:w-[862px] min-h-[454px] focus:outline-none flex items-center justify-center">
//           <DialogHeader className="bg-[#F3F3F3] md:bg-white w-[308px] mt-[15px] sm:mt-[0px] sm:w-[559px] md:w-[662px]">
//             <DialogTitle className="text-16 lg:text-24 font-productsans text-start">
//               <img
//                 src={selectedUser?.imageuser}
//                 className="w-full max-h-[324px] p-[9px] md:p-0"
//               />
//             </DialogTitle>
//             <div className="bg-[#F3F3F3] py-[9px] sm:py-[39px] px-[9px] sm:px-[30px] mt-[16px] md:mt-[40px]">
//               <h1 className="text-14 md:text-16 font-productsans text-start">
//                 {selectedUser?.place}
//               </h1>
//               <div className="mt-[16px] sm:mt-[28px] flex flex-col gap-[28px] md:gap-[20px]">
//                 <div className="flex flex-col-reverse sm:flex-row justify-between w-full md:py-[8px] gap-[16px]">
//                   {/* date, time */}
//                   <div className="w-full sm:w-[135px] flex flex-row sm:flex-col gap-[8px] justify-between ">
//                     {/* date */}
//                     <div className="flex flex-row gap-[4px]">
//                       <FaRegCalendarAlt className="w-[12px]" />
//                       <h1 className="text-12 font-productsansregular">
//                         {selectedUser?.date}
//                       </h1>
//                     </div>
//                     {/* time */}
//                     <div className="flex flex-row sm:items-center gap-[8px]">
//                       <HiOutlineClock className="w-[9px]" />
//                       <h1 className="text-12 font-productsansregular">
//                         {selectedUser?.time}
//                       </h1>
//                     </div>
//                   </div>

//                   {/* status, book no */}
//                   <div className="text-12 font-productsansregular flex flex-col items-start sm:gap-[8px]">
//                     <h1>
//                       Booking Number: <span> {selectedUser?.bookingNO}</span>
//                     </h1>
//                     <h1>
//                       Status: <span>{selectedUser?.status}</span>
//                     </h1>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="w-full flex flex-col sm:flex-row gap-[12px]">
//                     {/* Adult price */}
//                     <div className="flex flex-col w-full">
//                       <div className="flex flex-row items-center justify-between">
//                         <div className="flex flex-row gap-[4px] text-12 items-center justify-center">
//                           <h1 className="font-productsansregular">Adult</h1>
//                           <LuUserRound
//                             className="w-[9px] h-[10px]"
//                             strokeWidth={2.5}
//                           />
//                           <h1 className="font-productsansregular">$300</h1>
//                         </div>
//                       </div>
//                       <div className="border-t border-black mt-[4px] mb-[8px]"></div>
//                       <div className="flex flex-row text-12 font-productsansregular items-center justify-between">
//                         <h1>Sub total Price</h1>
//                         <h1>${selectedUser?.adultPrice}</h1>
//                       </div>
//                     </div>

//                     {/* Children price */}
//                     <div className="w-full">
//                       <div className="flex flex-row items-center justify-between">
//                         <div className="flex flex-row gap-[4px] text-12 items-center justify-center">
//                           <h1 className="font-productsansregular">Children</h1>
//                           <LuUserRound
//                             className="w-[9px] h-[10px]"
//                             strokeWidth={2.5}
//                           />
//                           <h1 className="font-productsansregular">$200</h1>
//                         </div>
//                       </div>
//                       <div className="border-t border-black mt-[4px] mb-[8px]"></div>
//                       <div className="flex flex-row text-12 font-productsansregular items-center justify-between">
//                         <h1>Sub total Price</h1>
//                         <h1>${selectedUser?.childPrice}</h1>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border-t border-black mt-[8px] sm:mt-[22px] mb-[20px]"></div>
//                   {/* Total Price */}
//                   <div className="flex flex-row text-14 font-productsans items-center justify-between mt-4">
//                     <h1 className="text-12">Total</h1>
//                     <h1 className="text-12">${selectedUser?.totalPrice}</h1>
//                   </div>
//                   <div className="border-t border-black mt-[18px] mb-[28px] sm:mb-[20px]"></div>
//                 </div>
//               </div>
//             </div>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };
// export default ReviewPopup;
