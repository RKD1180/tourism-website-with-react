import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hook/useAuth";
import "./BookNow.css";

const BookNow = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://calm-forest-62099.herokuapp.com/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    const serviceName = service.name;
    const serviceImg = service.img;

    data.order = { serviceName, serviceImg };

    fetch("https://calm-forest-62099.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Service Order Successfully");
          reset();
        }
      });
  };
  return (
    <div>
      {/* details of the product */}
      <div className="container">
        <div className="row">
          <div className="col-md-9 mt-4 mx-auto">
            <div className="card" style={{ width: "50rem" }}>
              <img
                src={service.img}
                className="card-img-top"
                height="250rem"
                alt="..."
              />
              <div className="card-body" style={{ height: "12rem" }}>
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.short_des}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* user add details  */}
      <div className="container">
        <div className="row">
          <div className="form mx-auto col-md-5 mx-auto mt-5 mb-4  ps-4">
            <form
              className="shipping-form p-3 rounded mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2>Please FillUp The Form </h2>
              <input defaultValue={user.displayName} {...register("name")} />

              <input
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                placeholder="Status"
                defaultValue="Pending"
                readOnly
                {...register("status")}
              />
              <input
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />

              <input placeholder="City" defaultValue="" {...register("city")} />
              <input
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
