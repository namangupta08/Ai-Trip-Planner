import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  const login = useGoogleLogin({
    onSuccess: (resp) => getUserProfile(resp),
    onError: (resp) => console.log(resp),
  });

  const getUserProfile = (tokeninfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokeninfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokeninfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log("success222", resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      });
  };

  
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-500">
      <div className="flex justify-between p-4 shadow-sm items-center px-10">
        <a href="/">
            <img src="/logo.svg" className="h-[35px]" />
        </a>
        {user ? (
          <div className="flex items-center gap-5 ">

            <a href="/create-trip">
              <Button  className="rounded-full bg-black">
                Create Trip +
              </Button>
            </a>
            <a href="/my-trip">
              <Button  className="rounded-full bg-black">
                My Trips
              </Button>
            </a>

            <Popover>
              <PopoverTrigger>
                <img
                  src='/user.png'
                  className="h-[35px] w-[35px] rounded-full bg-transparent"
                />
              </PopoverTrigger>
              <PopoverContent>
                
                  <a href="/">
                    <h2
                      className="cursor-pointer"
                      onClick={() => {
                        googleLogout();
                        localStorage.clear();
                        window.location.reload();
                      }}
                    >
                      Log Out
                    </h2>
                  </a>
                
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <button className="flex justify-end font-extrabold" onClick={() => setOpenDialog(false)}><MdOutlineClose size={24} className="font-extrabold"/></button>
            </DialogHeader>
            <DialogDescription className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img
                  src="/logo.svg"
                  height={20}
                  width={200}
                  alt="Logo"
                  className="mb-4"
                />
                <p className="font-bold text-lg">Sign In With Google</p>
                <p className="font-bold text-base mt-2">
                  Sign up to the app with Google authentication
                </p>
                <Button
                  onClick={login}
                  className="w-full mt-5 cursor-pointer gap-3 flex items-center"
                >
                  <FcGoogle className="h-5 w-5" />
                  Sign in with Google
                </Button>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
    </div>
  );
}

export default Header;
