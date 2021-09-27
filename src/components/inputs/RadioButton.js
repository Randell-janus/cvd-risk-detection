import { useForm } from "../../contexts/FormContext";

const RadioButton = ({ feature, name }) => {
  const { handleInputChange, polars } = useForm();

  return (
    <div
      onChange={handleInputChange}
      className="sm:flex justify-between space-y-2 sm:space-y-0"
    >
      <p>{feature}</p>
      <div className="flex justify-between sm:space-x-12 ">
        {polars.map((polar, i) => (
          <label className="flex items-center space-x-4 cursor-pointer" key={i}>
            <input type="radio" value={i} name={name} required />
            <p>{polar}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
