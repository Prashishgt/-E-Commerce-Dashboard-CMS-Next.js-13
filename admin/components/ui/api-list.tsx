"use client";
import { UserOrigin } from "@/hooks/user-origin";
import { useParams } from "next/navigation";
import React from "react";
import ApiAlert from "@/components/ui/api-alert";

interface ApiListPropsI {
  entityName: string;
  entityIdName: string;
}

const ApiList = ({ entityIdName, entityName }: ApiListPropsI) => {
  const params = useParams();
  const origin = UserOrigin();
  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};

export default ApiList;
