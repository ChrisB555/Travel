import { ContactTextarea, ErrorP, ContactLabel } from "./Contact.style";

const ContactFormTextarea = ({
  name,
  handleChange,
  type,
  value,
  error,
}) => {
  return (
    <>
      <ContactLabel>{name} :</ContactLabel>
      <ContactTextarea
        placeholder={name}
        value={value}
        onChange={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <ErrorP>{error}</ErrorP>}
    </>
  );
};

export default ContactFormTextarea;
