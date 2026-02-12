import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from 'remotion';

export const LogoAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo text animation
  const logoOpacity = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
    from: 0,
    to: 1,
  });
  const logoScale = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
    from: 0.5,
    to: 1,
  });

  // Dot animation
  const dotOpacity = spring({
    frame: frame - 20,
    fps,
    config: {
      damping: 200,
    },
    from: 0,
    to: 1,
  });
  const dotScale = spring({
    frame: frame - 20,
    fps,
    config: {
      damping: 200,
    },
    from: 0,
    to: 1,
  });

  // Background fade
  const bgOpacity = interpolate(
    frame,
    [0, 30, 150, 180],
    [0, 1, 1, 0],
    {
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: `rgba(248, 247, 245, ${bgOpacity})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {/* Logo Text */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            fontFamily: 'serif',
            fontSize: 120,
            fontWeight: 'normal',
            color: '#8B1A1A',
            letterSpacing: '-2px',
          }}
        >
          Adenails
        </div>

        {/* Dot */}
        <div
          style={{
            opacity: dotOpacity,
            transform: `scale(${dotScale})`,
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: '#8B1A1A',
            marginTop: 8,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
