import React, { useState } from "react";
import PopUp from "../../components/PopUp/PopUp";
import FormAddAnime from "../../forms/FormAddAnime/FormAddAnime";

const PopUpAddAnimes = (props) => {
  return (
    <PopUp onClose={props.onClose}>
      <FormAddAnime />
    </PopUp>
  );
};

export default PopUpAddAnimes;
