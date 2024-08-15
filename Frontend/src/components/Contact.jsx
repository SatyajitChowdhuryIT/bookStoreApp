import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize navigate for navigation
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await axios.post("https://getform.io/f/bjjeqdxb", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success("Message sent successfully");
        // Navigate or perform other actions as needed
        // navigate(from, { replace: true });
      }
      localStorage.setItem("Contacts", JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Contact us</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Message */}
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                placeholder="Enter your message"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn btn-success w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
