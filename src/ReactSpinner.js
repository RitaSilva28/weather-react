import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React from "react";

export default function ReactSpinner(){

    return (
        <Loader
          type="ThreeDots"
          color="#404969"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );

}