import { useForm } from "../../contexts/FormContext";
import { FormSectionLayout } from "../UtilComponents";

const NumberInput = ({ feature, name, min, max, condition }) => {
  const { handleInputChange } = useForm();

  return (
    <>
      <FormSectionLayout>
        <p>{feature}</p>
        <input
          className="input-outline w-full"
          type="number"
          min={min}
          max={max}
          name={name}
          required
          onChange={handleInputChange}
        />
        <p className="text-xs md:text-sm font-extralight text-gray-400 italic text-right sm:text-left">
          {condition}
        </p>
      </FormSectionLayout>
    </>
  );
};

export default NumberInput;
