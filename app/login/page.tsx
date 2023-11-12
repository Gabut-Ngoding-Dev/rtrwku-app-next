"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BiHide, BiShow } from "react-icons/bi";
import Introduction from "../components/login/introduction";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { api } from "@/lib/axios";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username harus diisi"),
    password: Yup.string().required("Password harus diisi"),
  });
  const handleLogin = async (values) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    try {
      const data = await api.post("login", payload);
      console.log(data);

      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error("Akun tidak ditemukan");
    }
  };

  const checkIfFirstVisit = () => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      setShowModal(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    checkIfFirstVisit();
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("hasVisitedBefore", "true");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-12 w-full">
      <img src="/Logo.png" className="w-[224px] h-50px mb-[60px]" alt="" />
      <div className="mb-[60px]">
        <h1 className="text-lg font-semibold text-black mb-2 text-center">
          Kampungku
        </h1>
        <h2 className="text-xs font-medium text-neutural-60 text-center">
          Akses layanan lebih mudah dan cepat
        </h2>
      </div>
      <div className="w-full">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="relative w-full mb-6">
                <Field
                  type="text"
                  name="username"
                  className="px-4 py-3 rounded-full w-full text-neutural-90 placeholder-neutural-60 border border-neutural-40 bg-neutural-10 shadow-input"
                  placeholder="Username"
                  required
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="relative w-full mb-6">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="px-4 py-3 rounded-full w-full text-neutural-90 placeholder-neutural-60 border border-neutural-40 bg-neutural-10 shadow-input pr-10"
                  placeholder="Password"
                  required
                />
                <div className="absolute top-4 right-4">
                  <button onClick={togglePasswordVisibility} type="button">
                    {showPassword ? (
                      <BiShow className="text-neutural-60 w-5 h-5" />
                    ) : (
                      <BiHide className="text-neutural-60 w-5 h-5" />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-start w-full">
                <label className="text-neutural-90 text-sm flex items-center gap-2 mb-[34px]">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] border rounded-full"
                  />
                  Ingatkan saya
                </label>
              </div>
              <button
                type="submit"
                className="bg-primary-main w-full rounded-[6px] py-2.5 text-white font-bold hover:bg-primary-hover transition-colors duration-300"
                disabled={isSubmitting}
              >
                Masuk
              </button>
              <Toaster position="top-center" />
            </Form>
          )}
        </Formik>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md relative">
            <Introduction closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}