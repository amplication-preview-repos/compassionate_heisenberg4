import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ShopTitle } from "../shop/ShopTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" multiline source="comment" />
        <DateTimeInput label="DateTime" source="dateTime" />
        <NumberInput step={1} label="Rating" source="rating" />
        <ReferenceInput source="shop.id" reference="Shop" label="Shop">
          <SelectInput optionText={ShopTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
