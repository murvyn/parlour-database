import "./form-input.styles.scss";

function FormInput({ label, inputOptions }) {
  return (
      <form>
        <div className="field">
          <input {...inputOptions} />
          <label >{label}</label>
        </div>
      </form>
  );
}

export default FormInput;
