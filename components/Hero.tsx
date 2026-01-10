import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center bg-bg-0" style={{
      background: 'linear-gradient(180deg, #2B2C31 0%, #24252A 45%, #16171B 70%, #1E1F24 100%)'
    }}>
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full flex items-center justify-center">
          <iframe 
            src='https://my.spline.design/nexbotrobotcharacterconcept-BZ2Hfguxoav3LsROJvYGNJJc/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="opacity-90 pointer-events-auto w-full h-full object-cover scale-105"
            style={{ border: 'none' }}
            title="Interactive Robot"
          ></iframe>
        </div>
      </div>

      {/* Scrim Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.00) 100%)'
      }}></div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" style={{
        height: '42vh',
        minHeight: '280px',
        background: 'linear-gradient(180deg, rgba(30,31,36,0.00) 0%, rgba(30,31,36,0.7) 50%, #1E1F24 100%)'
      }}></div>

      {/* Content Layer */}
      <div className="container-custom relative z-20 w-full h-full pt-[100px] pb-[60px] pointer-events-none flex items-center">
        <div 
          className="max-w-[960px] w-full text-left reveal-on-scroll"
          style={{
            transform: 'translateX(clamp(-160px, calc((1600px - 100vw) * 0.18), 0px))'
          }}
        >
          <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
            <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-accent"></span>
            <p className="label-text">REAL-TIME INTERACTION</p>
          </div>
          
          <h1 className="h1-hero text-text-1 mb-8 md:mb-12 break-keep drop-shadow-lg">
            <span className="block mb-2 md:mb-0">Any Content</span>
            <span className="md:whitespace-nowrap">Now Interactive</span>
            <div className="mt-8 md:mt-10 h-[4px] md:h-[5px] w-[60px] md:w-[100px] bg-accent"></div>
          </h1>

          <div className="max-w-[62ch]">
            <p className="section-lead !text-text-1 break-keep drop-shadow-md">
              무아베모션은 AI 인터랙션 엔진 Quark로 <br className="hidden md:block" />
              모든 콘텐츠에 즉시 상호작용을 더합니다.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-[32px] z-20 pointer-events-none hidden md:block">
        <div className="flex flex-col items-center gap-8">
          <span className="text-[13px] uppercase tracking-[0.4em] text-text-3 font-extrabold vertical-text opacity-50">Explore</span>
          <div className="w-[1px] h-28 bg-gradient-to-b from-accent to-transparent opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;