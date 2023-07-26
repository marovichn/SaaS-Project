"use client";

import { FC } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "./ui/badge";

interface ProModalProps {}

const ProModal: FC<ProModalProps> = ({}) => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className="flex items-center justify-center gap-x-2 font-bold py-1">
              Upgrade to BrainPulse
              <Badge variant="premium" className='uppercase text-sm py-1'>Pro</Badge>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
