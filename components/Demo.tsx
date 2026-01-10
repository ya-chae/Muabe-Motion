import React, { useState } from 'react';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';

export interface DemoItem {
  title: string;
  subtitle: string;
  img: string;
  videoUrl: string;
}

const Demo: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<DemoItem | null>(null);

  /**
   * [데모 리스트 정보]
   * GitHub의 blob URL은 <video> 태그에서 직접 재생되지 않으므로 raw.githubusercontent.com 형식으로 변환하여 적용합니다.
   */
  const demos: DemoItem[] = [
    { 
      title: "Multi-Gesture Book", 
      subtitle: "만지면 반응하는 이야기책", 
      img: "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/img/book_1.png",
      videoUrl: "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/book(%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%A0%9C%EA%B1%B0).mp4" 
    },
    { 
      title: "Interactive Video", 
      subtitle: "영상 속 오브젝트 조작", 
      img: "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/img/%EC%98%81%EC%83%81%EC%A1%B0%EC%9E%91_%EC%B1%85%EB%84%98%EA%B8%B0%EA%B8%B0.png",
      videoUrl: "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/%EC%98%81%EC%83%81%EC%A1%B0%EC%9E%91_full.mp4"
    },
    { 
      title: "AI Motion", 
      subtitle: "모션으로 조작하는 숏폼", 
      img: "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/img/%ED%99%9C%EC%8F%98%EA%B8%B0.png",
      videoUrl: "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/%ED%99%9C%EC%8F%98%EA%B8%B0.mp4"
    },
    { 
      title: "Pose & Play", 
      subtitle: "촬영한 인물, 터치로 조작", 
      img: "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/img/4.png",
      videoUrl: "https://raw.githubusercontent.com/ya-chae/Muabemotion/main/%EC%82%AC%EB%9E%8C_demo.mp4"
    }
  ];

  return (
    <div className="section-padding container-custom overflow-hidden">
      <div className="mb-20 reveal-on-scroll">
        <h2 className="h2-section">
          QUARK, <span className="text-accent italic font-black">DEMO REEL</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
        {demos.map((demo, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedDemo(demo)}
            className="reveal-on-scroll group relative overflow-hidden rounded-[20px] bg-surface border border-white/10 aspect-video cursor-pointer shadow-2xl transition-base hover:translate-y-[-8px]"
            style={{ transitionDelay: `${(idx + 1) * 90}ms` }}
          >
            <img 
              src={demo.img} 
              alt={demo.title}
              className="w-full h-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-0 via-transparent to-transparent flex flex-col justify-end p-10 lg:p-14">
              <p className="caption-text mb-4 text-accent font-black uppercase tracking-[0.2em]">{demo.title}</p>
              <h4 className="h3-card text-text-1 group-hover:text-white transition-colors break-keep">{demo.subtitle}</h4>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-base bg-bg-0/30">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-[0_0_40px_rgba(255,59,77,0.6)] transform scale-90 group-hover:scale-100 transition-base">
                    <Play className="text-white fill-current w-8 h-8 ml-1.5" />
                </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDemo && (
        <VideoModal 
          demo={selectedDemo} 
          onClose={() => setSelectedDemo(null)} 
        />
      )}
    </div>
  );
};

export default Demo;