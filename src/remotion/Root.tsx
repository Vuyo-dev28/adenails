import { Composition } from 'remotion';
import { NailArtShowcase } from './NailArtShowcase';
import { ServicePromo } from './ServicePromo';
import { LogoAnimation } from './LogoAnimation';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NailArtShowcase"
        component={NailArtShowcase}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          title: 'For your nails',
          subtitle: 'Experience the art of nail care',
        }}
      />
      <Composition
        id="ServicePromo"
        component={ServicePromo}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          serviceName: 'Premium Manicure',
        }}
      />
      <Composition
        id="LogoAnimation"
        component={LogoAnimation}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
