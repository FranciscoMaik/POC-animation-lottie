import React, { useState } from 'react';
import Lottie, { Options } from 'react-lottie';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border: none;
  background: #242424;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 140px;
  padding: 16px;

  > div {
    pointer-events: none;
    border-radius: 8px;
  }
`;

interface ButtonAnimationProps {
  iconAnimation: object;
  textButton: string;
}

export const ButtonAnimation: React.FC<ButtonAnimationProps> = function ({
  iconAnimation,
  textButton,
}) {
  const [direction, setDirection] = useState<number>(1);

  const revertAnimation = -1;
  const normalAnimation = 1;

  const onHoverName = () => {
    setDirection(prev => {
      if (prev === revertAnimation) {
        return normalAnimation;
      }
      return revertAnimation;
    });
  };

  const onHoverNameOut = () => {
    setDirection(prev => {
      if (prev === revertAnimation) {
        return normalAnimation;
      }
      return revertAnimation;
    });
  };

  const handleClick = () => {
    alert('Botão clicado');
  };

  const defaultOptionsAnimation: Options = {
    loop: false,
    autoplay: false,
    animationData: iconAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <ButtonWrapper
        onMouseEnter={onHoverName}
        onMouseOut={onHoverNameOut}
        onClick={handleClick}
      >
        <div>
          <Lottie
            options={defaultOptionsAnimation}
            height={80}
            width={80}
            isStopped={false}
            isPaused={false}
            direction={direction}
            speed={2.5}
            style={{ borderRadius: 8, background: '#242424' }}
          />
        </div>

        <p>{textButton}</p>
      </ButtonWrapper>
    </div>
  );
};
