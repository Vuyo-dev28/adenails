import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from 'remotion';

interface NailArtShowcaseProps {
  title: string;
  subtitle: string;
}

export const NailArtShowcase: React.FC<NailArtShowcaseProps> = ({
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const titleY = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
    from: -100,
    to: 0,
  });

  // Subtitle animation
  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const subtitleY = spring({
    frame: frame - 30,
    fps,
    config: {
      damping: 200,
    },
    from: 50,
    to: 0,
  });

  // Background gradient animation
  const gradientProgress = interpolate(
    frame,
    [0, 300],
    [0, 1],
    {
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${gradientProgress * 360}deg, #F8F7F5 0%, #F5E6E0 50%, #F8F7F5 100%)`,
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
        {/* Title */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            fontFamily: 'serif',
            fontSize: 120,
            fontWeight: 'normal',
            color: '#8B1A1A',
            textAlign: 'center',
            marginBottom: 40,
            letterSpacing: '-2px',
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            fontSize: 48,
            color: '#5D5C6C',
            textAlign: 'center',
            fontWeight: 300,
            letterSpacing: '2px',
          }}
        >
          {subtitle}
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(139, 26, 26, 0.1)',
            opacity: interpolate(frame, [60, 120], [0, 0.3], {
              extrapolateRight: 'clamp',
            }),
            transform: `scale(${interpolate(frame, [60, 120], [0.5, 1], {
              extrapolateRight: 'clamp',
            })})`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'rgba(139, 26, 26, 0.1)',
            opacity: interpolate(frame, [90, 150], [0, 0.3], {
              extrapolateRight: 'clamp',
            }),
            transform: `scale(${interpolate(frame, [90, 150], [0.5, 1], {
              extrapolateRight: 'clamp',
            })})`,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
