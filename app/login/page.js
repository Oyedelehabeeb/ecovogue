// import Link from "next/link";
// import SigninButton from "../_components/SigninButton";
// import Image from "next/image";
// import logo from "@/public/logo.png";

// export const metadata = {
//   title: "Sign In",
//   description: "Sign in to your account",
// };

// export default function SignInPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex min-h-screen">
//         <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//           <div className="max-w-md w-full space-y-8">
//             <div>
//               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                 Welcome back
//               </h2>
//               <p className="mt-2 text-center text-sm text-gray-600 mb-8">
//                 Continue with Google to access your account
//               </p>
//             </div>

//             <div>
//               <SigninButton />
//             </div>
//           </div>
//         </div>

//         <div className="hidden lg:block relative w-full h-[600px] flex-1">
//           <Image
//             src={logo}
//             alt="login-image"
//             fill
//             className="inset-0 h-full w-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import SigninButton from "../_components/SigninButton";
import loginBg from "@/public/logo.png";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Section - Login Form */}
      <div className="w-full lg:w-[47%] flex items-center justify-center px-6">
        <div className="max-w-md w-full space-y-8 p-8">
          <div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mb-8">
              Continue with Google to access your account
            </p>
          </div>

          <div className="flex justify-center">
            <SigninButton />
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden lg:block w-full relative">
        <Image
          src={loginBg}
          alt="Login background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
