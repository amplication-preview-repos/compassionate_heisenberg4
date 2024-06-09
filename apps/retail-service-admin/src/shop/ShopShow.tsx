import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SHOP_TITLE_FIELD } from "./ShopTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ShopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="Contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Review" target="shopId" label="Reviews">
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateTime" source="dateTime" />
            <TextField label="ID" source="id" />
            <TextField label="Rating" source="rating" />
            <ReferenceField label="Shop" source="shop.id" reference="Shop">
              <TextField source={SHOP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Service"
          target="shopId"
          label="Services"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Duration" source="duration" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <ReferenceField label="Shop" source="shop.id" reference="Shop">
              <TextField source={SHOP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
