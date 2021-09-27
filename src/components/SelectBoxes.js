import { useForm } from "../contexts/FormContext";
import { FormSectionLayout } from "./UtilComponents";

export const LevelsSelectBox = ({ feature, name }) => {
  const { levels, handleSelectChange } = useForm();

  return (
    <FormSectionLayout>
      <p>{feature}</p>
      <select
        name={name}
        onChange={handleSelectChange}
        className="select-box"
        required
      >
        {levels.map((level, i) => (
          <option
            key={i}
            value={level === levels[0] ? 1 : level === levels[1] ? 2 : 3}
          >
            {level}
          </option>
        ))}
      </select>
    </FormSectionLayout>
  );
};

export const GenderSelectBox = ({ feature, name }) => {
  const { genders, handleSelectChange } = useForm();

  return (
    <FormSectionLayout>
      <p>{feature}</p>
      <select
        name={name}
        onChange={handleSelectChange}
        className="select-box"
        required
      >
        {genders.map((gender, i) => (
          <option key={i} value={gender === genders[0] ? 0 : 1}>
            {gender}
          </option>
        ))}
      </select>
    </FormSectionLayout>
  );
};
