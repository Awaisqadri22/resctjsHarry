import React, { useState } from "react";

export default function UseStateUsage() {
  const [form, setForm] = useState({
    firstName: "Awais iqbal",
    lastName: "Qadri",
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <p>
        FirstName {form.firstName} + LastName {form.lastName}
      </p>
    </>
  );
}
