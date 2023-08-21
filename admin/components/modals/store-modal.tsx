"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create store"
      description="Manage products and categorires"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future create store form
    </Modal>
  );
};
