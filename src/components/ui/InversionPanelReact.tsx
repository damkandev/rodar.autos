import React, { useState } from "react";

type InvestmentKey = "50000" | "1200000";

const investmentData: Record<InvestmentKey, { salePrice: number; earnings: number }> = {
  "50000": {
    salePrice: 9200000,
    earnings: 400000,
  },
  "1200000": {
    salePrice: 9200000,
    earnings: 800000,
  },
};

export default function InversionPanelReact() {
  const [selectedInvestment, setSelectedInvestment] = useState<InvestmentKey>("50000");

  return (
    <div className="bg-[#1D1D1D] text-white p-4 rounded-xl mb-4">
      <div>
        <div className="flex justify-between items-center mb-2">
          <p>Monto Recaudado: <span className="text-[#109BFF] mr-8">4.400.000</span></p>
          <p className="text-white/50">/6.000.000</p>
        </div>
        <div className="grid grid-cols-14 gap-2">
          <div className="col-span-5 bg-[#109BFF] h-4 rounded"></div>
          <div className="col-span-2 bg-[#109BFF] h-4 rounded"></div>
          <div className="col-span-3 bg-[#109BFF] h-4 rounded"></div>
          <div className="col-span-2 bg-[#525252] h-4 rounded"></div>
          <div className="col-span-2 bg-[#525252] h-4 rounded"></div>
        </div>
      </div>
      <div className="mt-4">
        <p>Elige un monto a invertir</p>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div
            className={`grid-span-1 bg-[#313131] p-2 rounded-md border cursor-pointer ${selectedInvestment === "50000" ? "border-[#109BFF]" : "border-white/20"}`}
            onClick={() => setSelectedInvestment("50000")}
          >
            <p>50.000</p>
            <p className="text-[#CDFF91]">1%</p>
          </div>
          <div
            className={`grid-span-1 bg-[#313131] p-2 rounded-md border cursor-pointer ${selectedInvestment === "1200000" ? "border-[#109BFF]" : "border-white/20"}`}
            onClick={() => setSelectedInvestment("1200000")}
          >
            <p>1.200.000</p>
            <p className="text-[#CDFF91]">20%</p>
          </div>
          <div
            className="grid-span-1 bg-[#109BFF] p-2 rounded-md border border-white/20 items-center flex flex-col justify-center"
          >
            <p>Otro Monto</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>Información inversión</p>
        <div className="p-3 border border-[#FFA909] mt-2 rounded-lg">
          <p>Precio de venta: <span id="salePrice">{investmentData[selectedInvestment].salePrice}</span></p>
        </div>
        <div className="p-3 border border-[#CDFF91] mt-2 rounded-lg">
          <p>Tus ganancias: <span id="earnings">{investmentData[selectedInvestment].earnings}</span></p>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full bg-[#109BFF] text-white p-2 rounded-md hover:bg-[#0a6bbf] transition-colors">
          Invertir
        </button>
        <p className="text-white/30 tracking-tight mt-2">*Al comprar acepto los términos y condiciones, además de las políticas del servicio.</p>
      </div>
    </div>
  );
}
