import React from 'react';
import { Zap, Layers, MonitorSmartphone } from 'lucide-react';

const Technology: React.FC = () => {
  const features = [
    {
      title: "Multi-Modal Inputs",
      line1: "입력 해석(Translator) 기반 통합 처리",
      line2: "터치 · 제스처 · 모션 · 카메라",
      icon: <Zap size={24} />,
    },
    {
      title: "Fast Build",
      line1: "모션 합성 알고리즘으로 빠른 구현",
      line2: "복잡한 계산 없이 인터랙션 구현",
      icon: <Layers size={24} />,
    },
    {
      title: "Any Content",
      line1: "모든 리소스에 즉시 적용",
      line2: "실사 · AI 영상 · 애니메이션 · 이미지",
      icon: <MonitorSmartphone size={24} />,
    },
  ];

  return (
    <div
      className="relative overflow-hidden section-padding"
      style={{
        background: "linear-gradient(180deg, #1E1F24 0%, #141519 50%, #0B0B0D 100%)",
      }}
    >
      {/* Ambient Glow Orb */}
      <div className="ambient-orb -top-[20%] -right-[10%] opacity-60"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-[1fr_1fr] items-center">
          
          <div className="reveal-on-scroll">
            <p className="label-text mb-6 font-extrabold">AI INTERACTION ENGINE</p>
            
            <h2 className="text-[52px] md:text-[72px] lg:text-[84px] font-[900] mb-12 text-text-1 tracking-tighter leading-none">
              Quark AI
            </h2>
            
            <div className="max-w-[540px] space-y-10">
              <p className="text-[20px] md:text-[24px] lg:text-[26px] !text-text-1 font-bold break-keep leading-[1.45] tracking-tight">
                Quark AI는 영상·이미지·애니메이션 위에 <br className="hidden md:block" />
                사용자의 터치·제스처·모션 등을 실시간으로 연결해 <br className="hidden md:block" />
                콘텐츠를 즉시 인터랙티브로 전환하는 <br className="hidden md:block" />
                AI 인터랙션 엔진입니다.
              </p>
              <div className="space-y-4">
                <p className="text-[17px] md:text-[19px] !text-text-3 font-medium break-keep leading-relaxed">
                  복잡한 개발 과정을 줄이고, <br className="hidden md:block" />
                  검증된 모션 합성 기반으로 <br className="hidden md:block" />
                  자연스러운 반응과 빠른 구현을 지원합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[600px] lg:ml-auto">
            {features.map((f, i) => (
              <div 
                key={i} 
                className="reveal-on-scroll flex flex-col justify-center px-10 py-10 rounded-[32px] bg-white/[0.04] border border-white/5 transition-base hover:bg-white/[0.07] hover:border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.3)] group"
                style={{ transitionDelay: `${(i + 1) * 90}ms` }}
              >
                <div className="flex items-center gap-6 mb-7">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(255,59,77,0.2)] group-hover:scale-110 transition-transform">
                    {/* Fixed TypeScript error by casting to React.ReactElement<any> to allow prop overrides */}
                    {React.cloneElement(f.icon as React.ReactElement<any>, { size: 22, strokeWidth: 2.5 })}
                  </div>
                  <h4 className="text-[24px] md:text-[32px] font-bold text-text-1 tracking-tight">{f.title}</h4>
                </div>

                <div className="space-y-2.5 break-keep">
                  <p className="text-[16px] md:text-[18px] !text-text-1 font-bold opacity-90">{f.line1}</p>
                  <p className="text-[14px] md:text-[16px] text-text-3 font-medium">{f.line2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;