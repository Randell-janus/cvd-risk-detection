import React, { useContext, useState, useEffect, createContext } from "react";

const FormContext = createContext();

export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isPredicting, setIsPredicting] = useState(false);

  const genders = ["Male", "Female"];
  const levels = ["Normal", "Above normal", "High"];
  const polars = ["No", "Yes"];

  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(50);
  const [height, setHeight] = useState(164);
  const [weight, setWeight] = useState(74);

  const [systolic, setSystolic] = useState(145);
  const [diastolic, setDiastolic] = useState(95);
  const [cholLevel, setCholLevel] = useState(1);
  const [glucLevel, setGlucLevel] = useState(1);

  const [isSmoking, setIsSmoking] = useState();
  const [isAlcoholic, setIsAlcoholic] = useState();
  const [isActive, setIsActive] = useState();

  const [bmi, setBmi] = useState();

  const [data, setData] = useState("");

  const INIT_URL = "https://fastapi-ml-server.herokuapp.com/";
  const PREDICT_URL = "https://fastapi-ml-server.herokuapp.com/predict";

  const initializeServer = () => {
    fetch(INIT_URL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setIsInitializing(false);
      });
  };

  const handleInputChange = (e) => {
    if (e.target.name === "age") {
      setAge(e.target.value);
    } else if (e.target.name === "height") {
      setHeight(e.target.value);
    } else if (e.target.name === "weight") {
      setWeight(e.target.value);
    } else if (e.target.name === "systolic") {
      setSystolic(e.target.value);
    } else if (e.target.name === "diastolic") {
      setDiastolic(e.target.value);
    } else if (e.target.name === "smoking") {
      setIsSmoking(e.target.value);
    } else if (e.target.name === "alcoholic") {
      setIsAlcoholic(e.target.value);
    } else if (e.target.name === "active") {
      setIsActive(e.target.value);
    }
  };

  const handleSelectChange = (e) => {
    if (e.target.name === "cholesterol") {
      setCholLevel(e.target.value);
    } else if (e.target.name === "glucose") {
      setGlucLevel(e.target.value);
    } else if (e.target.name === "gender") {
      setGender(e.target.value);
    }
  };

  const computeBMI = () => {
    const bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
  };

  const predictData = async () => {
    setIsPredicting(true);

    const request = {
      age: age,
      gender: gender,
      systolicBP: systolic,
      diastolicBP: diastolic,
      cholesterol: cholLevel,
      glucose: glucLevel,
      smoke: isSmoking,
      alcoholic: isAlcoholic,
      active: isActive,
      bmi: bmi,
    };

    try {
      const response = await fetch(PREDICT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
      const data = await response.json();
      // console.log(data);
      setData(data);
      setIsPredicting(false);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    isInitializing,

    gender,
    setGender,
    age,
    setAge,
    height,
    setHeight,
    weight,
    setWeight,
    systolic,
    setSystolic,
    diastolic,
    setDiastolic,
    cholLevel,
    setCholLevel,
    glucLevel,
    setGlucLevel,
    isSmoking,
    setIsSmoking,
    isAlcoholic,
    setIsAlcoholic,
    isActive,
    setIsActive,

    bmi,
    levels,
    genders,
    polars,
    handleInputChange,
    handleSelectChange,

    predictData,
    data,
    isPredicting,
  };

  useEffect(() => {
    computeBMI();
  }, [height, weight]);

  useEffect(() => {
    initializeServer();
  }, []);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
