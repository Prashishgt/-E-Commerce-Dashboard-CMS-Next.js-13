"use client";
import { Modal } from "@/components/ui/modal";

export default function SetupPage() {
  return (
    <div className="p-4">
      <Modal isOpen onClose={() => {}} title="Text" description="testing">
        Children
      </Modal>
    </div>
  );
}
