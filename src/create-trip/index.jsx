import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdOutlineClose } from "react-icons/md";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "@/constants/options";
import { chatSession } from "@/service/AIModel";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Footer from "@/view-trip/components/Footer";

function CreateTrip() {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    location: "",
    noOfDays: "",
    budget: "",
    traveler: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (resp) => getUserProfile(resp),
    onError: (resp) => console.log(resp),
  });

  const generateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialog(true);
      return;
    }
    console.log(formData);

    if (
      (formData?.noOfDays > 20 && !formData?.location) ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast.error("Please fill all details ");
      return;
    }
    setloading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    console.log(FINAL_PROMPT);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const resultText = await result.response.text();
      console.log(resultText);
      SaveAiTrip(resultText);
    } catch (error) {
      console.error("Error generating trip:", error);
      //toast.error("There was an error generating the trip.");
    } finally {
      setloading(false);
    }
  };

  const SaveAiTrip = async (TripData) => {
    setloading(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const docID = Date.now().toString();

      // Validate JSON before saving
      let parsedTripData;
      try {
        parsedTripData = JSON.parse(TripData);
      } catch (jsonError) {
        console.error("Invalid JSON data:", jsonError);
        toast.error("Failed to save trip due to invalid data.");
        return;
      }

      await setDoc(doc(db, "AiTrip", docID), {
        userSelection: formData,
        tripData: parsedTripData,
        userEmail: user?.email,
        id: docID,
      });

      navigate(`/view-trip/${docID}`);
    } catch (error) {
      console.error("Error saving trip:", error);
      toast.error("Failed to save the trip.");
    } finally {
      setloading(false);
    }
  };

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
        generateTrip();
      });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 w-full max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mt-20">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>

          <Input
            placeholder={"Enter a destination"}
            type="text"
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>

          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>

          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                    ${
                      formData?.budget == item.title && "shadow-lg border-black"
                    }
                    `}
                onClick={(e) => handleInputChange("budget", item.title)}
              >
                <h2 className="text-4xl">{item.icons}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>

          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
                    ${
                      formData?.traveler == item.people &&
                      "shadow-lg border-black"
                    }
                    `}
                onClick={(e) => handleInputChange("traveler", item.people)}
              >
                <h2 className="text-4xl">{item.icons}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end my-10">
          <Button onClick={generateTrip} disabled={loading}>
            {loading ? (
              <ImSpinner9 className="h-7 w-7 animate-spin" />
            ) : (
              " Generate Trip"
            )}
          </Button>
        </div>

        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <button
                className="flex justify-end font-extrabold"
                onClick={() => setOpenDialog(false)}
              >
                <MdOutlineClose size={24} className="font-extrabold" />
              </button>
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
                <p className="font-bold text-lg">You are not signed In</p>
                <p className="font-bold text-base mt-2">
                  Sign up to the app , to create the iternary
                </p>
              
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
}
export default CreateTrip;
