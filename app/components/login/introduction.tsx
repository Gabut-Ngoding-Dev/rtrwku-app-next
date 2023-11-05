import { useState, FC, useEffect } from "react";
import { animated, useSpring } from "react-spring";

interface IntroductionProps {
  closeModal: () => void;
}

const Introduction: FC<IntroductionProps> = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const [toggle, setToggle] = useState(false); 

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: toggle,
    config: { tension: 280, friction: 60 },
  });
  useEffect(() => {
    setToggle(true);
  }, []);
  const slides = [
    {
      image: "/Ilustrator/File.png",
      title: "Ajukan Surat Online",
      description:
        "Buat perohonan surat pengantar anti ribet. Tinggal klik ajukan dan surat kamu akan selesai dengan cepat",
    },
    {
      image: "/Ilustrator/Pocket.png",
      title: "Bayar Iuran",
      description:
        "Buat perohonan surat pengantar anti ribet. Tinggal klik ajukan dan surat kamu akan selesai dengan cepat",
    },
    {
      image: "/Ilustrator/Brancas.png",
      title: "Transparansi Keuangan",
      description:
        "Buat perohonan surat pengantar anti ribet. Tinggal klik ajukan dan surat kamu akan selesai dengan cepat",
    },
  ];

  const slide = slides[step - 1];

  return (
    <div className="flex flex-col justify-center items-center h-screen w-[370px] px-12">
      <animated.div style={props} className="mb-[102px]">
        <img src={slide.image} alt="" className="w-80 h-80 mb-3" />
        <h1 className="text-lg font-semibold text-black mb-2 text-center">
          {slide.title}
        </h1>
        <h2 className="text-sm font-medium text-black text-center">
          {slide.description}
        </h2>
      </animated.div>
      <div className="flex mb-[95px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`h-4 rounded-full mr-3 ${
              index + 1 === step ? "bg-primary-main w-10" : "bg-gray-300 w-4"
            }`}
          ></div>
        ))}
      </div>
      {step < 3 && (
        <div className="flex justify-between w-full">
          <button
            className="border border-primary-main w-[100px] h-10 flex justify-center items-center text-primary-main rounded-[6px] font-semibold"
            onClick={closeModal}
          >
            Skip
          </button>
          <button
            className="w-[100px] h-10 flex justify-center items-center bg-primary-main text-neutural-10 hover:bg-primary-hover transition-colors duration-300 rounded-[6px] font-semibold"
            onClick={() => {
              setStep(step + 1);
              setToggle(!toggle);
            }}
          >
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div className="flex justify-end w-full">
          <button
            className="w-[100px] h-10 flex justify-center items-center bg-primary-main text-neutural-10 hover:bg-primary-hover transition-colors duration-300 rounded-[6px] font-semibold"
            onClick={closeModal}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Introduction;
