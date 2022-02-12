import { muftijstvaIMedzlisi } from "./constants";

const getSelectOptions = (constantValues, searchByKeys = false) => {
  const selectValues = searchByKeys
    ? Object.keys(constantValues)
    : constantValues;
    
  return selectValues.map((m) => ({
    key: m,
    value: m,
    text: m,
  }));
};

const getMedzlisiOdMuftijstva = (selectedMuftijstvo) => {
  return selectedMuftijstvo
    ? muftijstvaIMedzlisi[selectedMuftijstvo].map((m) => ({
        key: m,
        value: m,
        text: m,
      }))
    : [];
};

export { getSelectOptions, getMedzlisiOdMuftijstva };
