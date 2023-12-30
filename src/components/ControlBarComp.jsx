import { useContext, useEffect } from "react";
import { StacksContext } from "../context/Contexts";
import { ControlButton } from "../styled/Buttons";
import ControlBar from "../styled/ControlBar";

const ControlBarComp = ({ intervalTime }) => {
  const {
    firstStackIndex,
    lastStackIndex,
    currentStackIndex,
    goToNextCard,
    setCurrentStackIndex,
  } = useContext(StacksContext);

  useEffect(() => {
    const carouselInterval = setInterval(goToNextCard, intervalTime);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [currentStackIndex, goToNextCard, intervalTime]);

  const goToPreviousCard = () => {
    if (currentStackIndex === firstStackIndex) {
      setCurrentStackIndex(lastStackIndex);
      return;
    };

    setCurrentStackIndex((currentStackIndex - 1));
  };

  const goToLastCard = () => {
    setCurrentStackIndex(lastStackIndex);
  };

  const goToFirstCard = () => {
    setCurrentStackIndex(firstStackIndex);
  };
  return (
    <ControlBar>
        <ControlButton
          type="button"
          onClick={() => goToFirstCard()}
        >
          { '|<' }
        </ControlButton>

        <ControlButton
          type="button"
          onClick={() => goToPreviousCard()}
        >
          { '<' }
        </ControlButton>

        <ControlButton
          type="button"
          onClick={() => goToNextCard()}
        >
          { '>' }
        </ControlButton>

        <ControlButton
          type="button"
          onClick={() => goToLastCard()}
        >
          { '>|' }
        </ControlButton>
      </ControlBar>
  );
};

export default ControlBarComp;