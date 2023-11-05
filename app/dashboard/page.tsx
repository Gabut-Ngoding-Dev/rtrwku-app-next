import Navbar from "../components/navbar";
import { BiBell } from "react-icons/bi";

export default function Dashboard() {
  return (
    <div>
      <div className="relative flex flex-col bg-white py-9 h-screen px-7 w-full">
        <div className="flex justify-between items-start mb-[61px]">
          <div>
            <h1 className="text-xs text-neutural-70 mb-1">Selamat Datang,</h1>
            <h2 className="text-lg text-black font-bold mb-2">
              Marsha Lenathea
            </h2>
          </div>
          <button>
            <BiBell className="w-6 h-6" />
          </button>
        </div>
        <div className="rounded-[10px] bg-primary-main shadow-2 py-4 px-6 mb-12">
          <div className="flex gap-2 items-center mb-3">
            <h3 className="text-neutural-10 text-xs font-medium">Perumahan</h3>
            <h3 className="text-neutural-10 text-lg font-semibold">
              Cempaka Indah
            </h3>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-1 items-center">
              <h3 className="text-neutural-10 text-xs font-medium">Rt</h3>
              <h3 className="text-neutural-10 text-lg font-semibold">002</h3>
            </div>
            <div className="flex gap-1 items-center">
              <h3 className="text-neutural-10 text-xs font-medium">Rw</h3>
              <h3 className="text-neutural-10 text-lg font-semibold">002</h3>
            </div>
            <div className="flex gap-1 items-center">
              <h3 className="text-neutural-10 text-xs font-medium">Kode Pos</h3>
              <h3 className="text-neutural-10 text-lg font-semibold">31829</h3>
            </div>
          </div>
        </div>
        <h3 className="text-base font-semibold text-black mb-[34px]">
          Akses layanan
        </h3>
        <div className="flex gap-[30px] justify-center items-center">
          <button className="w-[140px] h-[120px] rounded-[15px] shadow-12 bg-white">
            <div className="flex w-full justify-center">
              <img
                src="/Icon/lists.png"
                alt=""
                className="w-10 h-10 mb-[14px]"
              />
            </div>
            <h4 className="text-xs text-black text-center">Buat Surat</h4>
          </button>
          <button className="w-[140px] h-[120px] rounded-[15px] shadow-12 bg-white">
            <div className="flex w-full justify-center">
              <img
                src="/Icon/budget.png"
                alt=""
                className="w-10 h-10 mb-[14px]"
              />
            </div>
            <h4 className="text-xs text-black text-center">Tagihan Iuran</h4>
          </button>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-full">
        <Navbar />
      </div>
    </div>
  );
}
