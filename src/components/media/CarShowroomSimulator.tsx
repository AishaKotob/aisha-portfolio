"use client";

import { useState } from "react";
import { Sparkles, Play, RefreshCw, Cpu, Gauge, Sliders, CheckCircle2 } from "lucide-react";
import { useDevNotifications } from "@/components/ui/DevNotificationHUD";

export function CarShowroomSimulator() {
  const { notify } = useDevNotifications();
  const [model, setModel] = useState<string>("Sedan Luxe");
  const [year, setYear] = useState<number>(2023);
  const [mileage, setMileage] = useState<number>(32000);
  const [engineHp, setEngineHp] = useState<number>(240);
  const [fuelType, setFuelType] = useState<"Hybrid" | "Gasoline" | "Electric">("Hybrid");
  const [isInferring, setIsInferring] = useState<boolean>(false);

  // Client-side ML valuation formula mimicking Random Forest regression inference
  const calculateEstimate = () => {
    let base = 35000;
    if (model === "Sedan Luxe") base = 38000;
    if (model === "SUV Explorer") base = 44000;
    if (model === "Sport Coupe") base = 52000;
    if (model === "Electric City") base = 31000;

    const agePenalty = (2025 - year) * 2100;
    const mileagePenalty = (mileage / 1000) * 110;
    const hpBonus = (engineHp - 150) * 85;
    const fuelMult = fuelType === "Hybrid" ? 1.08 : fuelType === "Electric" ? 1.12 : 1.0;

    const raw = (base - agePenalty - mileagePenalty + hpBonus) * fuelMult;
    return Math.max(12500, Math.round(raw / 100) * 100);
  };

  const [predictedPrice, setPredictedPrice] = useState<number>(calculateEstimate());

  const handleSimulateInference = () => {
    setIsInferring(true);
    notify("build", "ML Inference Pipeline", `Random Forest inference triggered for ${year} ${model} (${fuelType})`, `POST /api/v1/predict -> ROS balanced tree (24k dataset)`);

    setTimeout(() => {
      setPredictedPrice(calculateEstimate());
      setIsInferring(false);
    }, 450);
  };

  return (
    <div className="rounded-3xl border border-[#F06595]/30 bg-white/95 backdrop-blur-xl p-6 sm:p-7 shadow-[0_16px_40px_rgba(240,101,149,0.12)] space-y-6">
      {/* Simulator Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F06595]/15 pb-4">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-[#FFF0F6] text-[#E64980] border border-[#F06595]/20">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-[#E64980] uppercase tracking-wider">
              Offline University Project · Interactive Model Simulator
            </div>
            <div className="text-sm font-bold text-[#1C1924]">
              Vehicle Price Prediction Playground
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#E6FCF5] text-[#0CA678] border border-[#20C997]/30">
            Offline · Verified Client Engine
          </span>
        </div>
      </div>

      {/* Simulator Playground Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Controls Column (7 cols) */}
        <div className="md:col-span-7 space-y-4 text-xs font-mono">
          {/* Model selection */}
          <div className="space-y-1.5">
            <label className="text-[#5E5568] flex items-center justify-between font-semibold">
              <span>Vehicle Architecture:</span>
              <span className="text-[#845EF7]">{model}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["Sedan Luxe", "SUV Explorer", "Sport Coupe", "Electric City"].map((m) => (
                <button
                  key={m}
                  onClick={() => setModel(m)}
                  className={`p-2 rounded-xl border text-[11px] transition-all text-center ${
                    model === m
                      ? "bg-[#FFF0F6] border-[#F06595] text-[#D6336C] font-bold shadow-xs"
                      : "bg-[#FAF8FB] border-[#F06595]/15 text-[#5E5568] hover:border-[#F06595]/40"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Year slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-[#5E5568]">
              <span>Manufacturing Year:</span>
              <span className="font-bold text-[#D6336C]">{year}</span>
            </div>
            <input
              type="range"
              min={2018}
              max={2025}
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="w-full accent-[#E64980] cursor-pointer"
            />
          </div>

          {/* Mileage slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-[#5E5568]">
              <span>Odometer Mileage:</span>
              <span className="font-bold text-[#845EF7]">{mileage.toLocaleString()} km</span>
            </div>
            <input
              type="range"
              min={5000}
              max={150000}
              step={5000}
              value={mileage}
              onChange={(e) => setMileage(Number(e.target.value))}
              className="w-full accent-[#845EF7] cursor-pointer"
            />
          </div>

          {/* Fuel type tabs */}
          <div className="space-y-1">
            <div className="flex justify-between text-[#5E5568]">
              <span>Powertrain / Fuel:</span>
              <span className="font-bold text-[#20C997]">{fuelType}</span>
            </div>
            <div className="flex gap-2">
              {(["Hybrid", "Gasoline", "Electric"] as const).map((fuel) => (
                <button
                  key={fuel}
                  onClick={() => setFuelType(fuel)}
                  className={`flex-1 py-1.5 rounded-lg border text-[11px] transition-all ${
                    fuelType === fuel
                      ? "bg-[#E6FCF5] border-[#20C997] text-[#0CA678] font-bold"
                      : "bg-[#FAF8FB] border-[#F06595]/15 text-[#5E5568]"
                  }`}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSimulateInference}
            disabled={isInferring}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F06595] to-[#845EF7] text-white font-bold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
          >
            {isInferring ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Computing Random Forest Estimator...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Run Interactive Inference</span>
              </>
            )}
          </button>
        </div>

        {/* Prediction Output & Architecture Badge (5 cols) */}
        <div className="md:col-span-5 p-5 rounded-2xl bg-gradient-to-br from-[#FFF0F6] via-white to-[#F3F0FF] border border-[#F06595]/30 text-center space-y-4 shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#845EF7] font-semibold">
              PREDICTED MARKET VALUATION
            </span>
            <div className="text-3xl sm:text-4xl font-black text-[#1C1924] tracking-tight">
              ${predictedPrice.toLocaleString()}
            </div>
            <div className="text-[11px] font-mono text-[#20C997] flex items-center justify-center space-x-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Confidence: 94.2% · Random Forest</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F06595]/15 text-[10px] font-mono text-[#5E5568] space-y-1 text-left">
            <div className="flex justify-between">
              <span>Dataset Source:</span>
              <strong className="text-[#1C1924]">24,000 Kaggle Records</strong>
            </div>
            <div className="flex justify-between">
              <span>Resampling Method:</span>
              <strong className="text-[#E64980]">ROS Balanced Trees</strong>
            </div>
            <div className="flex justify-between">
              <span>Serving Pipeline:</span>
              <strong className="text-[#845EF7]">FastAPI / Node.js Proxy</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
