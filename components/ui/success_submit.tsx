import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const SuccessSubmit = () => {
  return (
    <Alert>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        We will contact you soon!!
      </AlertDescription>
    </Alert>
  );
};
