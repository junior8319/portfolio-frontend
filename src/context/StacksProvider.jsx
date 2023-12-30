import { useCallback, useEffect, useState } from 'react';
import { getStacks } from '../helpers/stacksApi';
import { StacksContext } from './Contexts';

const StacksProvider = ({ children }) => {
  const [stacks, setStacks] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [stack, setStack] = useState({
    title: '',
    description: '',
    stackDocsUrl: '',
    imageUrl: '',
    stackUrl: '',
  });
  const [firstStackIndex] = useState(0);
  const [lastStackIndex, setLastStackIndex] = useState(firstStackIndex);
  const [currentStackIndex, setCurrentStackIndex] = useState(firstStackIndex);

  const goToNextCard = useCallback(() => {
    if (currentStackIndex === lastStackIndex) {
      setCurrentStackIndex(0);
      return
    }

    setCurrentStackIndex((currentStackIndex + 1));
  }, [lastStackIndex, currentStackIndex]);

  const getStacksFromApi = async () => {
    const data = await getStacks();
    setStacks(data);
    if (data.length > 0) {
      setLastStackIndex(data.length - 1);
    }
    return data;
  };
  
  useEffect(() => {
    getStacksFromApi();
  }, []);

  let mappedStacks = stacks.map((stack) => stack);


  const contextValue = {
    stacks,
    stack,
    mappedStacks,
    isUpdating,
    lastStackIndex,
    currentStackIndex,
    firstStackIndex,
    setStacks,
    setStack,
    setIsUpdating,
    getStacksFromApi,
    setCurrentStackIndex,
    goToNextCard
  }

  return (
    <StacksContext.Provider value={contextValue}>
      {children}
    </StacksContext.Provider>
  )
};

export default StacksProvider;