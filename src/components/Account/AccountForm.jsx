import { ContactInput, ErrorP} from "./Account.style";

const ContactForm = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <ContactInput
        placeholder={name}
        defaultValue={value}
        onChange={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <ErrorP>{error}</ErrorP>}
    </>
  );
};

export default ContactForm;
