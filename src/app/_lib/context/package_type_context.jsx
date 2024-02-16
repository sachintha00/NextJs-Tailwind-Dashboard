"use client";
const { createContext, useState, useContext } = require("react");

const LandingPackagePricingTypeContext = createContext({});

export const useLandingPackagePricingType = () =>
  useContext(LandingPackagePricingTypeContext);

export const LandingPackagePricingTypeProvider = ({ children }) => {
  const [packageType, setPackageType] = useState("");

  return (
    <LandingPackagePricingTypeContext.Provider
      value={{ packageType, setPackageType }}
    >
      {children}
    </LandingPackagePricingTypeContext.Provider>
  );
};
