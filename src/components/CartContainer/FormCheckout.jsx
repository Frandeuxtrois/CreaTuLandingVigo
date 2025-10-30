import { useState } from "react";

export default function FormCheckout({ handleCheckout }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    handleCheckout(formData);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Completa tus datos</h4>
      <form onSubmit={handleSubmit}>
        <input value={formData.name} onChange={handleInputChange} name="name" type="text" placeholder="Nombre" required />
        <input value={formData.email} onChange={handleInputChange} name="email" type="email" placeholder="Email" required />
        <input value={formData.phone} onChange={handleInputChange} name="phone" type="tel" placeholder="Teléfono" required />
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
}