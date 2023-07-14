import React, { useState } from "react";

function Form() {
  const initialData = {
    isim: "",
    zaman: "",
    uzmanlık: "",
  };
  const [formData, setFormData] = useState(initialData);
  const resetFn = () => {
    console.log("resetFn çalıştı");
    setFormData(initialData);
  };

  const onChangeFn = (e) => {
    console.log("OnChangeFn çalıştı!", e);
    const editingField = e.target.name;
    const newValue = e.target.value;
    let newFormData = { ...formData, [editingField]: newValue };
    setFormData(newFormData);
  };

  const submitFn = (e) => {
    e.preventDefault();
    console.log("SubmitFn Çalıştı:");
  };
  return (
    <form onSubmit={submitFn}>
      <br />
      <label htmlFor="isim">İsim:</label>
      <br />
      <input
        type="text"
        id="isim"
        name="isim"
        value={formData.isim}
        onChange={onChangeFn}
      />

      <br />
      <label htmlFor="zaman">Favori Çalışma Zamanı:</label>
      <br />
      <input
        type="text"
        name="zaman"
        value={formData.zaman}
        onChange={onChangeFn}
      />
      <br />
      <label htmlFor="uzmanlik">Uzmanlığı:</label>
      <br />
      <input
        type="text"
        name="uzmanlik"
        value={formData.uzmanlik}
        onChange={onChangeFn}
      />
      <br />
      <button type="submit"> Gönder </button>
      <br />
      <button type="reset" onClick={resetFn}>
        {" "}
        Sıfırla{" "}
      </button>
    </form>
  );
}

export default Form;
