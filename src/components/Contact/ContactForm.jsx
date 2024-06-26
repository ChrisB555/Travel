import { ContactInput, ErrorP,ContactLabel } from "./Contact.style";

const ContactForm = ({ name, handleChange, type, value, error}) => {

  return (
    <> 
   
      <ContactLabel>{name} :</ContactLabel> 
      <ContactInput
        placeholder={name}
        value={value}
        onChange={(e) => handleChange(e, name)}
        type={type}
      />
    
 
        {error && <ErrorP>{error}</ErrorP>}  
    </>
  );
};

export default ContactForm;