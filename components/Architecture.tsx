import React from 'react';
import { Cpu, Smartphone, MousePointer2, Share2, Building2 } from 'lucide-react';

const Architecture: React.FC = () => {
  const quadrantItems = [
    { title: "Vibble", desc: "모바일 인터랙티브 서비스", Icon: Smartphone },
    { title: "Graphy", desc: "웹 기반 인터랙션 제작툴", Icon: MousePointer2 },
    { title: "Partners", desc: "IP·채널·플랫폼 연동", Icon: Share2 },
    { title: "Enterprise", desc: "맞춤형 콘텐츠 설계·제작", Icon: Building2 },
  ];

  return (
    <div 
      className="relative overflow-hidden section-padding"
      style={{
        background: "linear-gradient(180deg, #101014 0%, #0B0B0D 50%, #101014 100%)",
      }}
    >
      {/* Central Accent Glow */}
      <div className="ambient-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 scale-75"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-24 reveal-on-scroll">
          <p className="label-text mb-6">SCALABILITY</p>
          <h2 className="h2-section mb-10 text-text-1 break-keep">
            From Engine <br className="block md:hidden" /> to Products
          </h2>
          <p className="mx-auto max-w-[62ch] section-lead break-keep">
            Quark AI 하나로 서비스·툴·파트너 연동· <br className="block md:hidden" /> 맞춤 구축까지 빠르게 확장합니다.
          </p>
        </div>

        <div className="relative max-w-[1240px] mx-auto reveal-on-scroll">
          
          <div className="
            hidden md:block relative 
            min-h-[520px] 
            bg-white/[0.04] border border-white/10 
            rounded-[64px] overflow-hidden
            shadow-[0_48px_120px_rgba(0,0,0,0.6)]
            backdrop-blur-xl p-16
          ">
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[1px] bg-white/5"></div>
              <div className="absolute h-full w-[1px] bg-white/5"></div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="
                w-[280px] h-[280px] lg:w-[340px] lg:h-[340px]
                rounded-full border border-white/5
                flex items-center justify-center
                shadow-[0_0_80px_rgba(255,59,77,0.15)]
              ">
                <div className="
                  w-[240px] h-[240px] lg:w-[300px] lg:h-[300px]
                  rounded-full border-[2px] border-white/20 bg-bg-0/90
                  flex flex-col items-center justify-center
                  shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]
                ">
                  <Cpu className="text-accent mb-6" size={48} />
                  <span className="text-[32px] lg:text-[42px] font-black text-text-1 tracking-tighter uppercase mb-1">QUARK</span>
                  <span className="text-[14px] lg:text-[16px] text-text-3 font-bold uppercase tracking-[0.4em] opacity-80">CORE ENGINE</span>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              {quadrantItems.map((item, i) => {
                const isTop = i < 2;
                const isLeft = i % 2 === 0;
                const Icon = item.Icon;
                return (
                  <div key={i} className={`
                      px-16 lg:px-24 flex flex-col
                      ${isTop ? 'justify-start pt-20' : 'justify-end pb-20'}
                      ${isLeft ? 'items-start text-left' : 'items-end text-right'}
                      group
                  `}>
                    <div className="flex flex-col gap-4 transition-base group-hover:translate-y-[-4px]">
                      <div className={`mb-3 text-accent/50 group-hover:text-accent transition-colors ${isLeft ? '' : 'flex justify-end'}`}>
                         <Icon size={32} />
                      </div>
                      <h4 className="text-[28px] lg:text-[36px] font-bold text-text-1 tracking-tight">{item.title}</h4>
                      <p className="text-[16px] lg:text-[20px] text-text-2 font-medium opacity-85">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Architecture */}
          <div className="md:hidden space-y-4">
            <div className="bg-white/5 border border-white/10 p-12 flex flex-col items-center text-center rounded-[48px] mb-8">
               <Cpu className="text-accent mb-4" size={40} />
               <h4 className="text-[24px] font-black tracking-tighter uppercase">QUARK CORE</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {quadrantItems.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[32px]">
                  <item.Icon className="text-accent/60 mb-3" size={20} />
                  <h5 className="font-bold text-text-1 mb-1">{item.title}</h5>
                  <p className="text-[13px] text-text-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;