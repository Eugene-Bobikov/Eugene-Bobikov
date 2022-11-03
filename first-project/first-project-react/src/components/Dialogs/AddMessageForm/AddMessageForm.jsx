import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  requaired,
} from "../../../utils/validators/validators";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newMessageText"}
          placeholder={"Enter your message"}
          validate={[requaired, maxLengthCreator(10)]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialogsAddMessageForm" })(AddMessageForm);
