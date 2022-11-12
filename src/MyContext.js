import React, { useState, useContext, useEffect } from "react";

export const MyContext = React.createContext();
export const MyContextUpdate = React.createContext();

// hooks
export const usePortfolio = () => useContext(MyContext);
export const usePortfolioUpdate = () => useContext(MyContextUpdate);

export const MyContextProvider = ({ children }) => {
  const [isModal, setModal] = useState(false);
  const [portfolioState, setPortfolioState] = useState({
    project: {
      id: null,
      title: null,
      isModal: isModal,
      setModal: setModal,
    },
    header: {
      hero: null,
      nav: false
    },
    refs: {
      homeRef: null,
      projectRef: null,
      skillRef: null,
      educationRef: null,
      experienceRef: null,
      contactRef: null,
      workRef: null,
      personalRef: null,
    },
  });

  useEffect(() => {
    console.log("1666 hello000", portfolioState);
  }, [portfolioState]);

  const updatePortfolio = (data, key) => {
    console.log("1666 hello00", data, key);
    setPortfolioState((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        ...data,
      },
    }));
  };

  return (
    <MyContext.Provider value={portfolioState}>
      <MyContextUpdate.Provider value={updatePortfolio}>
        {children}
      </MyContextUpdate.Provider>
    </MyContext.Provider>
  );
};
