import { useForm } from "../../contexts/FormContext";
import { FormSectionLayout } from "../UtilComponents";

const SliderInput = ({ feature, name, min, max, defaultValue, value }) => {
  const { handleInputChange } = useForm();

  return (
    <FormSectionLayout>
      <div className="flex items-center space-x-2">
        <p>{feature}</p>
        <p className="border rounded px-3"> {value} mmHg</p>
      </div>
      <div>
        <input
          name={name}
          type="range"
          min={min}
          max={max}
          defaultValue={defaultValue}
          className="slider-thumb slider-track"
          onChange={handleInputChange}
        />
        <div className="flex justify-between text-xs md:text-sm">
          <p>{min}</p>
          <p>{max}</p>
        </div>
      </div>
    </FormSectionLayout>
  );
};

export default SliderInput;
