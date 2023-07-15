import React, { useEffect, useState } from "react";

function Form(props) {
  console.log("abc", props);
  const initialData = {
    name: "",
    favTime: "",
    focus: "",
  };
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    console.log("Form Componenti mount edildi");
    if (props.editingMember) {
      setFormData(props.editingMember);
    }
  }, [props.editingMember]);

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
    props.addMember(formData);
  };
  return (
    <form onSubmit={submitFn}>
      <br />
      <label htmlFor="isim">İsim:</label>
      <br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChangeFn}
      />

      <br />
      <label htmlFor="zaman">Favori Çalışma Zamanı:</label>
      <br />
      <input
        type="text"
        name="favTime"
        value={formData.favTime}
        onChange={onChangeFn}
      />
      <br />
      <label htmlFor="uzmanlik">Uzmanlığı:</label>
      <br />
      <input
        type="text"
        name="focus"
        value={formData.focus}
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
