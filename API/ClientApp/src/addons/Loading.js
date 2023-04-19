import { Spinner } from "reactstrap";

export function Loading() {
  return (
    <div style={{ display: 'flex', margin: 'auto', width: '100%', justifyContent: 'center' }}>
      <Spinner></Spinner>
    </div>
  );
}