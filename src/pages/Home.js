import { useForm } from "../contexts/FormContext";

import NumberInput from "../components/inputs/NumberInput";
import SliderInput from "../components/inputs/SliderInput";
import RadioButton from "../components/inputs/RadioButton";

import {
  Divider,
  FieldLayout,
  FormSection,
  FormSectionLabel,
} from "../components/UtilComponents";

import { LevelsSelectBox, GenderSelectBox } from "../components/SelectBoxes";
import { CheckHeroIcon, CogHeroIcon, ExHeroIcon } from "../components/Icons";

const Home = () => {
  const {
    systolic,
    diastolic,
    isPredicting,
    predictData,
    data,
    isInitializing,
  } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    predictData();
  };

  return (
    <div className="main-container">
      <div className="h-full max-w-3xl mx-auto">
        <h1 className="font-semibold">Cardiovascular Risk Detection</h1>
        <form onSubmit={handleSubmit} className="space-y-10 my-8">
          <Divider />

          <FormSection>
            <FormSectionLabel>Objective Features</FormSectionLabel>
            <FieldLayout>
              <GenderSelectBox feature="Gender" name="gender" />
              <NumberInput
                feature="Current Age"
                min="20"
                max="65"
                name="age"
                condition="Must be between 20-65"
              />
            </FieldLayout>
            <FieldLayout>
              <NumberInput
                feature="Height (cm)"
                min="55"
                max="250"
                name="height"
                condition="Must be between 55-250 cm"
              />
              <NumberInput
                feature="Weight (kg)"
                min="10"
                max="200"
                name="weight"
                condition="Must be between 10-200 kg"
              />
            </FieldLayout>
          </FormSection>

          <Divider />

          <FormSection>
            <FormSectionLabel>Examination Features</FormSectionLabel>
            <FieldLayout>
              <SliderInput
                feature="Systolic BP:"
                name="systolic"
                min="90"
                max="200"
                defaultValue="145"
                value={systolic}
              />
              <SliderInput
                feature="Diastolic BP:"
                name="diastolic"
                min="60"
                max="130"
                defaultValue="95"
                value={diastolic}
              />
            </FieldLayout>
            <FieldLayout>
              <LevelsSelectBox feature="Cholesterol Level" name="cholesterol" />
              <LevelsSelectBox feature="Glucose Level" name="glucose" />
            </FieldLayout>
          </FormSection>

          <Divider />

          <FormSection>
            <FormSectionLabel>Subjective Features</FormSectionLabel>
            <RadioButton feature="Do you smoke regularly?" name="smoking" />
            <RadioButton
              feature="Do you often consume alcohol?"
              name="alcoholic"
            />
            <RadioButton feature="Are you physically active?" name="active" />
          </FormSection>

          <Divider />

          <FormSection>
            <FormSectionLabel>Prediction Result</FormSectionLabel>

            <div
              className={
                data.result === 0
                  ? "negative-result"
                  : data.result === 1
                  ? "positive-result"
                  : "no-result"
              }
            >
              {data && data.result === 0 ? (
                <CheckHeroIcon className="h-5 w-5 mr-2" />
              ) : (
                data.result === 1 && <ExHeroIcon className="h-5 w-5 mr-2" />
              )}
              {data ? data.prediction : "No results available yet"}
            </div>
          </FormSection>

          <Divider />

          <footer className="flex justify-end w-full space-x-4">
            <button
              className="disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 py-2 px-4 bg-gray-100 rounded shadow transition duration-200 hover:bg-gray-200"
              type="submit"
              disabled={isInitializing || isPredicting}
            >
              <p>
                {isInitializing
                  ? "Initializing App..."
                  : isPredicting
                  ? "Analyzing Data..."
                  : "Submit Data"}
              </p>
              <CogHeroIcon
                className={`${
                  (isInitializing || isPredicting) && "animate-spin"
                } h-5 w-5 text-gray-600`}
              />
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Home;
