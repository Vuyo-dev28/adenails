import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
  Sequence,
} from 'remotion';

interface ServicePromoProps {
  serviceName: string;
}

export const ServicePromo: React.FC<ServicePromoProps> = ({
  serviceName,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Service name animation
  const serviceOpacity = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
    from: 0,
    to: 1,
  });
  const serviceScale = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
    from: 0.8,
    to: 1,
  });

  // Background color transition
  const bgColor = interpolate(
    frame,
    [0, 60, 180, 240],
    [0, 1, 1, 0],
    {
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, #F8F7F5 0%, rgba(139, 26, 26, ${bgColor * 0.1}) 100%)`,
      }}
    >
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        {/* Service Name */}
        <div
          style={{
            opacity: serviceOpacity,
            transform: `scale(${serviceScale})`,
            fontSize: 96,
            fontWeight: 'bold',
            color: '#8B1A1A',
            textAlign: 'center',
            marginBottom: 60,
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          {serviceName}
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: interpolate(frame, [60, 120], [0, 300], {
              extrapolateRight: 'clamp',
            }),
            height: 2,
            background: '#8B1A1A',
            marginTop: 40,
            opacity: serviceOpacity,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
