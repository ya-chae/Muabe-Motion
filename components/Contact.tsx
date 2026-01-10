import React from 'react';
import { Mail, MapPin, Building, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXNDbFliO6GlP8AbAVuF_V_laoXGY4VEkMoWEdRnsUAEebmA/viewform?usp=sharing&ouid=105000017559176007342";

  return (
    <div className="py-[78px] lg:py-[126px] container-custom relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start reveal-on-scroll">
        <div className="lg:col-span-9 text-left">
          <h2 className="h2-section mb-12 md:mb-16 text-text-1 break-keep uppercase tracking-tight">
            Contact
          </h2>
          
          <div className="space-y-10 lg:space-y-16">
            <div className="space-y-8 lg:space-y-10">
              {/* Office */}
              <div className="flex items-start gap-6 lg:gap-10 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[24px] lg:rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/20 transition-base shadow-sm">
                  <MapPin className="text-accent" size={28} />
                </div>
                <div className="pt-1 break-keep">
                  <p className="font-black text-[13px] lg:text-[16px] text-text-1 mb-2 uppercase tracking-[0.2em]">Office</p>
                  <p className="body-text !text-[15px] lg:!text-[20px] !text-text-2/95 font-semibold !leading-relaxed">
                    서울시 마포구 마포대로 122, <br className="block md:hidden" /> 
                    13층 (공덕동, 프론트원)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 lg:gap-10 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[24px] lg:rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/20 transition-base shadow-sm">
                  <Mail className="text-accent" size={28} />
                </div>
                <div className="pt-1">
                  <p className="font-black text-[13px] lg:text-[16px] text-text-1 mb-2 uppercase tracking-[0.2em]">Email</p>
                  <p className="body-text !text-[15px] lg:!text-[20px] !text-text-2/95 font-semibold">contact@muabe.com</p>
                </div>
              </div>

              {/* Business */}
              <div className="flex items-start gap-6 lg:gap-10 group">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[24px] lg:rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/20 transition-base shadow-sm">
                  <Building className="text-accent" size={28} />
                </div>
                <div className="pt-1 break-keep">
                  <p className="font-black text-[13px] lg:text-[16px] text-text-1 mb-2 uppercase tracking-[0.2em]">Business</p>
                  <p className="body-text !text-[15px] lg:!text-[20px] !text-text-2/95 font-semibold">
                    파트너십 · 데모 요청 · 문의
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 lg:pt-8">
              <a 
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-4 lg:gap-6
                  bg-accent hover:bg-accent-deep text-white 
                  px-8 py-3.5 lg:px-14 lg:py-5 rounded-xl lg:rounded-2xl transition-all duration-500
                  transform hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(255,59,77,0.3)] 
                  active:scale-[0.96] group
                "
              >
                <span className="text-[14px] lg:text-[18px] font-black tracking-[0.2em] lg:tracking-[0.25em] uppercase whitespace-nowrap">Contact Us</span>
                <ArrowUpRight className="w-4 h-4 lg:w-6 lg:h-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:col-span-3 lg:block"></div>
      </div>
    </div>
  );
};

export default Contact;