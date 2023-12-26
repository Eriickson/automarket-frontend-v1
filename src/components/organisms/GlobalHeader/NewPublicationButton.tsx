import React from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/atoms";

export const NewPublicationButton = () => {
  const { push } = useRouter();

  return (
    <Button
      bgColor="gray.100"
      colorScheme="primary"
      variant="ghost"
      onClick={() => push("/dashboard/publications/create")}
    >
      Nueva publicación
    </Button>
  );
};
