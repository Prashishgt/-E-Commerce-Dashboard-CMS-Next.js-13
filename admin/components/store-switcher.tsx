"use client";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Store } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Store as StoreIcon } from "lucide-react";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherPropsI extends PopoverTriggerProps {
  items: Store[];
}

const StoreSwitcher = ({ className, items = [] }: StoreSwitcherPropsI) => {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item: any) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    (item: any) => item.value === params.storeId
  );

  const [open, setOpen] = useState<boolean>(false);
  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button>
          <Store />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
};

export default StoreSwitcher;
