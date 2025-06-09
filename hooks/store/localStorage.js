export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const userCredit = (key) => {
  try {
    const serializedState = localStorage.getItem(`${key}`);
    return serializedState ? JSON.parse(serializedState) : 0;
  } catch (error) {
    console.log(error);
  } finally {
    return null;
  }
};
export const getSelectedPlan = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState ? JSON.parse(serializedState) : null;
    // const value = localStorage.getItem(key);
    // if (value) {
    //   return JSON.parse(value);
    // }
  } catch (error) {
    console.log(error);
  } finally {
    return null;
  }
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};
