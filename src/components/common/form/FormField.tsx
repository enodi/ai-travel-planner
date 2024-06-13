import React from "react";
import { Field, FieldProps } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";

interface FormFieldProps {
  label?: string;
  name: string;
  placeholder: string;
  validate: (value: string) => string | undefined;
  type?: string;
}

function FormField({
  label,
  name,
  placeholder,
  validate,
  type = "input",
}: FormFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps<any>) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name] ? true : false}
        >
          {label && <FormLabel>{label}</FormLabel>}
          {type === "textarea" ? (
            <Textarea {...field} placeholder={placeholder} />
          ) : (
            <Input
              {...field}
              placeholder={placeholder}
              sx={{ borderRadius: "50px", padding: "30px" }}
            />
          )}
          <FormErrorMessage>{String(form.errors[name])}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default FormField;
