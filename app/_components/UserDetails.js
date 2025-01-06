// "use client";

// import Image from "next/image";
// import { BsPersonCircle } from "react-icons/bs";
// import { signIn, signOut } from "next-auth/react";

// export default function UserDetails({ session }) {
//   if (!session?.user) {
//     return (
//       <button
//         onClick={() => signIn("google")}
//         className="flex items-center gap-2 text-sm text-customGreen hover:text-customGreen/80"
//       >
//         <BsPersonCircle className="h-5 w-5" />
//         Sign In
//       </button>
//     );
//   }

//   return (
//     <div className="flex gap-4 items-center group relative">
//       {session.user.image ? (
//         <div className="relative h-8 w-8 rounded-full overflow-hidden">
//           <Image
//             src={session.user.image}
//             alt="Profile picture"
//             fill
//             className="object-cover"
//             referrerPolicy="no-referrer"
//           />
//         </div>
//       ) : (
//         <BsPersonCircle className="h-8 w-8 text-customGreen" />
//       )}

//       <div className="flex flex-col">
//         <span className="text-sm text-customGreen">{session.user.name}</span>
//         <button
//           onClick={() => signOut()}
//           className="text-xs text-gray-500 hover:text-customGreen"
//         >
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// }
