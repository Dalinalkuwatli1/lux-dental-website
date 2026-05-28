'use client';

import React, { useState, useEffect } from 'react';
import { Scan, Activity, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';
import Button from '../ui/Button';

export const AISmileScanner: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'results'>('idle');
  const [progress, setProgress] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const { locale } = useAppContext();
  const t = translations[locale].scanner;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (scanState === 'scanning') {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setScanState('results');
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 300);
    }
    return () => clearInterval(timer);
  }, [scanState]);

  const handleStartScan = () => {
    setProgress(0);
    setScanState('scanning');
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-premium metallic-border bg-white dark:bg-[#060b0a] transition-colors duration-500 flex flex-col group">

      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 dark:from-[#00f2fe]/5 to-gold/5 pointer-events-none transition-colors duration-500" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 dark:bg-[#00f2fe]/10 blur-[80px] pointer-events-none -mr-20 -mt-20 transition-colors duration-500" />

      {/* Content Container */}
      <div className="relative z-10 p-8 flex-1 flex flex-col items-center justify-center text-center h-full">

        {scanState === 'idle' && (
          <div className="space-y-6 animate-fade-in flex flex-col items-center justify-center h-full w-full">
            <div className="w-20 h-20 rounded-full bg-primary-light dark:bg-[#0b8793]/30 flex items-center justify-center text-primary dark:text-[#00f2fe] shadow-soft animate-float">
              <Scan className="w-10 h-10" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-gold uppercase block mb-2">{t.subtitle}</span>
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-3">{t.title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[280px] mx-auto">
                {t.desc}
              </p>
            </div>
            <Button
              variant="primary"
              className="w-full mt-4 text-xs tracking-wider"
              onClick={handleStartScan}
            >
              {t.btn_start}
            </Button>
          </div>
        )}

        {scanState === 'scanning' && (
          <div className="space-y-8 animate-fade-in flex flex-col items-center justify-center h-full w-full">
            <div className="relative flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-primary/30 dark:border-[#00f2fe]/30 flex items-center justify-center relative">
                <Activity className="w-10 h-10 text-primary dark:text-[#00f2fe] animate-pulse" />
                <div className="pulse-radar absolute inset-0 rounded-full" />
              </div>
            </div>
            <div className="w-full space-y-3">
              <p className="text-sm font-semibold text-charcoal dark:text-white animate-pulse">
                {t.btn_scanning}
              </p>
              <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-gold transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                {t.scanning_mesh} {progress}%
              </p>
            </div>
          </div>
        )}

        {scanState === 'results' && (
          <div className="space-y-6 animate-fade-in flex flex-col h-full w-full justify-between">

            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-primary dark:text-[#00f2fe] uppercase block">
                {t.results}
              </span>

              <div className="grid grid-cols-1 gap-2 text-left mt-4 w-full">
                <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">{t.alignment}</span>
                  <span className="text-sm font-bold text-charcoal dark:text-white flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 94%
                  </span>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">{t.health}</span>
                  <span className="text-sm font-bold text-charcoal dark:text-white flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" /> 98%
                  </span>
                </div>
              </div>
            </div>

            {/* Whitening Simulator */}
            <div className="w-full space-y-3 pt-2">
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest text-left">
                {t.simulator_title}
              </p>

              {/* Fake Image Area */}
              <div className="relative w-full h-20 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <div className="absolute inset-0 bg-cream dark:bg-[#081110] flex items-center justify-center border border-neutral-100 dark:border-neutral-800">
                  <div className="flex gap-1">
                    {/* Simulated teeth blocks */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-6 rounded-b-md transition-colors duration-200"
                        style={{
                          backgroundColor: i * 20 > sliderValue ? '#e2e8f0' : '#ffffff',
                          opacity: i * 20 > sliderValue && document.documentElement.classList.contains('dark') ? 0.3 : 1
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Slider Thumb line overlay */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-primary dark:bg-[#00f2fe] shadow-[0_0_8px_rgba(0,242,254,0.8)]"
                  style={{ left: `${sliderValue}%` }}
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-neutral-400">{t.simulator_before}</span>
                <input
                  type="range"
                  min="0" max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(parseInt(e.target.value))}
                  className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-[10px] text-neutral-400">{t.simulator_after}</span>
              </div>
            </div>

            <Button
              variant="primary"
              className="w-full text-xs tracking-wider group"
              onClick={() => {
                if (onComplete) onComplete();
              }}
            >
              {t.btn_book} <ArrowRight className={`w-3.5 h-3.5 ${locale === 'ar' ? 'mr-1 rotate-180' : 'ml-1'} transition-transform group-hover:translate-x-1`} />
            </Button>

          </div>
        )}
      </div>
    </div>
  );
};

export default AISmileScanner;
