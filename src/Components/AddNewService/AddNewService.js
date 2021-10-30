import React from "react";
import { useForm } from "react-hook-form";

const AddNewService = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://calm-forest-62099.herokuapp.com/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Services Add  Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="form mx-auto col-md-5 mx-auto mt-5 mb-4  ps-4">
            <form
              className="shipping-form p-3 rounded mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2>Add A new Service </h2>

              <input
                label="Service Name"
                placeholder="Service Name"
                defaultValue=""
                {...register("name")}
              />
              <input
                placeholder="Image Url "
                defaultValue=""
                {...register("img")}
              />
              <input
                placeholder="Short Description"
                defaultValue=""
                {...register("short_des")}
              />

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
