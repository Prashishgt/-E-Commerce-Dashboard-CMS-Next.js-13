import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import prismaDb from "@/lib/prismadb";

type dashboardPropsI = {
  children: React.ReactNode;
  params: { storeId: string };
};

const layout = async ({ children, params }: dashboardPropsI) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-ing");
  }

  const store = await prismaDb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div>This will be navbar</div>
      {children}
    </>
  );
};

export default layout;
