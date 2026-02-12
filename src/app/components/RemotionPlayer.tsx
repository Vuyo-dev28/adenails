import { Player } from '@remotion/player';
import { useState } from 'react';
import { NailArtShowcase } from '../../remotion/NailArtShowcase';
import { ServicePromo } from '../../remotion/ServicePromo';
import { LogoAnimation } from '../../remotion/LogoAnimation';

type CompositionType = 'NailArtShowcase' | 'ServicePromo' | 'LogoAnimation';

export function RemotionPlayer() {
  const [composition, setComposition] = useState<CompositionType>('NailArtShowcase');

  const compositions = {
    NailArtShowcase: {
      component: NailArtShowcase,
      durationInFrames: 300,
      fps: 30,
      width: 1920,
      height: 1080,
      defaultProps: {
        title: 'For your nails',
        subtitle: 'Experience the art of nail care',
      },
    },
    ServicePromo: {
      component: ServicePromo,
      durationInFrames: 240,
      fps: 30,
      width: 1920,
      height: 1080,
      defaultProps: {
        serviceName: 'Premium Manicure',
        price: '',
      },
    },
    LogoAnimation: {
      component: LogoAnimation,
      durationInFrames: 180,
      fps: 30,
      width: 1920,
      height: 1080,
      defaultProps: {},
    },
  };

  const currentComp = compositions[composition];

  return (
    <section className="py-28 md:py-32 bg-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8B1A1A]/60 mb-4 font-medium">
            Video Animations
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-5 text-[#2a2a2a] tracking-premium">
            Animated <span className="text-[#8B1A1A] font-heading italic">Showcase</span>
          </h2>
          <p className="text-xl text-[#5D5C6C] max-w-2xl mx-auto leading-relaxed">
            Experience our brand through programmatically generated animations
          </p>
        </div>

        {/* Composition Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(compositions).map((key) => (
            <button
              key={key}
              onClick={() => setComposition(key as CompositionType)}
              className={`px-6 py-2 rounded-full transition-all duration-300 uppercase tracking-wider text-sm ${
                composition === key
                  ? 'bg-[#8B1A1A] text-white shadow-md'
                  : 'bg-white text-[#5D5C6C] hover:bg-[#F5F5F5] border border-[#E8E6E9]'
              }`}
            >
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>

        {/* Player Container */}
        <div className="bg-white rounded-2xl p-8 shadow-premium border border-[#E8E6E9]/80">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-[#F5F5F5]">
            <Player
              component={currentComp.component}
              durationInFrames={currentComp.durationInFrames}
              fps={currentComp.fps}
              compositionWidth={currentComp.width}
              compositionHeight={currentComp.height}
              controls
              style={{
                width: '100%',
                height: '100%',
              }}
              {...currentComp.defaultProps}
            />
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#5D5C6C]">
            These animations are created programmatically with Remotion and can be rendered as videos
          </p>
        </div>
      </div>
    </section>
  );
}
